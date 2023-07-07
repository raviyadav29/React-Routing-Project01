import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/NavBar/Nav';
import Home from './Components/Routing Project/Home';
import Cart from './Components/Routing Project/Cart';
import Products from "./Components/Routing Project/Products"


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
