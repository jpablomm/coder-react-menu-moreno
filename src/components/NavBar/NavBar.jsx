import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import CartDetail from "../CartDetail/CartDetail";

const NavBar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const showCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="navBar">
      <nav>
        <ul id="menuOptions">
          <li id="website-title">
            <Link to="/">Nombre de la tienda</Link>
          </li>
          <li className="option">
            <Link to="/">Catálogo</Link>
          </li>
          <li className="cart">
            <button onClick={showCart}>
              <CartWidget />
            </button>
          </li>
        </ul>
        {cartOpen ? <CartDetail /> : undefined}
      </nav>
    </div>
  );
};

export default NavBar;
