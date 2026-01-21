import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedAlbumDialogComponent } from './deleted-album-dialog-component';

describe('DeletedAlbumDialogComponent', () => {
  let component: DeletedAlbumDialogComponent;
  let fixture: ComponentFixture<DeletedAlbumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletedAlbumDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedAlbumDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
