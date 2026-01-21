import { Injectable, inject, DestroyRef } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../environments/environment';
import { Artist } from './artist';
import { Album } from './album';
import { DeletionConfirmation } from './deletion';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private artistsUrl = `${environment.apiUrl}/artists`;
  private albumsUrl = `${environment.apiUrl}/albums`;
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  protected artistsList: Artist[] = [
    {
      "artistId": 1,
      "artistName": "The Silver Comets",
      "artistImageRandNum": 0.218018,
      "yearStarted": 1973,
      "numberOfMembers": 5,
      "isGroup": true,
      "countryOfOrigin": "South Korea",
      "isTouring": true,
      "numberOfAlbumsReleased": 9,
      "albums": [
        {
          "albumId": 1,
          "globalAlbumId": 1,
          "albumName": "Autumn Lantern Choir",
          "albumImageRandNum": 0.625479,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Crazy Music",
          "publicationYear": 1993,
          "albumsSold": 2682457,
          "certification": "Multi-Platinum",
          "numberOfSingles": 6,
          "numberOfTracks": 15,
          "availableOnStreaming": true
        },
        {
          "albumId": 2,
          "globalAlbumId": 2,
          "albumName": "Static Bloom",
          "albumImageRandNum": 0.345239,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Crazy Music",
          "publicationYear": 1994,
          "albumsSold": 11083190,
          "certification": "Diamond",
          "numberOfSingles": 4,
          "numberOfTracks": 8,
          "availableOnStreaming": true
        },
        {
          "albumId": 3,
          "globalAlbumId": 3,
          "albumName": "Obsidian Lanterns",
          "albumImageRandNum": 0.411512,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Northwind Records",
          "publicationYear": 1995,
          "albumsSold": 603546,
          "certification": "Gold",
          "numberOfSingles": 1,
          "numberOfTracks": 14,
          "availableOnStreaming": true
        },
        {
          "albumId": 4,
          "globalAlbumId": 4,
          "albumName": "Sunset Ember",
          "albumImageRandNum": 0.3405,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Crazy Music",
          "publicationYear": 2023,
          "albumsSold": 76387,
          "certification": "None",
          "numberOfSingles": 4,
          "numberOfTracks": 8,
          "availableOnStreaming": true
        },
        {
          "albumId": 5,
          "globalAlbumId": 5,
          "albumName": "City of Ember",
          "albumImageRandNum": 0.46315,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Trailblazer Inc",
          "publicationYear": 2003,
          "albumsSold": 288428,
          "certification": "Silver",
          "numberOfSingles": 5,
          "numberOfTracks": 8,
          "availableOnStreaming": true
        },
        {
          "albumId": 6,
          "globalAlbumId": 6,
          "albumName": "Deep Indigo Season",
          "albumImageRandNum": 0.659065,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Sunburst Music",
          "publicationYear": 2019,
          "albumsSold": 8479292,
          "certification": "Multi-Platinum",
          "numberOfSingles": 3,
          "numberOfTracks": 9,
          "availableOnStreaming": true
        },
        {
          "albumId": 7,
          "globalAlbumId": 7,
          "albumName": "Brass Parallax",
          "albumImageRandNum": 0.22152,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Trailblazer Inc",
          "publicationYear": 1994,
          "albumsSold": 227489,
          "certification": "Silver",
          "numberOfSingles": 2,
          "numberOfTracks": 11,
          "availableOnStreaming": true
        },
        {
          "albumId": 8,
          "globalAlbumId": 8,
          "albumName": "Platinum Undertow",
          "albumImageRandNum": 0.280298,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Northwind Records",
          "publicationYear": 1992,
          "albumsSold": 1657292,
          "certification": "Platinum",
          "numberOfSingles": 1,
          "numberOfTracks": 14,
          "availableOnStreaming": true
        },
        {
          "albumId": 9,
          "globalAlbumId": 9,
          "albumName": "Sonic Lanterns",
          "albumImageRandNum": 0.628927,
          "artistName": "The Silver Comets",
          "artistId": 1,
          "recordLabel": "Iron Gate",
          "publicationYear": 1995,
          "albumsSold": 23401975,
          "certification": "Diamond",
          "numberOfSingles": 1,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        }
      ]
    },
    {
      "artistId": 2,
      "artistName": "Neon Harbor",
      "artistImageRandNum": 0.220849,
      "yearStarted": 2009,
      "numberOfMembers": 5,
      "isGroup": true,
      "countryOfOrigin": "UK",
      "isTouring": false,
      "numberOfAlbumsReleased": 4,
      "albums": [
        {
          "albumId": 1,
          "globalAlbumId": 10,
          "albumName": "Bronze Reverie",
          "albumImageRandNum": 0.04178,
          "artistName": "Neon Harbor",
          "artistId": 2,
          "recordLabel": "Crazy Music",
          "publicationYear": 1999,
          "albumsSold": 8846106,
          "certification": "Multi-Platinum",
          "numberOfSingles": 1,
          "numberOfTracks": 14,
          "availableOnStreaming": true
        },
        {
          "albumId": 2,
          "globalAlbumId": 11,
          "albumName": "Tempest Meridian",
          "albumImageRandNum": 0.250883,
          "artistName": "Neon Harbor",
          "artistId": 2,
          "recordLabel": "Blue Horizon",
          "publicationYear": 2008,
          "albumsSold": 1516246,
          "certification": "Platinum",
          "numberOfSingles": 5,
          "numberOfTracks": 12,
          "availableOnStreaming": true
        },
        {
          "albumId": 3,
          "globalAlbumId": 12,
          "albumName": "Subzero Ember",
          "albumImageRandNum": 0.973495,
          "artistName": "Neon Harbor",
          "artistId": 2,
          "recordLabel": "In Our Lifetime",
          "publicationYear": 1999,
          "albumsSold": 12387464,
          "certification": "Diamond",
          "numberOfSingles": 2,
          "numberOfTracks": 14,
          "availableOnStreaming": true
        },
        {
          "albumId": 4,
          "globalAlbumId": 13,
          "albumName": "Ancient Neon",
          "albumImageRandNum": 0.488045,
          "artistName": "Neon Harbor",
          "artistId": 2,
          "recordLabel": "Northwind Records",
          "publicationYear": 2006,
          "albumsSold": 6988609,
          "certification": "Multi-Platinum",
          "numberOfSingles": 3,
          "numberOfTracks": 12,
          "availableOnStreaming": true
        }
      ]
    },
    {
      "artistId": 3,
      "artistName": "Autumn Static",
      "artistImageRandNum": 0.413532,
      "yearStarted": 2006,
      "numberOfMembers": 3,
      "isGroup": true,
      "countryOfOrigin": "South Africa",
      "isTouring": true,
      "numberOfAlbumsReleased": 8,
      "albums": [
        {
          "albumId": 1,
          "globalAlbumId": 14,
          "albumName": "Parallax Meridian",
          "albumImageRandNum": 0.811232,
          "artistName": "Autumn Static",
          "artistId": 3,
          "recordLabel": "Down for the Cause Records",
          "publicationYear": 2021,
          "albumsSold": 6084561,
          "certification": "Multi-Platinum",
          "numberOfSingles": 4,
          "numberOfTracks": 8,
          "availableOnStreaming": false
        },
        {
          "albumId": 2,
          "globalAlbumId": 15,
          "albumName": "Spectral Drift",
          "albumImageRandNum": 0.470082,
          "artistName": "Autumn Static",
          "artistId": 3,
          "recordLabel": "Sunburst Music",
          "publicationYear": 2014,
          "albumsSold": 39506,
          "certification": "None",
          "numberOfSingles": 5,
          "numberOfTracks": 11,
          "availableOnStreaming": true
        },
        {
          "albumId": 3,
          "globalAlbumId": 16,
          "albumName": "Crystal Thread Theory",
          "albumImageRandNum": 0.666365,
          "artistName": "Autumn Static",
          "artistId": 3,
          "recordLabel": "Trailblazer Inc",
          "publicationYear": 2003,
          "albumsSold": 24995976,
          "certification": "Diamond",
          "numberOfSingles": 2,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        },
        {
          "albumId": 4,
          "globalAlbumId": 17,
          "albumName": "Lunar Drift",
          "albumImageRandNum": 0.851463,
          "artistName": "Autumn Static",
          "artistId": 3,
          "recordLabel": "Blue Horizon",
          "publicationYear": 2001,
          "albumsSold": 660343,
          "certification": "Gold",
          "numberOfSingles": 1,
          "numberOfTracks": 11,
          "availableOnStreaming": false
        },
        {
          "albumId": 5,
          "globalAlbumId": 18,
          "albumName": "Fallen Lantern Choir",
          "albumImageRandNum": 0.452956,
          "artistName": "Autumn Static",
          "artistId": 3,
          "recordLabel": "Northwind Records",
          "publicationYear": 2012,
          "albumsSold": 323907,
          "certification": "Silver",
          "numberOfSingles": 1,
          "numberOfTracks": 13,
          "availableOnStreaming": true
        },
        {
          "albumId": 6,
          "globalAlbumId": 19,
          "albumName": "Carbon Drift",
          "albumImageRandNum": 0.700463,
          "artistName": "Autumn Static",
          "artistId": 3,
          "recordLabel": "Trailblazer Inc",
          "publicationYear": 2008,
          "albumsSold": 808678,
          "certification": "Gold",
          "numberOfSingles": 6,
          "numberOfTracks": 9,
          "availableOnStreaming": true
        },
        {
          "albumId": 7,
          "globalAlbumId": 20,
          "albumName": "Harmonic Parallax",
          "albumImageRandNum": 0.515698,
          "artistName": "Autumn Static",
          "artistId": 3,
          "recordLabel": "Sunburst Music",
          "publicationYear": 2000,
          "albumsSold": 456893,
          "certification": "Silver",
          "numberOfSingles": 4,
          "numberOfTracks": 11,
          "availableOnStreaming": true
        },
        {
          "albumId": 8,
          "globalAlbumId": 21,
          "albumName": "Grayscale Lanterns",
          "albumImageRandNum": 0.955606,
          "artistName": "Autumn Static",
          "artistId": 3,
          "recordLabel": "Blue Horizon",
          "publicationYear": 2016,
          "albumsSold": 671888,
          "certification": "Gold",
          "numberOfSingles": 6,
          "numberOfTracks": 11,
          "availableOnStreaming": true
        }
      ]
    },
    {
      "artistId": 4,
      "artistName": "Violet Skyline",
      "artistImageRandNum": 0.721074,
      "yearStarted": 2008,
      "numberOfMembers": 2,
      "isGroup": true,
      "countryOfOrigin": "Brazil",
      "isTouring": true,
      "numberOfAlbumsReleased": 5,
      "albums": [
        {
          "albumId": 1,
          "globalAlbumId": 22,
          "albumName": "Waterline Meridian",
          "albumImageRandNum": 0.341608,
          "artistName": "Violet Skyline",
          "artistId": 4,
          "recordLabel": "In Our Lifetime",
          "publicationYear": 2016,
          "albumsSold": 6564791,
          "certification": "Multi-Platinum",
          "numberOfSingles": 6,
          "numberOfTracks": 13,
          "availableOnStreaming": true
        },
        {
          "albumId": 2,
          "globalAlbumId": 23,
          "albumName": "River of Neon",
          "albumImageRandNum": 0.621661,
          "artistName": "Violet Skyline",
          "artistId": 4,
          "recordLabel": "In Our Lifetime",
          "publicationYear": 2004,
          "albumsSold": 2223454,
          "certification": "Multi-Platinum",
          "numberOfSingles": 4,
          "numberOfTracks": 8,
          "availableOnStreaming": true
        },
        {
          "albumId": 3,
          "globalAlbumId": 24,
          "albumName": "Static Orchard",
          "albumImageRandNum": 0.841091,
          "artistName": "Violet Skyline",
          "artistId": 4,
          "recordLabel": "Northwind Records",
          "publicationYear": 2001,
          "albumsSold": 1614370,
          "certification": "Platinum",
          "numberOfSingles": 1,
          "numberOfTracks": 9,
          "availableOnStreaming": true
        },
        {
          "albumId": 4,
          "globalAlbumId": 25,
          "albumName": "Blossom of Static",
          "albumImageRandNum": 0.624389,
          "artistName": "Violet Skyline",
          "artistId": 4,
          "recordLabel": "Trailblazer Inc",
          "publicationYear": 2022,
          "albumsSold": 225670,
          "certification": "Silver",
          "numberOfSingles": 2,
          "numberOfTracks": 14,
          "availableOnStreaming": true
        },
        {
          "albumId": 5,
          "globalAlbumId": 26,
          "albumName": "Starbound Ember",
          "albumImageRandNum": 0.024053,
          "artistName": "Violet Skyline",
          "artistId": 4,
          "recordLabel": "In Our Lifetime",
          "publicationYear": 2015,
          "albumsSold": 1129635,
          "certification": "Platinum",
          "numberOfSingles": 4,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        }
      ]
    },
    {
      "artistId": 5,
      "artistName": "Midnight Lanterns",
      "artistImageRandNum": 0.168584,
      "yearStarted": 1977,
      "numberOfMembers": 4,
      "isGroup": true,
      "countryOfOrigin": "South Africa",
      "isTouring": false,
      "numberOfAlbumsReleased": 9,
      "albums": [
        {
          "albumId": 1,
          "globalAlbumId": 27,
          "albumName": "Wild Lantern Hymns",
          "albumImageRandNum": 0.522657,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "Crazy Music",
          "publicationYear": 2001,
          "albumsSold": 902388,
          "certification": "Gold",
          "numberOfSingles": 1,
          "numberOfTracks": 8,
          "availableOnStreaming": false
        },
        {
          "albumId": 2,
          "globalAlbumId": 28,
          "albumName": "Celestial Undertones",
          "albumImageRandNum": 0.915606,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "Sunburst Music",
          "publicationYear": 2019,
          "albumsSold": 1082652,
          "certification": "Platinum",
          "numberOfSingles": 2,
          "numberOfTracks": 9,
          "availableOnStreaming": true
        },
        {
          "albumId": 3,
          "globalAlbumId": 29,
          "albumName": "Spiral Ember",
          "albumImageRandNum": 0.949596,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "Sunburst Music",
          "publicationYear": 1993,
          "albumsSold": 84155,
          "certification": "None",
          "numberOfSingles": 5,
          "numberOfTracks": 14,
          "availableOnStreaming": true
        },
        {
          "albumId": 4,
          "globalAlbumId": 30,
          "albumName": "Nova Meridian",
          "albumImageRandNum": 0.271421,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "CrystalTone",
          "publicationYear": 2010,
          "albumsSold": 1113470,
          "certification": "Platinum",
          "numberOfSingles": 1,
          "numberOfTracks": 9,
          "availableOnStreaming": true
        },
        {
          "albumId": 5,
          "globalAlbumId": 31,
          "albumName": "Lighthouse Machinery",
          "albumImageRandNum": 0.338858,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "CrystalTone",
          "publicationYear": 2009,
          "albumsSold": 107446,
          "certification": "None",
          "numberOfSingles": 3,
          "numberOfTracks": 15,
          "availableOnStreaming": true
        },
        {
          "albumId": 6,
          "globalAlbumId": 32,
          "albumName": "Starbound Machinery",
          "albumImageRandNum": 0.556206,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "Blue Horizon",
          "publicationYear": 1997,
          "albumsSold": 859879,
          "certification": "Gold",
          "numberOfSingles": 6,
          "numberOfTracks": 13,
          "availableOnStreaming": false
        },
        {
          "albumId": 7,
          "globalAlbumId": 33,
          "albumName": "Crystal Parallax",
          "albumImageRandNum": 0.705567,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "Sunburst Music",
          "publicationYear": 2008,
          "albumsSold": 1975527,
          "certification": "Platinum",
          "numberOfSingles": 4,
          "numberOfTracks": 15,
          "availableOnStreaming": true
        },
        {
          "albumId": 8,
          "globalAlbumId": 34,
          "albumName": "Cadence of Lanterns",
          "albumImageRandNum": 0.681772,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "Iron Gate",
          "publicationYear": 2003,
          "albumsSold": 739693,
          "certification": "Gold",
          "numberOfSingles": 4,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        },
        {
          "albumId": 9,
          "globalAlbumId": 35,
          "albumName": "Horizon Parallax",
          "albumImageRandNum": 0.32358,
          "artistName": "Midnight Lanterns",
          "artistId": 5,
          "recordLabel": "Iron Gate",
          "publicationYear": 2002,
          "albumsSold": 992088,
          "certification": "Gold",
          "numberOfSingles": 6,
          "numberOfTracks": 14,
          "availableOnStreaming": true
        }
      ]
    },
    {
      "artistId": 6,
      "artistName": "Echo Valley Union",
      "artistImageRandNum": 0.724392,
      "yearStarted": 1990,
      "numberOfMembers": 3,
      "isGroup": true,
      "countryOfOrigin": "Australia",
      "isTouring": true,
      "numberOfAlbumsReleased": 2,
      "albums": [
        {
          "albumId": 1,
          "globalAlbumId": 36,
          "albumName": "Evening Parallax",
          "albumImageRandNum": 0.213029,
          "artistName": "Echo Valley Union",
          "artistId": 6,
          "recordLabel": "Trailblazer Inc",
          "publicationYear": 1991,
          "albumsSold": 23422008,
          "certification": "Diamond",
          "numberOfSingles": 5,
          "numberOfTracks": 15,
          "availableOnStreaming": true
        },
        {
          "albumId": 2,
          "globalAlbumId": 37,
          "albumName": "Glass Parallax",
          "albumImageRandNum": 0.470239,
          "artistName": "Echo Valley Union",
          "artistId": 6,
          "recordLabel": "Down for the Cause Records",
          "publicationYear": 2023,
          "albumsSold": 907359,
          "certification": "Gold",
          "numberOfSingles": 2,
          "numberOfTracks": 13,
          "availableOnStreaming": true
        }
      ]
    },
    {
      "artistId": 7,
      "artistName": "Crimson Parade",
      "artistImageRandNum": 0.289996,
      "yearStarted": 1981,
      "numberOfMembers": 4,
      "isGroup": true,
      "countryOfOrigin": "Nigeria",
      "isTouring": false,
      "numberOfAlbumsReleased": 8,
      "albums": [
        {
          "albumId": 1,
          "globalAlbumId": 38,
          "albumName": "Lightwave Ember",
          "albumImageRandNum": 0.684164,
          "artistName": "Crimson Parade",
          "artistId": 7,
          "recordLabel": "Blue Horizon",
          "publicationYear": 1991,
          "albumsSold": 10843091,
          "certification": "Diamond",
          "numberOfSingles": 2,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        },
        {
          "albumId": 2,
          "globalAlbumId": 39,
          "albumName": "Amber Skyline",
          "albumImageRandNum": 0.312869,
          "artistName": "Crimson Parade",
          "artistId": 7,
          "recordLabel": "Sunburst Music",
          "publicationYear": 2010,
          "albumsSold": 619777,
          "certification": "Gold",
          "numberOfSingles": 4,
          "numberOfTracks": 10,
          "availableOnStreaming": false
        },
        {
          "albumId": 3,
          "globalAlbumId": 40,
          "albumName": "Timberline Ember",
          "albumImageRandNum": 0.376117,
          "artistName": "Crimson Parade",
          "artistId": 7,
          "recordLabel": "Crazy Music",
          "publicationYear": 1993,
          "albumsSold": 8342027,
          "certification": "Multi-Platinum",
          "numberOfSingles": 1,
          "numberOfTracks": 15,
          "availableOnStreaming": true
        },
        {
          "albumId": 4,
          "globalAlbumId": 41,
          "albumName": "Hollow River Season",
          "albumImageRandNum": 0.139412,
          "artistName": "Crimson Parade",
          "artistId": 7,
          "recordLabel": "Iron Gate",
          "publicationYear": 1993,
          "albumsSold": 178645,
          "certification": "None",
          "numberOfSingles": 5,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        },
        {
          "albumId": 5,
          "globalAlbumId": 42,
          "albumName": "Rust & Lanterns",
          "albumImageRandNum": 0.065893,
          "artistName": "Crimson Parade",
          "artistId": 7,
          "recordLabel": "In Our Lifetime",
          "publicationYear": 2008,
          "albumsSold": 705608,
          "certification": "Gold",
          "numberOfSingles": 4,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        },
        {
          "albumId": 6,
          "globalAlbumId": 43,
          "albumName": "Airship Lullabies",
          "albumImageRandNum": 0.597536,
          "artistName": "Crimson Parade",
          "artistId": 7,
          "recordLabel": "Sunburst Music",
          "publicationYear": 1994,
          "albumsSold": 753053,
          "certification": "Gold",
          "numberOfSingles": 1,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        },
        {
          "albumId": 7,
          "globalAlbumId": 44,
          "albumName": "Morning Static",
          "albumImageRandNum": 0.952654,
          "artistName": "Crimson Parade",
          "artistId": 7,
          "recordLabel": "CrystalTone",
          "publicationYear": 2005,
          "albumsSold": 27448599,
          "certification": "Diamond",
          "numberOfSingles": 1,
          "numberOfTracks": 10,
          "availableOnStreaming": true
        },
        {
          "albumId": 8,
          "globalAlbumId": 45,
          "albumName": "Copper Veins",
          "albumImageRandNum": 0.202594,
          "artistName": "Crimson Parade",
          "artistId": 7,
          "recordLabel": "Blue Horizon",
          "publicationYear": 1995,
          "albumsSold": 3472980,
          "certification": "Multi-Platinum",
          "numberOfSingles": 3,
          "numberOfTracks": 8,
          "availableOnStreaming": false
        }
      ]
    },   
  ];
  protected albumsList: Album[] = this.artistsList.flatMap(artist => artist.albums);

  constructor() { }

  async getAllArtists(): Promise<Artist[]> {
    const data = await fetch(this.artistsUrl);
    return await data.status === 200 ? data.json() : [];
  }

  getAllArtistsLocal(): Artist[] {
    return this.artistsList;
  }

  async getArtistById(id: number): Promise<Artist | undefined> {
    const data = await fetch (`${this.artistsUrl}/${id}`);
    return await data.status === 200 ? data.json() : undefined;
  }

  getArtistByIdLocal(id: number): Artist | undefined {
    return this.artistsList.find(artist => artist.artistId === id);
  }

  async getAllAlbums(): Promise<Album[]> {
    const data = await fetch(this.albumsUrl);
    return await data.status === 200 ? data.json() : [];
  }

  getAllAlbumsLocal(): Album[] {
    return this.albumsList;
  }

  async getAlbum(artistId: number, albumId: number): Promise<Album | undefined> {
    const data = await fetch(`${this.artistsUrl}/${artistId}/${albumId}`);
    return await data.status === 200 ? data.json() : undefined;
  }

  getAlbumLocal(artistId: number, albumId: number): Album | undefined {
    const artist = this.artistsList.find(artist => artist.artistId === artistId);
    if (artist !== undefined) {
      return artist.albums.find(album => album.albumId === albumId);
    } else {
      return undefined;
    }
  }

  async getAlbumGlobal(globalAlbumId: number): Promise<Album | undefined> {
    const data = await fetch (`${this.albumsUrl}/${globalAlbumId}`);
    return await data.status === 200 ? data.json() : undefined;
  }

  getAlbumGlobalLocal(globalAlbumId: number): Album | undefined {
    return this.albumsList.find(album => album.globalAlbumId === globalAlbumId);
  }

  deleteAlbum(artistId: number, albumId: number): Observable<HttpResponse<DeletionConfirmation>> {
    return this.http.delete<DeletionConfirmation>(`${this.artistsUrl}/${artistId}/${albumId}`, { observe: 'response'})
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  deleteAlbumGlobal(globalAlbumId: number): Observable<HttpResponse<DeletionConfirmation>> {
    return this.http.delete<DeletionConfirmation>(`${this.albumsUrl}/${globalAlbumId}`, { observe: 'response'})
      .pipe(takeUntilDestroyed(this.destroyRef));
  }
}
