import FirstComponent from './components/FirstComponent';
import './App.css';
import TemplateExpressions from './components/TempleteExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

function App() {
  return (
    <div className="App"> {/*Quando trabalhamos com React alguns comandos com as "Class" podem entrar em conflito com o HTML quando reindenizado no navegador, para evitar substituimos o "class" por "className"*/}
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent /> {/* Componente antes reindenizado em "FirtComponent" agora reaproveitado no componente Pai */}
      <Events />
    </div>
  );
}

export default App;