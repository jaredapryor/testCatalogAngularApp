import { Album, isAlbum } from "./album";
import { Artist, isArtist } from "./artist";

const DELETION_TYPES = ["artist", "album"] as const;

export type DeletionType = typeof DELETION_TYPES[number];

export interface DeletionConfirmation {
    message: string,
    deletionType: DeletionType,
    deleted: boolean,
    album?: Album,
    artist?: Artist,
}

export function isDeletionConfirmation(obj: any): obj is DeletionConfirmation {
    return (
        obj && typeof obj.message === 'string' && typeof obj.deleted === 'boolean' &&
        DELETION_TYPES.includes(obj.deletionType) &&
        (obj.album === undefined || isAlbum(obj)) &&
        (obj.artist === undefined || isArtist(obj))
    );
}

export interface AlbumDeleteInfo {
    albumId?: number,
    globalAlbumId?: number,
    artistId?: number
}

export function isAlbumDeleteInfo(obj: any): obj is AlbumDeleteInfo {
    return (
      obj && (obj.albumId === undefined || typeof obj.albumId === 'number') && 
      (obj.globalAlbumId === undefined || typeof obj.globalAlbumId === 'number') &&
      (obj.artistId === undefined || typeof obj.artistId === 'number')
    );
}
