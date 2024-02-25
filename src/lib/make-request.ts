import { MakeRequestTypes } from "../../types/types";

const REFRESH_TOKEN_URL = "https://accounts.spotify.com/api/token";

let SPOTIFY_TOKEN = "";

const getAuthHeader = (clientId: string, secretId: string) => {
  const authString = `${clientId}:${secretId}`;
  return Buffer.from(authString).toString("base64");
};

const requestRefreshToken = async (
  refreshToken: string,
  clientId: string,
  secretId: string
) => {
  const data = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
  const headers = {
    Authorization: `Basic ${getAuthHeader(clientId, secretId)}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  try {
    const response = await fetch(REFRESH_TOKEN_URL, {
      method: "POST",
      headers,
      body: data,
    });
    const resp = await response.json();
    return resp.access_token;
  } catch (error) {
    return { error: "Error fetching refresh token" };
  }
};

export const makeRequest = async (props: MakeRequestTypes): Promise<any> => {
  if (!SPOTIFY_TOKEN) {
    SPOTIFY_TOKEN = await requestRefreshToken(
      props.SPOTIFY_REFRESH_TOKEN,
      props.SPOTIFY_CLIENT_ID,
      props.SPOTIFY_SECRET_ID
    );
  }
  try {
    if (!props.url) {
      throw new Error("URL is undefined");
    }
    const makeResponse = await fetch(props.url, {
      headers: {
        Authorization: `Bearer ${SPOTIFY_TOKEN}`,
      },
    });
    const res = await makeResponse.json();
    return res;
  } catch (error: any) {
    if (error.response?.status === 401) {
      SPOTIFY_TOKEN = await requestRefreshToken(
        props.SPOTIFY_REFRESH_TOKEN,
        props.SPOTIFY_CLIENT_ID,
        props.SPOTIFY_SECRET_ID
      );
      return makeRequest(props);
    }
  }
};
