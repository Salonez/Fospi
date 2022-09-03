import './App.css';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import DietaryNeeds from './pages/DietaryNeeds';
import About from './pages/About';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route exact path='/dietary-needs' element={<DietaryNeeds />} />
          <Route exact path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
