// == Import
import "./header.scss";

// == Composant
const Header = () =>  (
    <header className="header">
        <h1 className="header-title">ElementaryTable</h1>
        <nav className= "header-navigation">
            <a className="header-navigation-link" href='#'>Accueil</a>
            <a className="header-navigation-link" href='#'>Element</a>
            <a className="header-navigation-link" href='#'>Contact</a>
        </nav>
    </header>
  );
  // == Export
  export default Header;
  