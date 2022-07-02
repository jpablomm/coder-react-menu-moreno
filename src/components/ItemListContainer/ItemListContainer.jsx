import { useState, useEffect } from "react";
import getProducts from "../../lib/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  // create state variable with products and loading state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>{greeting}</h2>
      {loading ? <h2>Cargando...</h2> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
