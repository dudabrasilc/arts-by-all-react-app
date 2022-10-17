import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './index.css'
import { useState, useEffect } from 'react';

//Components
import Home from './components/Home';
import About from './components/About';
import ArtsPage from './components/ArtsPage';
import Contribute from './components/Contribute';

function App() {
  const [arts, setArts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/arts`)
    .then(r => r.json())
    .then(artsdata => setArts(artsdata))
  }, [])

  function addArt(newArt) {
    console.log(newArt)
    const newArtsArray=[...arts, newArt]
    setArts(newArtsArray)
  }

return (
  <div className="App">
    <BrowserRouter>
      <nav className='nav'>
        <h1>Arts By All</h1>
        <NavLink activeClassName="active" exact to="/">Home</NavLink>
        <NavLink activeClassName="active" exact to="/About">About</NavLink>
      </nav>
    </BrowserRouter>
  </div>
)
}