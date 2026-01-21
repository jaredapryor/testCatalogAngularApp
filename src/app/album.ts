const CERTIFICATION_LEVELS = ["None", "Silver", "Gold", "Platinum", "Multi-Platinum", "Diamond"] as const;

export type CertificationLevel = typeof CERTIFICATION_LEVELS[number];

export interface Album {
    albumId: number,
    globalAlbumId: number,
    artistName: string,
    artistId: number,
    albumName: string,
    albumImageRandNum: number,
    recordLabel: string,
    publicationYear: number,
    albumsSold: number,
    certification: CertificationLevel,
    numberOfSingles: number,
    numberOfTracks: number,
    availableOnStreaming: boolean
}

export function isAlbum(obj: any): obj is Album {
    return (
        obj && typeof obj.albumId === 'number' && typeof obj.globalAlbumId === 'number' &&
        typeof obj.artistName === 'string' && typeof obj.artistId === 'number' &&
        typeof obj.albumName === 'string' && typeof obj.albumImageRandNum === 'number' &&
        typeof obj.recordLabel === 'string' && typeof obj.publicationYear === 'number' &&
        typeof obj.albumsSold === 'number' && typeof obj.numberOfSingles === 'number' &&
        typeof obj.numberOfTracks === 'number' && typeof obj.availableOnStreaming === 'boolean' &&
        CERTIFICATION_LEVELS.includes(obj.certification)
    );
}