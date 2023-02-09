import './App.css';
import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManegeData from './components/ManegeData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em pulic - Quando a mesma se encontra em public podemos acessar ela atravez da barra*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset - Nessa metodo temos de importar como se fosse um componete e interpolalo */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManegeData />
      <ListRender />
      <ConditionalRender />
    </div>
    
  );
}

export default App;
