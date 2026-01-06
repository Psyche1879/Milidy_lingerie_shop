const categories = [
  "Бюстгальтеры",
  "Комплекты",
  "Трусики",
  "Боди",
  "Домашняя одежда"
];

function CategoryList() {
  return (
    <div style={{ display: "flex", gap: 8, overflowX: "auto", marginBottom: 16 }}>
      {categories.map((cat) => (
        <button
          key={cat}
          style={{
            padding: "8px 12px",
            borderRadius: 12,
            border: "1px solid #ddd",
            background: "#fff"
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
