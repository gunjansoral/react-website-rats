import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { menuItems } from './pages/pages';
import axios from 'axios'
import { useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/spotify/artists/5NCZYvOZo5VkSmnkMjgk7f')
      .then((response) => {
        // Handle the response data
        console.log('Playlist data', response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }, [])

  const importedModules = require.context('./pages', true, /\.js$/);
  return (
    <Router>
      <Header menuItems={menuItems} />
      <Routes>
        {importedModules.keys().map((el, index) => {
          const ImportedModule = importedModules(el).default;
          console.log(el.toLowerCase().slice(0, -9).slice(1))
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
