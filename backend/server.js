// server.js
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const { PORT, URI, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET
});

// Retrieve an access token to authenticate with the Spotify API
spotifyApi.clientCredentialsGrant().then((data) => {
  spotifyApi.setAccessToken(data.body.access_token);
}, (err) => {
  console.error(err);
});

// Endpoint for fetching artist data from Spotify
app.get('/api/spotify/artists/:artistId', (req, res) => {
  // Retrieve the artist ID from the URL parameters
  const artistId = req.params.artistId;

  // Use the Spotify API client to get information about the artist
  spotifyApi.getArtist(artistId)
    .then((data) => {
      res.send(data.body);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving artist data from Spotify');
    });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server started on ${URI}`);
});
