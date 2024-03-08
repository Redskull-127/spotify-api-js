import {
  RecentlyPlayedTypes,
  SpotifyClientOptions,
  SpotifyUserProfileResponse,
} from "../../types/types";
import { NowPlayingResponseTypes } from "../../types/other/currentplaying-types";
import { RecentlyPlayingResponseTypes } from "../../types/other/recentlyplaying-types";
import { getNowPlaying } from "./now-playing";
import { getRecentlyPlayed } from "./recently-playing";
import { getUserProfile } from "./user-profile";
import { getCustomAPI } from "./custom-fetch";

export class SpotifyClient {
  private SPOTIFY_CLIENT_ID: string;
  private SPOTIFY_REFRESH_TOKEN: string;
  private SPOTIFY_SECRET_ID: string;

  constructor(options: SpotifyClientOptions) {
    this.SPOTIFY_CLIENT_ID = options.SPOTIFY_CLIENT_ID;
    this.SPOTIFY_REFRESH_TOKEN = options.SPOTIFY_REFRESH_TOKEN;
    this.SPOTIFY_SECRET_ID = options.SPOTIFY_SECRET_ID;
  }

  public async getNowPlaying() {
    return getNowPlaying({
      SPOTIFY_CLIENT_ID: this.SPOTIFY_CLIENT_ID,
      SPOTIFY_REFRESH_TOKEN: this.SPOTIFY_REFRESH_TOKEN,
      SPOTIFY_SECRET_ID: this.SPOTIFY_SECRET_ID,
    }) as Promise<NowPlayingResponseTypes>;
  }

  public async getRecentlyPlayed(props?: RecentlyPlayedTypes) {
    return getRecentlyPlayed(
      {
        SPOTIFY_CLIENT_ID: this.SPOTIFY_CLIENT_ID,
        SPOTIFY_REFRESH_TOKEN: this.SPOTIFY_REFRESH_TOKEN,
        SPOTIFY_SECRET_ID: this.SPOTIFY_SECRET_ID,
      },
      props || {}
    ) as Promise<RecentlyPlayingResponseTypes>;
  }

  public async getUserProfile() {
    return getUserProfile({
      SPOTIFY_CLIENT_ID: this.SPOTIFY_CLIENT_ID,
      SPOTIFY_REFRESH_TOKEN: this.SPOTIFY_REFRESH_TOKEN,
      SPOTIFY_SECRET_ID: this.SPOTIFY_SECRET_ID,
    }) as Promise<SpotifyUserProfileResponse>;
  }

  public async getCustomAPI(url: string) {
    return getCustomAPI({
      SPOTIFY_CLIENT_ID: this.SPOTIFY_CLIENT_ID,
      SPOTIFY_REFRESH_TOKEN: this.SPOTIFY_REFRESH_TOKEN,
      SPOTIFY_SECRET_ID: this.SPOTIFY_SECRET_ID,
      url: url,
    }) as Promise<any>;
  }
}
