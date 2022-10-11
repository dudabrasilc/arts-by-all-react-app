import './App.css';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='nav'>
          <h1>Arts By Duda</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Products">Products</NavLink>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
