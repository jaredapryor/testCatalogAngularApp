import { Component, Input, OnInit, signal, inject } from '@angular/core';
import { AlbumComponent } from '../album-component/album-component';
import { Artist } from '../artist';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-component',
  imports: [AlbumComponent, RouterModule],
  templateUrl: './artist-component.html',
  styleUrl: './artist-component.scss',
})
export class ArtistComponent implements OnInit {
  @Input() artist: Artist | undefined = undefined;
  @Input() condensed: boolean = false;

  artistsService: ArtistsService = inject(ArtistsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  artistId: number | undefined = undefined;
  protected finalArtist: Artist | undefined;
  protected artistImageSrc: string = '';
  protected artistCountryImageSrc: string = '';
  protected showAlbums = signal(false);

  constructor() {
    const idParam = this.route.snapshot.params['artistId'];
    if (idParam !== null && idParam !== undefined) {
      this.artistId = Number(idParam);
    }
  }

  onShowAlbumsToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.showAlbums.set(input.checked);
  }

  ngOnInit() {
    if (this.artist !== undefined) {
      this.finalArtist = this.artist;
    } else if (this.artistId !== undefined) {
      this.finalArtist = this.artistsService.getArtistById(this.artistId);
    }

    if (this.finalArtist !== undefined) {
      this.finalArtist.albums.sort((a, b) => b.publicationYear - a.publicationYear);

      if (this.finalArtist.isGroup) {
        const groupImageNum = Math.floor(this.finalArtist.artistImageRandNum * 5) + 1;
        this.artistImageSrc = `./assets/people/group${groupImageNum}.png`;
      } else {
        const personImageNum = Math.floor(this.finalArtist.artistImageRandNum * 7) + 1;
        this.artistImageSrc = `./assets/people/person${personImageNum}.png`;
      }

      switch (this.finalArtist.countryOfOrigin) {
        case "USA": {
          this.artistCountryImageSrc = './assets/flags/US.svg'
          break;
        }
        case "UK": {
          this.artistCountryImageSrc = './assets/flags/GB.svg'
          break;
        }
        case "Canada": {
          this.artistCountryImageSrc = './assets/flags/CA.svg'
          break;
        }
        case "Australia": {
          this.artistCountryImageSrc = './assets/flags/AU.svg'
          break;
        }
        case "Germany": {
          this.artistCountryImageSrc = './assets/flags/DE.svg'
          break;
        }
        case "Sweden": {
          this.artistCountryImageSrc = './assets/flags/SE.svg'
          break;
        }
        case "Brazil": {
          this.artistCountryImageSrc = './assets/flags/BR.svg'
          break;
        }
        case "South Africa": {
          this.artistCountryImageSrc = './assets/flags/ZA.svg'
          break;
        }
        case "Nigeria": {
          this.artistCountryImageSrc = './assets/flags/NG.svg'
          break;
        }
        case "South Korea": {
          this.artistCountryImageSrc = './assets/flags/KR.svg'
          break;
        }
        case "Japan": {
          this.artistCountryImageSrc = './assets/flags/JP.svg'
          break;
        }
        case "India": {
          this.artistCountryImageSrc = './assets/flags/IN.svg'
          break;
        }
      }
    }
  }
}
