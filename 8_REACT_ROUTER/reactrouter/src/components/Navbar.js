import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return <nav>
    <Link to="/">Home</Link> {/*o elemento "to" faz com que a aplicação simplesmente troque de componente, assim, não havendo um reload e dando mais fluidez a aplicação, isso se chama SPA */}
    <Link to="/about">Sobre</Link>
  </nav>
}

export default Navbar