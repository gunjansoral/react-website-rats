const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
const spotifyApi = new SpotifyWebApi({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
})

// set access token
spotifyApi.clientCredentialsGrant().then(
  function (data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function (err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
)

exports.getSpotifyArtist = async (req, res) => {
  // Retrieve the artist ID from the URL parameters
  const artistId = req.params.artistId;
  try {
    const { body } = await spotifyApi.getArtistTopTracks(artistId, 'GB')
    res.json(body.tracks);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving artist data from Spotify');
  }
}