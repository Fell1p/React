import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManegeData from './components/ManegeData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Dani";
  const [userName] = useState("Bob");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    { id: 2, brand: "BMW", color: "Preto", newCar: true, km: 54541325},
    { id: 1, brand: "KIA", color: "Azul", newCar: true, km: 3546411}
  ];

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
      {/*Utilizando props*/}
      <ShowUserName name={name} /> {/*Props por variavél*/}
      <ShowUserName name={userName} />{/*Props por state*/}
      <ShowUserName name={"Felipe"} />{/*Props por propriedade de compoente*/}
      {/*Destruring em props*/}
      <CarDetails brand="VW" km="1600" color="Branco" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Azul" newCar={true} />
      <CarDetails brand="Fiat" km={12502454} color="Preto" newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      <Fragment propFragment={"teste"} />
    </div>
    
  );
}

export default App;
