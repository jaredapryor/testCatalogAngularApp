import { Component, OnInit, signal, inject } from '@angular/core';
import { ArtistComponent } from '../artist-component/artist-component';
import { Artist } from '../artist';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artists-component',
  imports: [ArtistComponent],
  templateUrl: './artists-component.html',
  styleUrl: './artists-component.scss',
})
export class ArtistsComponent implements OnInit {
  artistsService: ArtistsService = inject(ArtistsService);
  protected numberOfArtists = signal(0);
  protected artists: Artist[] = [];

  constructor() {
    this.artists = this.artistsService.getAllArtists();
  }

  ngOnInit() {
    this.numberOfArtists.set(this.artists.length);
  }
}
