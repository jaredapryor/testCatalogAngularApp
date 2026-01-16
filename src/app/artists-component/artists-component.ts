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
  protected showNoArtistsContent = signal(false);
  protected artistsErrorMsg = signal('');

  constructor() {
    this.artistsService.getAllArtists().then((artistsList: Artist[]) => {
      this.artists.set(artistsList);
      this.numberOfArtists.set(artistsList.length);
      this.artistsErrorMsg.set('');
      this.updateShowNoArtistsContent(artistsList, this.showNoArtistsContent());
    }).catch((e) => {
      this.artistsErrorMsg.set(e);
      this.updateShowNoArtistsContent(this.artists(), this.showNoArtistsContent());
    });
  }

  private updateShowNoArtistsContent(artistsList: Artist[], currValue: boolean): void {
    if (artistsList.length === 0 && !currValue) {
      this.showNoArtistsContent.set(true);
    } else if (artistsList.length > 0 && currValue) {
      this.showNoArtistsContent.set(false);
    }
  }
}
