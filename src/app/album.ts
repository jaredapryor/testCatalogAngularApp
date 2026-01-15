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

export type CertificationLevel = "None" | "Silver" | "Gold" | "Platinum" | "Multi-Platinum" | "Diamond";