import { useState, useEffect } from "react";
import getProducts from "../../lib/products";
import Item from "../Item/Item";

export default function ItemList({ products }) {
  // create state variable with products and loading state
  return (
    <div>
      {products.map((product) => {
        return <Item product={product} />;
      })}
    </div>
  );
}
