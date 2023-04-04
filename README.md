# Lil-Spot

A little Spotify web application made during MLH's Global Hack Week: API's

## Run Server

In the terminal run, `npm run start`. The server will run on
`http://localhost:3000/`.

# Generate a new Spotify token

1. Create a new .env file in the root directory
2. In the terminal run the following:

   ```
   curl -X POST "https://accounts.spotify.com/api/token" \
       -H "Content-Type: application/x-www-form-urlencoded" \
       -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
   ```

   **Note**: Make sure to replace `your-client-id` with your own Spotify client id and `your-client-secret` with your own Spotify client secret. These can be found in thru the Dashboard of your created app on the [Spotify for Developers](https://developer.spotify.com/) platform.

   The outputted token should look something like the following:

   ```
   {
   "access_token": "BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11",
   "token_type": "Bearer",
   "expires_in": 3600
   }
   ```

   The generated token will EXPIRE in 1 hour and needs to be regenerated after that.

3. Copy the value for the outputted access token from the previous step and input that value into `.env`.

   ```
   SPOTIFY_ACCESS_TOKEN="SpotifyAccessTokenGoesHere"
   ```

4. When you navigate to `http://localhost:3000/spotify`, you should get a response for with details about the artist, Radiohead (which is hardcoded for now).

## References

- [Getting Started with (Spotify) Web API](https://developer.spotify.com/documentation/web-api/tutorials/getting-started)
- [Create React App without Create React App](https://blog.bitsrc.io/create-react-app-without-create-react-app-b0a5806a92)
