import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS componente */}
      <MyComponent />
      <p>Este paragrafo é do app.JS</p>
      {/* Inline CSS */}
      <p style={{ color:"blue", padding:"30px", borderTop: "2px solid red"}} > 
        Este  elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
