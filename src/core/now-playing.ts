import { MakeRequestTypes } from "../../types/types";
import { makeRequest } from "../lib/make-request";

export const getNowPlaying = async (props: MakeRequestTypes) => {
  if (!props.url) {
    props.url = "https://api.spotify.com/v1/me/player/currently-playing";
  }
  const data = await makeRequest(props);
  if (data) {
    return data;
  }
};
