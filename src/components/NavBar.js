import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      {/* Full-width container */}
      <header className="header">
        <nav>
          {/* Flexbox for spacing */}
          <div className="navLinkBox">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/work">Work</NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
