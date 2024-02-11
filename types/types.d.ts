export type MakeRequestTypes = {
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_SECRET_ID: string;
  SPOTIFY_REFRESH_TOKEN: string;
  nextUrl?: string;
  url?: string;
};

export type SpotifyClientTypes = MakeRequestTypes;

export interface SpotifyClientOptions {
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_REFRESH_TOKEN: string;
  SPOTIFY_SECRET_ID: string;
}
