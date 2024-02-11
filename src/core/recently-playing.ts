import { MakeRequestTypes } from "../../types/types";
import { makeRequest } from "../lib/make-request";

export const getRecentlyPlayed = async (props: MakeRequestTypes) => {
  if (!props.nextUrl) {
    props.url = "https://api.spotify.com/v1/me/player/recently-played";
  } else {
    props.url = props.nextUrl;
  }
  const data = await makeRequest(props);
  if (data.items) {
    return data;
  } else {
    return Error("Something unexpected happened. Please try again.");
  }
};
