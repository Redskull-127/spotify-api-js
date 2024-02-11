import { SpotifyClientOptions } from "../../types/types";
import { getNowPlaying } from "./now-playing";
import { getRecentlyPlayed } from "./recently-playing";

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
      SPOTIFY_SECRET_ID: this.SPOTIFY_SECRET_ID
    });
  }

  public async getRecentlyPlayed(props? : {nextUrl: string}){
    return getRecentlyPlayed({
      SPOTIFY_CLIENT_ID: this.SPOTIFY_CLIENT_ID,
      SPOTIFY_REFRESH_TOKEN: this.SPOTIFY_REFRESH_TOKEN,
      SPOTIFY_SECRET_ID: this.SPOTIFY_SECRET_ID,
      ...props,
    });
  }
}
