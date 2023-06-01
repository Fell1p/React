import './App.css';

import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

  // 1 - resgatando dados
  useEffect(async () => { //funções declaradas como async dizem para o js que uma PROMISE é esperada

    const res = await fetch(url) // fetch inicia o processo de buscca de um recurso da rede, retorna uma promessa que é cumprida assim que a resposta estiver disponivel

    const data = await res.json()// await é uma função js utilizada em conjunto com o async on o mesmo para a function até que a PROMISE seja cumprida.

    setProducts(data);
  }, []);

  console.log(products);

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
    </div>
  );
}

export default App;