# App Description

This application is a music catalog experience designed to help users explore a curated collection of artists and albums in a visually rich, easy-to-navigate format. It presents music as a structured discovery space where people can browse artists, view their discographies, and inspect individual album details without needing to leave the experience.

At a high level, the app helps users understand who the artists are, where they come from, how long they have been active, and what albums they have released. It also gives them a sense of each album's commercial success, record label, release year, and whether it is available on major streaming platforms. The experience is built to feel more like a polished product catalog than a raw database, with clear sections, images, and content hierarchy that make the information feel approachable.

The app is organized around two primary ways of exploring content:

- Browsing artists and seeing their associated albums
- Browsing albums directly and viewing the artist behind each release

Users can move from a broad overview into deeper detail as needed. For example, they can inspect an artist's profile to see a summary of the artist's background and a list of their albums, then drill into an individual album to view more detailed information. This makes the app useful for both casual discovery and more focused exploration.

The product also supports full management of the catalog, not just browsing. Users can add new artists and albums, edit existing artist and album records, and remove albums, all through clear forms and confirmation dialogs, with feedback after actions are completed. These moments help make the interface feel more intentional and guided, rather than purely informational.

Overall, this application functions as a lightweight digital music catalog, showcase, and management tool. Its purpose is not just to display data, but to make a collection of artists and albums feel discoverable, memorable, and easy to explore, while also being easy to keep up to date. It is well suited for a product team that wants to present and maintain music-related content in a clean, browsable, and visually organized way.

## Data Model

**Artist**

- Name
- Country of origin
- Type: solo act or group
- Number of group members (if applicable)
- Active since (year)
- Associated albums (list)

**Album**

- Title
- Artist (owning artist)
- Cover art
- Record label
- Release year
- Number of tracks
- Number of singles
- Albums sold
- Certification (e.g., gold, platinum, multi-platinum)
- Streaming availability (e.g., Spotify, Apple Music, Amazon Music)

## Core Functionality

- Browse all artists and browse all albums, each as its own top-level view
- View an artist's detail page, including a collapsible/expandable list of their albums
- View an album's detail page with full details and a link back to the artist
- Search, filter, and/or sort artists and albums (e.g., by name, era, country, or label) — the current version lacks this, and with hundreds of artists and over a thousand albums, some way to narrow the list is important for the catalog to feel browsable rather than overwhelming
- Add a new artist, with a form covering all fields in the artist data model
- Add a new album to an existing artist, with a form covering all fields in the album data model
- Edit an existing artist's details
- Edit an existing album's details
- Delete an album, with a confirmation dialog before the action completes
- Show feedback (e.g., a toast or inline confirmation) after add, edit, and delete actions complete

Note: add and edit functionality is new for this version. The current build only supports browsing and deleting, so there are no reference screenshots for the add/edit forms or flows — these should be designed fresh, in a style consistent with the rest of the app (e.g., the existing delete-confirmation modal is a reasonable pattern to extend for add/edit confirmations).

## Visual Direction

This version is an opportunity to explore a meaningfully different visual style rather than replicate the current look. I'm interested in seeing a few different directions inspired by the browsing and discovery experiences of Amazon Music, Spotify, and Apple Music, with a specific interest in a dark mode aesthetic: dark backgrounds, high-contrast typography, bold album art as a focal point, and the kind of polished, editorial feel those apps use for browsing and detail pages.

The existing screenshots should be treated as a reference for content, data fields, and general layout structure (what a card shows, what a detail page includes, the artist-to-album relationship) — not for visual style. The flat gray boxes, default link styling, and light background in the current build are exactly what this new version should move away from.

## Additional Guidance for a New Version

If this description is being used as the basis for building a new version of the app, the following product details would be especially helpful to preserve:

- The app should feel like a polished music discovery experience, not a generic data table or admin dashboard.
- The primary user goal is exploration: understanding artists, discovering albums, and learning about the music catalog in a pleasant and intuitive way — with the ability to keep the catalog current through adding and editing records.
- The experience should feel visually rich enough to be engaging, but still simple and structured enough to be easy to navigate.
- Users should be able to move from a broad overview to deeper detail without confusion.
- The tone should feel modern, creative, and slightly immersive, with a strong sense of music and media presentation, leaning into a dark mode aesthetic.
- Key content should remain prominent: artist name, origin, era, album list, release year, label, sales, certifications, and streaming availability.
- The interface should communicate personality through imagery, layout, and clear sectioning rather than through heavy explanation or complex interactions.
- Management actions (add, edit, delete) should feel like a natural part of the experience, not a bolted-on admin panel.

## What the New App Should Prioritize

- A clear, welcoming landing experience that introduces the catalog
- Easy browsing between artists and albums, with search, filter, and/or sort to manage a large catalog
- A sense of discovery and context around each artist and release
- Strong visual hierarchy so important information is easy to scan
- Smooth, minimal interactions that support browsing rather than distracting from it
- Straightforward, low-friction flows for adding and editing artists and albums

## Suggested Product Positioning

This app should be framed as a stylish digital music catalog that helps users explore and maintain a fictional or curated collection of artists and albums in an engaging, approachable way. It should feel like a blend of a music streaming discovery experience (Amazon Music, Spotify, Apple Music) and a curated showcase, presented in a dark mode aesthetic.

## Screenshots and Reference Assets

Screenshots of the current app screens are available and should be treated as reference material for content, data structure, and layout patterns for the new version — not for visual style, which should instead follow the dark mode, streaming-app-inspired direction described above.

Available screenshots:

- Album-Details
- All-Albums
- All-Artists
- Artist-Details-Albums-Hidden
- Artist-Details-Albums-Shown
- Album-Details-Delete-Album
- Artist-Details-Delete-Album

There are no screenshots for add or edit flows, since that functionality is new for this version.
