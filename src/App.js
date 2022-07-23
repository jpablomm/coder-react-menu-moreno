import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartDetail from "./components/CartDetail/CartDetail";
import CartContext from "./components/CartContext/CartContext";
import CategoryDetail from "./components/CategoryDetail/CategoryDetail";

function App() {
  return (
    <CartContext>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryName"
              element={<CategoryDetail />}
            />
            <Route path="/cart" element={<CartDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext>
  );
}

export default App;
