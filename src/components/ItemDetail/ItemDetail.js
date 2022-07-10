import "./ItemDetail.css";

export default function ItemDetail({ product }) {
  console.log("product: ", product);
  return (
    <div className="card col-1" key={product.id}>
      <img src={product.image_url} alt="placeholder" />
      <div id="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
