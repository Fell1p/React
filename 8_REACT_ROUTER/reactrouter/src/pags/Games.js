import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Games = () => {
    // 4 - rota dinamica
    const { id } = useParams();

    // 5 - Carregamento dado individual
    const url = "http://localhost:3000/games/" + id

    const { data: game, loading, error } = useFetch(url)

    console.log(game);

  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Occoreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {game && (
      <div>
        <h1>{game.name}</h1>
        <p>R${game.price}</p>
      </div>
    )}
    </>
  );
};

export default Games