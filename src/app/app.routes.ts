import { Routes } from '@angular/router';
import { ArtistsComponent } from './artists-component/artists-component';
import { ArtistComponent } from './artist-component/artist-component';
import { AlbumComponent } from './album-component/album-component';
import { AlbumsComponent } from './albums-component/albums-component';

export const routes: Routes = [
    {
        path: 'artists',
        component: ArtistsComponent,
        title: 'All Artists'
    },
    {
        path: 'artists/:artistId',
        component: ArtistComponent,
        title: 'Artist'
    },
    {
        path: 'albums',
        component: AlbumsComponent,
        title: 'All Albums'
    },
    {
        path: 'artists/:artistId/:albumId',
        component: AlbumComponent,
        title: 'Album'
    },
    {
        path: '',
        redirectTo: '/artists',
        pathMatch: 'full'
    }
];
