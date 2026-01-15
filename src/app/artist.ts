import { Album } from "./album"

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

export type Country =
    "USA" | "UK" | "Canada" | "Australia" | "Germany" | "Sweden" | 
    "Brazil" | "South Africa" | "Nigeria" | "South Korea" | "Japan" | "India";