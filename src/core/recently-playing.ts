import { MakeRequestTypes, RecentlyPlayedTypes } from "../../types/types";
import { makeRequest } from "../lib/make-request";

function appendPropsToUrl(props: RecentlyPlayedTypes): string {
  const excludedProps = [
    "SPOTIFY_CLIENT_ID",
    "SPOTIFY_SECRET_ID",
    "SPOTIFY_REFRESH_TOKEN",
    "url",
  ];
  const queryString = Object.keys(props)
    .filter((key) => key !== "url" && !excludedProps.includes(key))
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(props[key])}`
    )
    .join("&");

  if (!props.nextUrl) {
    return `https://api.spotify.com/v1/me/player/recently-played?${queryString}`;
  } else {
    return `${props.nextUrl}?${queryString}`;
  }
}

export const getRecentlyPlayed = async (props: MakeRequestTypes, options: RecentlyPlayedTypes) => {
  props.url = appendPropsToUrl(options);
  const data = await makeRequest(props);
  if (data.items) {
    return data;
  } else {
    return Error("Something unexpected happened. Please try again.");
  }
};
