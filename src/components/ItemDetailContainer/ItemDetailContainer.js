import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const db = getFirestore();
      const queryProduct = doc(db, "items", id);
      getDoc(queryProduct)
        .then((res) => {
          setProduct({
            id: res.id,
            ...res.data(),
          });
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
