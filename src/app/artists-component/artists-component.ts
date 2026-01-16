import { Component, signal, inject } from '@angular/core';
import { ArtistComponent } from '../artist-component/artist-component';
import { Artist } from '../artist';
import { ArtistsService } from '../artists.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-artists-component',
  imports: [ArtistComponent, RouterModule],
  templateUrl: './artists-component.html',
  styleUrl: './artists-component.scss',
})
export class ArtistsComponent {
  artistsService: ArtistsService = inject(ArtistsService);
  protected numberOfArtists = signal(0);
  protected artists = signal<Artist[]>([]);

  constructor() {
    this.artistsService.getAllArtists().then((artistsList: Artist[]) => {
      this.artists.set(artistsList);
      this.numberOfArtists.set(artistsList.length);
    });
  }
}
