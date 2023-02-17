import './App.css';
import MyComponent from './components/MyComponent'; 

import { useState } from "react";
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Felipe");

  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS componente */}
      <MyComponent />
      <p>Este paragrafo é do app.JS</p>
      {/* Inline CSS */}
      <p style={{ color:"red", padding:"30px", borderTop: "2px solid red"}} >
        Este  elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10  ? {color: "purple"} : {color: "pink"}}>CSS dinâmico</h2>
      <h2 style={n > 10  ? {color: "purple"} : {color: "pink"}}>CSS dinâmico</h2>
      <h2 style={name === "Felipe"  ? { color: "green", backgroundColor: "#000" } :  null }>Felipe</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"} >
        Este titulo vai ter classee dinâmica
      </h2>
      {/* CSS modules */}
      <Title />
    </div>
  );
}

export default App;