import './App.css';

// 1 - config react router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pags/Home';
import About from './pags/About';

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1> {/*O que esta fora de "BrowserRouter sera impresso em todas as pags, como cabeçalho e e nav bar" */}
      <BrowserRouter> {/*Tag responsavél por iformar nossa aplicação que temos um roteamento de componentes, assim, envolvendo as demais routes e route */}
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;