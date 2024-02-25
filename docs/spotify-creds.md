## Setting Up Spotify API Credentials

To integrate with the Spotify API, follow these steps:

1. **Create a Spotify Application**: Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and create a new application.

2. **Note Down Client ID and Client Secret**: Upon creating the application, note down the `Client ID` and `Client Secret`.

3. **Edit Application Settings**:
   - Click on **Edit Settings** for your newly created application.
   - Add `http://localhost/callback/` to the list of **Redirect URIs**.

## Obtaining a Refresh Token

1. **Authorization URL**:
   Navigate to the following URL in your browser:

   ```
   https://accounts.spotify.com/authorize?client_id={SPOTIFY_CLIENT_ID}&response_type=code&scope=user-read-currently-playing,user-read-recently-played&redirect_uri=http://localhost/callback/
   ```

2. **Authorize and Get Code**:

   - Log in with your Spotify account.
   - Save the `{CODE}` portion from the redirected URL: `http://localhost/callback/?code={CODE}`.

3. **Generate Base64 String**:

   - Create a string by combining `{SPOTIFY_CLIENT_ID}:{SPOTIFY_CLIENT_SECRET}`.
   - Encode this string into [Base64](https://base64.io/).

4. **Retrieve Refresh Token**:
   - Execute the following `curl` command:
   ```sh
   curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic {BASE64}" -d "grant_type=authorization_code&redirect_uri=http://localhost/callback/&code={CODE}" https://accounts.spotify.com/api/token
   ```
   - Save the Refresh token obtained from the response.

With these credentials and tokens, you can now access Spotify's API endpoints securely.
