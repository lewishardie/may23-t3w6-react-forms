
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BusinessCardPage from './pages/BusinessCardPage';
import PokemonFetcherPage from './pages/PokemonFetcherPage';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* This works, but there can be tedious when there are many nested routes
        
        <Route path='/about' element={<AboutPage />} />
        <Route path='/about/contact' element={<ContactPage />} /> 

        Better alternatives available
        */}
        <Route path='/about' element={<AboutPage />}>
          <Route path='contact' element={<ContactPage />} />

        </Route>
        <Route path='/cards' element={<BusinessCardPage />} />
        <Route path='/pokemon' element={<PokemonFetcherPage />} />
      </Routes>

    </div>
  );
}

export default App;
