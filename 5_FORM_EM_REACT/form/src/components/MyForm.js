import './MyForm.css';
import { useState } from 'react';

const MyForm = () => {
  // 3 - grenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }

  console.log(name);
  console.log(email);

  return (
    <div>
        {/* 1 - criação de formulario */}
        <form>
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
                <input type="email" name="email" />
            </label>
            <input 
              type="submit" 
              value="Enviar" 
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
        </form>
    </div>
  )
}

export default MyForm