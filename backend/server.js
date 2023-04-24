// server.js
const express = require('express');
const cors = require('cors');
const { getSpotifyArtist } = require('./spotifyApi');
require('dotenv').config();

const app = express();
app.use(cors());
const { PORT, URI } = process.env;

// get data
app.get('/api/spotify/artist/:artistId', getSpotifyArtist);



// Start the server
app.listen(PORT, () => {
  console.log(`Server started on ${URI}`);
});
