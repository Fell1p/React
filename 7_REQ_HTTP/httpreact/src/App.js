import './App.css';

import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  useEffect(() => { //useEffect permite que um componente seja renderizado apenas uma vez

    async function fetData(){//funções declaradas como async dizem para o js que uma PROMISE é esperada
    const res = await fetch(url); // fetch inicia o processo de buscca de um recurso da rede, retorna uma promessa que é cumprida assim que a resposta estiver disponivel

    const data = await res.json();// await é uma função js utilizada em conjunto com o async on o mesmo para a function até que a PROMISE seja cumprida.

    setProducts(data);
    }
    fetData();
  }, []);

  // 2 - Adição de Produtos

  const handleSubmit = async (e) => { //Função de renderização de dados
    e.preventDefault();

      const product = { //Nomes das chaves para efeturar a requisição e resgatar os dados
        name, //Como a chave possui o mesmo termo que o valor apenas escrevendo a chave é o suficiente
        price, 
      };

      const res = await fetch(url, { //Requisão
        method: "POST", //Incerção do verbo http
        headers: { //Cabeçalho da requisição
          "Content-Type":"application/json"
        },
        body: JSON.stringify(product) //Configurando o corpo da requisição em JSON
      })
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
        <li key={products.id}>  
          {product.name} - R$: {product.price}
        </li>
        ))}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome: 
            <input 
              type="text"
              value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input 
              type="number"
              value={price} 
              name="price" 
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;