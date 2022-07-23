import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext, useState } from "react";
import { ItemsContext } from "../CartContext/CartContext";
import CategoriesList from "../CategoriesList/CategoriesList";

const NavBar = () => {
  const { items } = useContext(ItemsContext);
  const [openCategories, setOpenCategories] = useState(false);

  function onClickCategories(e) {
    e.preventDefault();
    setOpenCategories(!openCategories);
  }

  return (
    <div className="navBar">
      <nav>
        <ul id="menuOptions">
          <li id="website-title">
            <Link to="/">React Shop</Link>
          </li>
          <div className="subnav">
            <button onClick={onClickCategories} className="subnavbtn option">
              Catálogo
            </button>
            <CategoriesList />
          </div>
          <li className="cart">
            {items.length > 0 && (
              <Link to="/cart">
                <CartWidget />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
