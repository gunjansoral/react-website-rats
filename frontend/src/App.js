import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { menuItems } from './pages/pages';

function App() {
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
    </Router>
  );
}

export default App;
