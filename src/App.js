import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './index.css'

//Components
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='nav'>
          <h1>Arts By Duda</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Arts">Arts</NavLink>
          <NavLink to="/Cart">Cart</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
