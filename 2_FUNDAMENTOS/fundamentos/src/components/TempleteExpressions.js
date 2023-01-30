// Template Expressions é o recurso que nos permite escrever JS no JSX e também interpolar variáveis. 
// A sintaxe seria a utilização de chaves "{}" e dentro das chaves podemos escrver em JS

const TemplateExpressions = () => {

    const name = "Felipe";
    const data = {
        age: 31,
        job: "Programador",
    }

    return (
        <div>
            <h1>Olá {name}{/*Aqui sera interpolado o valor existente na variavél name*/}, tudo bem ?</h1>
            <p>Você atua como: {data.job}{/*Aqui poderemos acessar os valores de um objeto assim como no JS*/}</p>
            <p>{4 + 4}{/*Aqui será reindenizada a somas dos numeros assim como no JS*/}</p>
        </div>
    );
};

export default TemplateExpressions;