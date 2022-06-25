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
              <svg
                id="cart-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-12-32v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4h-23.15c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24l1.79-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2h-29.57l-1.9-4h-6.53zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z"
                  fill="#2196f3"
                  className="color000000 svgShape"
                ></path>
                <path fill="none" d="M0 0h48v48h-48z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
