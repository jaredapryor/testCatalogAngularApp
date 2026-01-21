import { Component, Inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogClose,  } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleted-album-dialog-component',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './deleted-album-dialog-component.html',
  styleUrl: './deleted-album-dialog-component.scss',
})
export class DeletedAlbumDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      albumDeletionMsg: string;
      albumName: string | undefined;
    }) {}
}
