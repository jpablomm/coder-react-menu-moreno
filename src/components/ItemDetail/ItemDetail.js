import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="detail col-1" key={product.id}>
      <img src={product.image_url} alt="placeholder" />
      <div id="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <ItemCount product={product} />
      </div>
    </div>
  );
};

export default ItemDetail;
