import { Component, signal, inject } from '@angular/core';
import { AlbumComponent } from '../album-component/album-component';
import { ArtistsService } from '../artists.service';
import { Album } from '../album';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums-component',
  imports: [AlbumComponent, RouterModule],
  templateUrl: './albums-component.html',
  styleUrl: './albums-component.scss',
})
export class AlbumsComponent {
  artistsService: ArtistsService = inject(ArtistsService);
  protected numberOfAlbums = signal(0);
  protected albums = signal<Album[]>([]);

  constructor() {
    this.artistsService.getAllAlbums().then((albumsList: Album[]) => {
      albumsList.sort((a, b) => a.albumName.localeCompare(b.albumName));
      this.albums.set(albumsList);
      this.numberOfAlbums.set(albumsList.length);
    });
  }
}
