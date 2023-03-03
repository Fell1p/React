import './MyForm.css';

const MyForm = () => {
  return (
    <div>
        {/* 1 - criação de formulario */}
        <form>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Digite seu nome" />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" />
            </label>
            <input type="submit" value="Enviar" placeholder="Digite seu email"/>
        </form>
    </div>
  )
}

export default MyForm