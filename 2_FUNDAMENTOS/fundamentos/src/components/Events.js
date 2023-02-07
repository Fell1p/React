const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)

        console.log("Ativou o evento!")
    };

    const renderSomething = (x) => { /*Criando uma função com um JSX que será rendenizado fora do return principal sendo apenas mencionado no mesmo atraés das chaves */

        if (x)  {
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Também posso rendenizar isso!</h1>
        }
    };


    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}> {/*Pode-se utilizar um evendo para ativar uma função como neste exemplo*/}
                    Clique aqui também!
                </button>
                <button
                    onClick={() => {
                        if (true) {
                            console.log("Isso não deveria existir")
                        }
                    }}>
                    Clique aqui, por favor.
                </button>
                {renderSomething(true)} {/*Função apenas mencionada porém rendenizada fora do retuns principal */}
                {renderSomething(false)}
            </div>
        </div>
    );
};

export default Events;