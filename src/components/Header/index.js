// == Import
import "./header.scss";
import { Link } from "react-router-dom";
// == Composant
const Header = () =>  {
   // <h1 className="header-title">ElementaryTable</h1>
    return (
    <header className="header-mini">
        
        <nav className= "header-mini-navigation">
            <Link className="header-mini-navigation-link" to ='/'>Accueil</Link>
            <Link className="header-mini-navigation-link" to ='/element/1'>Element</Link>
            <Link className="header-mini-navigation-link" to ='/'>Contact</Link>
        </nav>
    </header>
  );
}
  // == Export
  export default Header;
  