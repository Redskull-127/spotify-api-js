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

Once you have obtained these credentials, you can use this module as follows:

```javascript
import { SpotifyClient } from "./core";

// Initialize the SpotifyClient with the required environment variables

const client = new SpotifyClient({
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID as string,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN as string,
    SPOTIFY_SECRET_ID: process.env.SPOTIFY_SECRET_ID as string
})

// Get the currently playing track and the recently played tracks
const nowPlaying = await client.getNowPlaying();
const recentlyPlayed = await client.getRecentlyPlayed({
    // nextUrl is an optional parameter, if you want to get the next set of recently played tracks!
    nextUrl: "https://api.spotify.com/v1/me/player/recently-played?before=1707503673732" // Optional parameter
});

// Log the results
console.log(nowPlaying, recentlyPlayed);
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
