import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function ProductList({ onAdd }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 12
    }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
