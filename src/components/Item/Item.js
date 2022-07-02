export default function Item({ product }) {
  return (
    <div key={product.id} className="card">
      <h3>{product.name}</h3>
      <p>Product description</p>
      <p>{product.price}</p>
      <button>Go to detail</button>
    </div>
  );
}
