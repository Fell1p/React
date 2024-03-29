import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import './Home.css'

const Home = () => {
  // - 3 Carregamento de dados
  const url = 'http://localhost:3000/games'

  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      <ul className="games">
        {items &&
        items.map((item) => ( //Loop de renderização de elementos
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            {/* 4 - rota dinamica */}
          <Link to={`/games/${item.id}`}>Detalhes</Link> {/*Aplicando uma rota dinamica*/}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home