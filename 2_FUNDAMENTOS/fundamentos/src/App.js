import FirstComponent from './components/FirstComponent';
import './App.css';
import TemplateExpressions from './components/TempleteExpressions';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent /> {/* Componente antes reindenizado em "FirtComponent" agora reaproveitado no componente Pai */}
    </div>
  );
}

export default App;