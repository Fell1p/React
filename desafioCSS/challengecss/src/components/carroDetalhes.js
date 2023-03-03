import './carroDetalhes.css'

const CarroDetalhes = ({ marca, modelo, cor }) => {
  return (
    <div className="card" >
        <h2>Detalhes do Carro</h2>
        
        <ul className="lista" >
            <li className="elemento" >Marca: {marca}</li>
            <li className="elemento">Modelo: {modelo}</li>
            <li className="elemento">Cor: {cor}</li>
        </ul>
    </div>
  )
}

export default CarroDetalhes;