import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = "http://localhost:3000/games?" + searchParams

    const {data: items, loading, error} = useFetch(url);

  return (
    <div>
        <h1>Resultados disponíveis</h1>
        <ul className="games">
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}   
        {items &&
        items.map((item) => ( 
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
          <Link to={`/games/${item.id}`}>Detalhes</Link> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search