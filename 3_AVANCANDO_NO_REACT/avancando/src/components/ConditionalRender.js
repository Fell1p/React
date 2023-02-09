// Renderização por condição.
// A priore utilizamos o && como if e assim atribuir um valor boolean a determinado elemento e manipular seu estado e se o mesmo será renderizado.

import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState("Felipe");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>} {/*Será renderizado pois o x tem valor true*/}
        {!x && <p>Agora x é falso</p>} {/*Não será renderizado pois o x tem valor false*/}
        <h1>If ternário</h1>
        {name === "João" ? ( //Foi utilizada a renderização ternária utilizando o ? e :
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Clica aqui!</button> {/*Função que da um setName para auterar o valor boolean do elemento e satisfazer a condição*/}
    </div>
  )
}

export default ConditionalRender