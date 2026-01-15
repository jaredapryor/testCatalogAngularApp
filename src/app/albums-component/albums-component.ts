import { Component, OnInit, signal, inject } from '@angular/core';
import { AlbumComponent } from '../album-component/album-component';
import { ArtistsService } from '../artists.service';
import { Album } from '../album';

@Component({
  selector: 'app-albums-component',
  imports: [AlbumComponent],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.scss',
})
export class AlbumsComponent implements OnInit {
  artistsService: ArtistsService = inject(ArtistsService);
  protected numberOfAlbums = signal(0);
  protected albums: Album[] = [];

  constructor() {
    this.albums = this.artistsService.getAllAlbums();
    this.albums.sort((a, b) => a.albumName.localeCompare(b.albumName));
  }

  ngOnInit() {
    this.numberOfAlbums.set(this.albums.length);
  }
}
