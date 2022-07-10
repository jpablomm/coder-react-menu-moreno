import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li id="website-title">
            <Link to="/">Nombre de la tienda</Link>
          </li>
          <li className="option">
            <Link to="/">Catálogo</Link>
          </li>
          <li className="cart">
            <a href="/">
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
