# Spotify API Wrapper for Node.js/Bun.js

This module (created using bun.js) provides a wrapper for the Spotify API, allowing developers to easily access information about a user's currently playing song and recently played tracks.

## Installation

To install this package, simply use npm:

```bash
npm install @meertarbani/spotify-api-js
                or
bun add @meertarbani/spotify-api-js
```

## Usage

Before using this module, you need to obtain the following credentials from Spotify:

- `SPOTIFY_CLIENT_ID`: Your Spotify client ID
- `SPOTIFY_SECRET_ID`: Your Spotify secret ID
- `SPOTIFY_REFRESH_TOKEN`: Your Spotify refresh token

You can obtain these credentials by following the steps outlined in the [Setting Up Spotify API Credentials](./docs/spotify-creds.md) guide.
Once you have obtained these credentials, you can use this module as follows:

```typescript
import { SpotifyClient } from "@meertarbani/spotify-api-js";

// Initialize the SpotifyClient with the required environment variables

const client = new SpotifyClient({
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID as string,
  SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN as string,
  SPOTIFY_SECRET_ID: process.env.SPOTIFY_SECRET_ID as string,
});
```

Once you have initialized the `SpotifyClient`, you can use the following methods to access information about the user, user's currently playing song, recently played tracks etc:

### Get User's Profile

```typescript
// Get current user's profile
const profile = await client.getUserProfile();

// Log the results
console.log(profile);
```

### Get User's Currently Playing Track

```typescript
// Get the current playing track
const nowPlaying = await client.getNowPlaying();

// Log the results
console.log(nowPlaying);
```

### Get User's Recently Played Tracks

```typescript
// Get the recently played tracks
const recentlyPlayed = await client.getRecentlyPlayed({
  // Optional parameters
  nextUrl:
    "https://api.spotify.com/v1/me/player/recently-played?before=1707503673732", // if you want to get the next set of recently played tracks!
  limit: 50, // if you want to limit the number of recently played tracks max 50!
  after: timestamp, // if you want to get the recently played tracks after: timestamp,
  before: timestamp, // if you want to get the recently played tracks before: timestamp,
});

// Log the results
console.log(recentlyPlayed);
```

### Get Any API Endpoint

```typescript
// Get any API endpoint that hasn't been implemented yet
const customAPI = await client.getCustomAPI("https://api.spotify.com/v1/me/player"); // pass the endpoint you want to get!

// Log the results
console.log(customAPI);
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
