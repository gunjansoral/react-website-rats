import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { menuItems } from './pages/pages';
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import MusicPlayer from './components/MusicPlayer';
import { MyContext } from './store';

function App() {
  const [accessToken, setAccessToken] = useState();
  const [artistData, setArtistData] = useState();
  const util = {
    server: "http://localhost:5000",
    artistId: "5NCZYvOZo5VkSmnkMjgk7f"
  }

  const getArtist = async () => {
    const artist_data = await axios.get(`${util.server}/api/spotify/artist/${util.artistId}`);
    setArtistData(artist_data);
    console.log(artist_data)
  }

  useEffect(() => {
    getArtist();
  }, [])
  const importedModules = require.context('./pages', true, /\.js$/);
  return (
    <MyContext.Provider value={{ artistData, setArtistData }}>
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
    </MyContext.Provider>
  );
}

export default App;
