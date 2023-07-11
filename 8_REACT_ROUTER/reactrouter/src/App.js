import './App.css';

// 1 - config react router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pags/Home';
import About from './pags/About';
import Games from './pags/Games';
import Info from './pags/Info';
import NotFound from './pags/NotFound';
import Search from './pags/Search';

// components
import Navbar from "./components/Navbar";
import SearchForm from './components/SearchForm';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1> {/*O que esta fora de "BrowserRouter sera impresso em todas as pags, como cabeçalho e e nav bar" */}
      <BrowserRouter> {/*Tag responsavél por iformar nossa aplicação que temos um roteamento de componentes, assim, envolvendo as demais routes e route */}

      {/*2 - links com react router*/}
      <Navbar />
      {/* 9 - search */}
      <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 6 - nested route */}
          <Route path='/games/:id/info' element={<Info />} />
          <Route path="/about" element={<About />} />
          {/* 4 - rota dinamica*/}
          <Route path="/games/:id" element={<Games />} /> {/*O termo ":id" dis que essa rota é dinamica*/}
          {/* 9 - search */}
          <Route path='/search' element={<Search />} />
          {/* 7 - No march route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;