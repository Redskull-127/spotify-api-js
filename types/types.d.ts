export type MakeRequestTypes = {
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_SECRET_ID: string;
  SPOTIFY_REFRESH_TOKEN: string;
  url?: string;
};

export type SpotifyClientTypes = MakeRequestTypes;

export interface SpotifyClientOptions {
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_REFRESH_TOKEN: string;
  SPOTIFY_SECRET_ID: string;
}

export type RecentlyPlayedTypes = {
  nextUrl?: string;
  limit?: number;
  after?: number;
  before?: number;
  [key: string]: any;
};

export interface SpotifyUserProfileResponse {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
};
