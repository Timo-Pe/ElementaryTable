// == Import
import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// == Composant
const Header = () =>  {
   const valueHeader = useSelector((state) => state.element.headerValue);

    return (
    <header className={`header ${valueHeader === 1 ? "mini" : ""}`}>
      {valueHeader === 0 && <h1 className ="header-title">ElementaryTable</h1>}
        <nav className= "header-navigation">
            <Link className="header-navigation-link" to ='/'>Accueil<span className="material-symbols-outlined">home</span></Link>
            <Link className="header-navigation-link" to ='/element/1'>Element<span className="material-symbols-outlined">Dataset</span></Link>
            <Link className="header-navigation-link" to ='/'>Contact<span className="material-symbols-outlined">Mail</span></Link>
        </nav>
    </header>
  );
}
  // == Export
  export default Header;
  