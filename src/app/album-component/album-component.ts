import { Component, Input, Output, OnInit, inject, signal, EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Album } from '../album';
import { AlbumDeleteInfo } from '../deletion';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteAlbumDialogComponent } from '../confirm-delete-album-dialog-component/confirm-delete-album-dialog-component';
import { ArtistsService } from '../artists.service';
import { DeletedAlbumDialogComponent } from '../deleted-album-dialog-component/deleted-album-dialog-component';

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
  @Input() showActions: boolean = true;
  @Input() albumClassOverride: string = '';
  @Input() useDeleteOnArtist: boolean = true;
  @Output() albumDeletedEvent = new EventEmitter<AlbumDeleteInfo>();

  artistsService: ArtistsService = inject(ArtistsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  protected artistId: number | undefined = undefined;
  protected albumId: number | undefined = undefined;
  protected globalAlbumId: number | undefined = undefined;
  protected finalAlbum = signal<Album | undefined>(undefined);
  protected show404Img = signal(false);
  protected albumErrorMsg = signal('');
  protected showConfirmDelteAlbum = signal(false);
  protected albumClass: string = 'dark';
  protected albumImageSrc: string = '';
  protected albumCertImageSrc: string = '';
  protected albumCertImageDesc: string = '';

  constructor(private dialog: MatDialog, private router: Router) {
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

  protected deleteAlbum(): void {
    const album = this.finalAlbum();
    if (album !== undefined) {
      // Add Modal Dialog to confirm deletion
      const dialogRef = this.dialog.open(ConfirmDeleteAlbumDialogComponent, {
        data: {
          albumName: album.albumName,
          artistName: album.artistName,
          publicationYear: album.publicationYear,
          albumImageSrc: this.albumImageSrc
        }
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result === true) {
          console.log("Deleting album - Global Album Id", album.globalAlbumId);
          this.artistsService.deleteAlbumGlobal(album.globalAlbumId).subscribe({
            next: (resp) => {
              console.log("Deletion was succesful: " + JSON.stringify(resp));
              if (resp.body && resp.body.deleted) {
                const msg = resp.body.message;
                const albumName = resp.body.album?.albumName;
                const albumId = resp.body.album?.albumId;
                const globalAlbumId = resp.body.album?.globalAlbumId;
                const artistId = resp.body.album?.artistId;
                
                const dialogRef2 = this.dialog.open(DeletedAlbumDialogComponent, {
                  data: {
                    albumDeletionMsg: msg,
                    albumName: albumName
                  }
                });

                dialogRef2.afterClosed().subscribe(() => {
                  if (this.condensed) {
                    const deletedAlbum = resp.body?.album;
                    this.albumDeletedEvent.emit({
                      albumId: albumId,
                      globalAlbumId: globalAlbumId,
                      artistId: artistId 
                    });
                  } else {                  
                    this.router.navigate(["/albums"]);
                  }
                });
              } else {
                this.router.navigate(["/albums"]);
              }
            }, 
            error: (err) => {
              console.log("Deletion wasn't successful: ", err);
              this.router.navigate(["/albums"]);
            }
          });
        }
      });
    }
  }

  protected deleteAlbumOnArtist(): void {
    const album = this.finalAlbum();
    if (album !== undefined) {
      // Add Modal Dialog to confirm deletion
      const dialogRef = this.dialog.open(ConfirmDeleteAlbumDialogComponent, {
        data: {
          albumName: album.albumName,
          artistName: album.artistName,
          publicationYear: album.publicationYear,
          albumImageSrc: this.albumImageSrc
        }
      });
     
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log(`Deleting album - Album Id: (${album.albumId}), Artist Id: (${album.artistId})`);
          this.artistsService.deleteAlbum(album.artistId, album.albumId).subscribe({
            next: (resp) => {
              console.log("Deletion was succesful: " + JSON.stringify(resp));
              if (resp.body && resp.body.deleted) {
                const msg = resp.body.message;
                const albumName = resp.body.album?.albumName;
                const albumId = resp.body.album?.albumId;
                const globalAlbumId = resp.body.album?.globalAlbumId;
                const artistId = resp.body.album?.artistId;

                const dialogRef2 = this.dialog.open(DeletedAlbumDialogComponent, {
                  data: {
                    albumDeletionMsg: msg,
                    albumName: albumName
                  }
                });

                dialogRef2.afterClosed().subscribe(() => {
                  this.albumDeletedEvent.emit({
                      albumId: albumId,
                      globalAlbumId: globalAlbumId,
                      artistId: artistId 
                    });
                });
              } else {
                this.router.navigate(["/artists", album.artistId]);
              }
            }
          });
        }
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
