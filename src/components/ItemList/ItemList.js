import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ products }) {
  // create state variable with products and loading state
  return (
    <div className="container">
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  );
}
