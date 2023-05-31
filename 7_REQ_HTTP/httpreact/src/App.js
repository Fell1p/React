import './App.css';

import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([])

  // 1 - resgatando dados
  useEffect(async () => {

    const res = await fetch(url)

    const data = await res.json()

    setProducts(data)

  })

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
    </div>
  );
}

export default App;