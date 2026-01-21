import { Album, isAlbum } from "./album"

const COUNTRIES = [
    "USA", "UK", "Canada", "Australia", "Germany", "Sweden", "Brazil", "South Africa",
    "Nigeria", "South Korea", "Japan", "India"
] as const;

export type Country = typeof COUNTRIES[number];

export interface Artist {
    artistId: number,
    artistName: string,
    artistImageRandNum: number,
    yearStarted: number,
    numberOfMembers: number,
    isGroup: boolean,
    countryOfOrigin: Country,
    isTouring: boolean,
    numberOfAlbumsReleased: number,
    albums: Album[]
}

export function isArtist(obj: any): obj is Artist {
    return (
        obj && typeof obj.artistId === 'number' && typeof obj.artistName === 'string' &&
        typeof obj.artistImageRandNum === 'number' && typeof obj.yearStarted === 'number' &&
        typeof obj.numberOfMembers === 'number' && typeof obj.isGroup === 'boolean' &&
        typeof obj.isTouring === 'boolean' && typeof obj.numberOfAlbumsReleased === 'number' &&
        COUNTRIES.includes(obj.countryOfOrigin) && Array.isArray(obj.albums) &&
        obj.albums.every(isAlbum)
    );
}