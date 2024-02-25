import { MakeRequestTypes, SpotifyUserProfileResponse } from "../../types/types";
import { makeRequest } from "../lib/make-request";

export const getUserProfile = async (props: MakeRequestTypes) => {
  props.url = "https://api.spotify.com/v1/me";
  const data = await makeRequest(props);
  if (data) {
    return data as SpotifyUserProfileResponse;
  } else {
    return Error("Something unexpected happened. Please try again.");
  }
};