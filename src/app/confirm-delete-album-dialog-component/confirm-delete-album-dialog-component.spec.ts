import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteAlbumDialogComponent } from './confirm-delete-album-dialog-component';

describe('ConfirmDeleteAlbumDialogComponent', () => {
  let component: ConfirmDeleteAlbumDialogComponent;
  let fixture: ComponentFixture<ConfirmDeleteAlbumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDeleteAlbumDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteAlbumDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
