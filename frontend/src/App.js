import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { menuItems } from './pages/pages';
import axios from 'axios'
import { useEffect, useState } from 'react';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [accessToken, setAccessToken] = useState();
  const [artistData, setArtistData] = useState();
  const util = {
    server: "http://localhost:5000",
    artistId: "5NCZYvOZo5VkSmnkMjgk7f"
  }

  const getArtist = async (artistId) => {
    const artist_data = await axios.get(`${util.server}/api/spotify/artists/${artistId}`);
    console.log(artist_data)
    setArtistData(artist_data);
  }

  useEffect(() => {
    getArtist(util.artistId);
  }, [])
  const importedModules = require.context('./pages', true, /\.js$/);
  return (
    <Router>
      <Header menuItems={menuItems} />
      <Routes>
        {importedModules.keys().map((el, index) => {
          const ImportedModule = importedModules(el).default;
          return (
            <Route key={index} exact path={
              el.toLowerCase().slice(0, -9).slice(1) == "/home" ?
                "/" :
                el.toLowerCase().slice(0, -9).slice(1)
            }
              element={<ImportedModule />} />
          )
        })}
      </Routes>
      <MusicPlayer />
    </Router>
  );
}

export default App;
