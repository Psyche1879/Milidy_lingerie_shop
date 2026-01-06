export function ProductCard({ product, onAdd }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 12,
      padding: 12
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: 8 }}
      />

      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <b>{product.price} ₽</b>

      <button
        style={{ marginTop: 8, width: "100%" }}
        onClick={() => onAdd(product)}
      >
        ➕ Добавить в корзину
      </button>
    </div>
  );
}
