import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Lista from './pages/Lista'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lista' element={<Lista />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;