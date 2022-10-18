import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css'
import './App.css';
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
          <NavLink activeClassName="active" exact to="/Arts">Arts</NavLink>
          <NavLink activeClassName="active" exact to="/Contribute">Contribute</NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Arts">
            <ArtsPage arts={arts} />
          </Route>
          <Route path="/Contribute">
            <Contribute addArt={addArt}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;