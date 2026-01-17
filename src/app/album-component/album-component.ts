import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Album } from '../album';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-album-component',
  imports: [DecimalPipe, RouterModule],
  templateUrl: './album-component.html',
  styleUrl: './album-component.scss',
})
export class AlbumComponent implements OnInit {
  @Input() album: Album | undefined = undefined;
  @Input() artistIdNum: number = 0;
  @Input() sortedIndex: number = 0;
  @Input() condensed: boolean = false;
  @Input() showArtistName: boolean = false;
  @Input() albumClassOverride: string = '';

  artistsService: ArtistsService = inject(ArtistsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  protected artistId: number | undefined = undefined;
  protected albumId: number | undefined = undefined;
  protected globalAlbumId: number | undefined = undefined;
  protected finalAlbum = signal<Album | undefined>(undefined);
  protected show404Img = signal(false);
  protected albumErrorMsg = signal('');
  protected albumClass: string = 'dark';
  protected albumImageSrc: string = '';
  protected albumCertImageSrc: string = '';
  protected albumCertImageDesc: string = '';

  constructor() {
    const artistIdParam = this.route.snapshot.params['artistId'];
    if (artistIdParam !== null && artistIdParam !== undefined) {
      this.artistId = Number(artistIdParam);
    }

    const albumIdParam = this.route.snapshot.params['albumId'];
    if (albumIdParam !== null && albumIdParam !== undefined) {
      this.albumId = Number(albumIdParam);
    }

    const globalAlbumIdParam = this.route.snapshot.params['globalAlbumId'];
    if (globalAlbumIdParam !== null && globalAlbumIdParam !== undefined) {
      this.globalAlbumId = Number(globalAlbumIdParam);
    }
  }

  ngOnInit() {
    if (this.albumClassOverride !== '') {
      this.albumClass = this.albumClassOverride;
    } else {
      if (this.sortedIndex % 2 == 1) {
        this.albumClass = 'dark';
      } else {
        this.albumClass = 'light';
      }
    }

    if (this.album !== undefined) {
      this.initializeAlbum(this.album);
      this.finalAlbum.set(this.album);
    } else if (this.artistId !== undefined && this.albumId !== undefined) {
      this.artistsService.getAlbum(this.artistId, this.albumId).then((album: Album | undefined) => {
        this.albumErrorMsg.set('');
        this.initializeAlbum(album);
        this.finalAlbum.set(album);
        if (album === undefined && !this.show404Img()) {
          this.show404Img.set(true);
        } else if (album !== undefined && this.show404Img()) {
          this.show404Img.set(false);
        }
      }).catch((e) => {
        this.show404Img.set(false);
        this.albumErrorMsg.set(e);
        this.finalAlbum.set(undefined);
      });
    } else if (this.globalAlbumId !== undefined) {
      this.artistsService.getAlbumGlobal(this.globalAlbumId).then((album: Album | undefined) => {
        this.albumErrorMsg.set('');
        this.initializeAlbum(album);
        this.finalAlbum.set(album);
        if (album === undefined && !this.show404Img()) {
          this.show404Img.set(true);
        } else if (album !== undefined && this.show404Img()) {
          this.show404Img.set(false);
        }
      }).catch ((e) => {
        this.show404Img.set(false);
        this.albumErrorMsg.set(e);
        this.finalAlbum.set(undefined);
      });
    }
  }

  private initializeAlbum(album: Album | undefined): void {
    if (album !== undefined) {
      switch (album.certification) {
        case 'None': {
          this.albumCertImageSrc = './assets/records/blackRecord.png';
          this.albumCertImageDesc = 'No certifications';
          break;
        }
        case 'Silver': {
          this.albumCertImageSrc = './assets/records/silverRecord.png';
          this.albumCertImageDesc = 'Certified Silver!';
          break;
        }
        case 'Gold': {
          this.albumCertImageSrc = './assets/records/goldRecord.png';
          this.albumCertImageDesc = 'Certified Gold!';
          break;
        }
        case 'Platinum': {
          this.albumCertImageSrc = './assets/records/platinumRecord.png';
          this.albumCertImageDesc = 'Certified Platinum!!';
          break;
        }
        case 'Multi-Platinum': {
          this.albumCertImageSrc = './assets/records/multiPlatinumRecord.png';
          this.albumCertImageDesc = 'Certified Multi Platinum!!';
          break;
        }
        case 'Diamond': {
          this.albumCertImageSrc = './assets/records/diamondRecord.png';
          this.albumCertImageDesc = 'Certified Diamond!!!';
          break;
        }
      }

      const albumImageNum = Math.floor(album.albumImageRandNum * 20) + 1;
      this.albumImageSrc = `./assets/album-covers/albumcover${albumImageNum}.png`;
    }
  }
}
