import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManegeData from './components/ManegeData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Dani";
  const [userName] = useState("Bob");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    { id: 2, brand: "BMW", color: "Preto", newCar: true, km: 54541325},
    { id: 3, brand: "KIA", color: "Azul", newCar: true, km: 3546411}
  ];

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id:1, nome: "Felipe", idade: "27", sexo: "mascolino"},
    {id:2, nome: "Dani", idade: "28", sexo: "feminino"},
    {id:3, nome: "Bob", idade: "15", sexo: "mascolino"}
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
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      <Fragment propFragment={"teste"} />
      {/* children */}
      <Container myValue="Teste">
        <p>este é o conteudo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio */}
      {users.map((usuarios) => (
        <UserDetails
          key={usuarios.id}
          nome={usuarios.nome}
          idade={usuarios.idade}
          sexo={usuarios.sexo}
         />            
      ))}      
    </div>
    
  );
}

export default App;
