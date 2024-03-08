import { makeRequest } from "../lib/make-request";

type CustomAPIProps = {
  SPOTIFY_CLIENT_ID: string;
  SPOTIFY_SECRET_ID: string;
  SPOTIFY_REFRESH_TOKEN: string;
  url: string;
};

export const getCustomAPI = async (props: CustomAPIProps) => {
  const data = await makeRequest(props);
  if (data) {
    return data;
  }
};
