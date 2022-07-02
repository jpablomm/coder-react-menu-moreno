import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  function handleOnClick(e) {
    e.preventDefault();
  }
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li id="website-title">
            <a href="/" onClick={handleOnClick}>
              Nombre de la tienda
            </a>
          </li>
          <li className="option">
            <a href="/" onClick={handleOnClick}>
              Acerca de nosotros
            </a>
          </li>
          <li className="option">
            <a href="/" onClick={handleOnClick}>
              Catálogo
            </a>
          </li>
          <li className="option">
            <a href="/" onClick={handleOnClick}>
              Mi cuenta
            </a>
          </li>
          <li className="option">
            <a href="/" onClick={handleOnClick}>
              Mis pedidos
            </a>
          </li>
          <li className="cart">
            <a href="/" onClick={handleOnClick}>
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
