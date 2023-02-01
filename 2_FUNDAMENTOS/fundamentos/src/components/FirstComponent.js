// Sintaxe para comentarios em JS
import MyComponent from "./MyComponent";

const FirstComponent = () => { // Sintaxe para criação de componentes comumente utilizado

    return (
        <div> {/* Sintaxe para comentarios em JSX */}
            <h1>Meu primeiro componente</h1>
            <MyComponent /> {/* Componente filho sendo reindenizado */}
        </div>        
    )
}
export default FirstComponent;