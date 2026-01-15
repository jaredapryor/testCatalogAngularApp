import { Component, Input, OnInit, inject } from '@angular/core';
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
export class AlbumComponent {
  @Input() album: Album | undefined = undefined;
  @Input() artistIdNum: number = 0;
  @Input() sortedIndex: number = 0;
  @Input() condensed: boolean = false;
  @Input() showArtistName: boolean = false;
  @Input() albumClassOverride: string = '';

  artistsService: ArtistsService = inject(ArtistsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  artistId: number | undefined = undefined;
  albumId: number | undefined = undefined;
  protected finalAlbum: Album | undefined;
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
  }

  ngOnInit() {
    if (this.albumClassOverride !== '') {
      this.albumClass = this.albumClassOverride;
    }    
    else {
      if (this.sortedIndex % 2 == 1) {
        this.albumClass = 'dark';
      } else {
        this.albumClass = 'light';
      }
    }

    if (this.album !== undefined) {
      this.finalAlbum = this.album;
    } else if (this.artistId !== undefined && this.albumId !== undefined) {
      this.finalAlbum = this.artistsService.getAlbum(this.artistId, this.albumId);
    }

    if (this.finalAlbum !== undefined) {
      switch (this.finalAlbum.certification) {
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

      const albumImageNum = Math.floor(this.finalAlbum.albumImageRandNum * 20) + 1;
      this.albumImageSrc = `./assets/album-covers/albumcover${albumImageNum}.png`;
    }
  }
}
