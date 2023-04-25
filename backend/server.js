// server.js
const express = require('express');
const cors = require('cors');
const { getSpotifyArtist } = require('./spotifyApi');
require('dotenv').config();
const admin = require('./firebase')

const app = express();
app.use(cors());
const { PORT, URI } = process.env;

app.use(express.json());
// get data
app.get('/api/spotify/artist/:artistId', getSpotifyArtist);

//post data
app.post('/submit-email', async (req, res) => {
  try {
    const { email } = req.body;
    const docRef = admin.firestore().collection('emails').doc();
    await docRef.set({ email });
    res.json({ message: 'Email submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on ${URI}`);
});
