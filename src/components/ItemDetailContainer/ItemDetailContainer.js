import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../lib/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getProducts()
        .then((data) => {
          const selectedItem = data.find((item) => item.id == id);
          setProduct(selectedItem);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
