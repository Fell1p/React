import './App.css';
import CarroDetalhes from './components/carroDetalhes';

function App() {

  const carros = [
    { id: 1, marca: "Ferrari", modelo: "SF90", cor: "Amarelo" },
    { id: 2, marca: "Lamborghini", modelo: "Urus", cor: "Preto" },
    { id: 3, marca: "Maserati", modelo: "Ghibli", cor: "Vinho" }
  ]

  return (
    <div className="App">
      <h1 style={{color:"blue"}} >Desafio CSS</h1>
      {carros.map((car) => (
        <CarroDetalhes 
          key={car.id}
          marca={car.marca}
          modelo={car.modelo}
          cor={car.cor}
        />
      ))}
    </div>
  );
}

export default App;
