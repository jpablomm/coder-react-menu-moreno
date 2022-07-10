import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ product }) {
  return (
    <div className="card col-1" key={product.id}>
      <img src={product.image_url} alt="placeholder" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/detail/${product.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}
