import './MyForm.css';
import { useState } from 'react';

const MyForm = () => {
  // 3 - grenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }

  //console.log(name);
  //console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email);
  };


  return (
    <div>
      {/* 5 - Envio de form */}
        {/* 1 - criação de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Digite seu nome" 
                  onChange={handleName} 
                />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail: </span>
                {/* 4 - Simplificação de manipulação de state */}
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Digite seu email" 
                  onChange={(e) => setEmail(e.target.value)} 
                />
            </label>
            <input type="submit"  value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm