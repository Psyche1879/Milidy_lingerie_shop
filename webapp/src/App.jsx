import { useEffect, useState, useCallback } from "react";
import { ProductList } from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([]);
  const tg = window.Telegram?.WebApp;

  // ✅ считаем общее количество товаров
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  // ✅ считаем сумму корректно
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = useCallback(() => {
    if (!tg || cart.length === 0) return;

    tg.sendData(
      JSON.stringify({
        action: "checkout",
        items: cart,
        total: totalPrice,
      })
    );

    tg.close();
  }, [cart, totalPrice, tg]);

  useEffect(() => {
    if (!tg) return;

    tg.ready();
    tg.expand();

    if (cart.length > 0) {
      tg.MainButton.setText(`Оформить заказ • ${totalQty}`);
      tg.MainButton.show();
      tg.MainButton.onClick(handleCheckout);
    } else {
      tg.MainButton.hide();
      tg.MainButton.offClick(handleCheckout);
    }

    return () => {
      tg.MainButton.offClick(handleCheckout);
    };
  }, [cart.length, totalQty, handleCheckout, tg]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);

      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>🛍 Каталог</h2>
      <p>В корзине товаров: {totalQty}</p>

      <ProductList onAdd={addToCart} />
    </div>
  );
}

export default App;
