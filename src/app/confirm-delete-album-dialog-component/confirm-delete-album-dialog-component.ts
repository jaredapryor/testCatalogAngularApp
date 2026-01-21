import { Component, Inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogClose,  } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-album-dialog-component',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './confirm-delete-album-dialog-component.html',
  styleUrl: './confirm-delete-album-dialog-component.scss',
})
export class ConfirmDeleteAlbumDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      albumName: string | undefined;
      artistName: string | undefined;
      publicationYear: number | undefined;
      albumImageSrc: string | undefined;
    }) {}
}
