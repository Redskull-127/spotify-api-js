# Spotify API Wrapper for Node.js/Bun.js

This Node module provides a wrapper for the Spotify API, allowing developers to easily access information about a user's currently playing song and recently played tracks.

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
import { getNowPlaying, getRecentlyPlayed } from "@meertarbani/spotify-api-js";

async function getNowPlaying() {
  // Initialize the Spotify API with your credentials
  const response = await getNowPlaying({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_SECRET_ID,
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  });
  console.log(response);
}

// Get the user's currently playing song
async function getNowPlaying() {
  // Initialize the Spotify API with your credentials
  const response = await getRecentlyPlayed({
    url: "can be used to get the next page of results (accessed via the next field in the response) else it will return the first page of results", // optional
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_SECRET_ID,
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  });
  console.log(response);
}
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
