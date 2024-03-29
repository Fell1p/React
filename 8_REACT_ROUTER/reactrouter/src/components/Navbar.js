import "./Navbar.css";

// 2 - links com react router
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
  <nav>
    {/*<Link to="/">Home</Link> //o elemento "to" faz com que a aplicação simplesmente troque de componente, assim, não havendo um reload e dando mais fluidez a aplicação, isso se chama SPA 
    <Link to="/about">Sobre</Link>*/}
    <NavLink 
    //className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")} 
      to="/" 
    >
      Home
    </NavLink>
    <NavLink 
      to="/about">Sobre</NavLink>
  </nav>
  );
};

export default Navbar