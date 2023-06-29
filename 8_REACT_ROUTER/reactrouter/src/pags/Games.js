import { useParams } from "react-router-dom"

const Games = () => {
    // 4 - rota dinamica
    const { id } = useParams();

  return (
    <>
    <p>ID do produto: {id}</p>
    </>
  );
};

export default Games