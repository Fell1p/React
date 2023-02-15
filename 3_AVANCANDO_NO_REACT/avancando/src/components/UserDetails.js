const UserDetails = ({ nome, idade, sexo }) => {
  return (
    <div>  
        <h2>Nome: {nome}</h2> 
        <p>Idade: {idade}</p>
        <p>Sexo: {sexo}</p>        
        {idade >= 18 ? (<p>Pode tirar a carta</p>):(<p>Menor de idade, não pode tirar a carta</p>)
        }
        <p>----------------</p>
    </div>
  )
}

export default UserDetails