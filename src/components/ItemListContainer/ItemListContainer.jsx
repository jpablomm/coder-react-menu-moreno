import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryProducts = collection(db, "items");
    getDocs(queryProducts)
      .then((res) => {
        setProducts(
          res.docs.map((prod) => {
            return {
              id: prod.id,
              ...prod.data(),
            };
          })
        );
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

// GET FILTERED PRODUCTS
// useEffect(() => {
//   const db = getFirestore();
//   const queryProducts = collection(db, "items");
//   const queryProductsFilter = query(queryProducts, where("price", ">", 50));
//   getDocs(queryProductsFilter)
//     .then((res) => {
//       setProducts(
//         res.docs.map((prod) => {
//           return {
//             id: prod.id,
//             ...prod.data(),
//           };
//         })
//       );
//     })
//     .catch((e) => console.log(e))
//     .finally(() => setLoading(false));
// }, []);

// GET ALL PRODUCTS
// useEffect(() => {
//   const db = getFirestore();
//   const queryProducts = collection(db, "items");
//   getDocs(queryProducts)
//     .then((res) => {
//       setProducts(
//         res.docs.map((prod) => {
//           return {
//             id: prod.id,
//             ...prod.data(),
//           };
//         })
//       );
//     })
//     .catch((e) => console.log(e))
//     .finally(() => setLoading(false));
// }, []);

// GET ONLY ONE PRODUCT
// useEffect(() => {
//   const db = getFirestore();
//   const queryProduct = doc(db, "items", "KgYwbpvLHfrDley5iQEy");
//   getDoc(queryProduct).then((res) => {
//     setProducts({
//       id: res.id,
//       ...res.data(),
//     });
//   });
// }, []);
