import { getDocs, getFirestore, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const queryProducts = collection(db, "items");
    getDocs(queryProducts)
      .then((res) => {
        const newCategories = [];
        res.docs.forEach((item) => {
          const category = item.data().category;
          if (newCategories.indexOf(category) === -1) {
            newCategories.push(category);
          }
        });
        return newCategories;
      })
      .then((cats) => setCategories(cats));
  }, []);
  console.log("categories: ", categories);
  return (
    <div className="subnav-content">
      {categories.map((category) => {
        return (
          <Link to={`/category/${category}`} key={category}>
            {category}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoriesList;
