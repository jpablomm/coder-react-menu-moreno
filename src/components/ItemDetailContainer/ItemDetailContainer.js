import { useState, useEffect } from "react";
import getProducts from "../../lib/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
  // create state variable with products and loading state
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === id);
        setProduct(selectedProduct);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
