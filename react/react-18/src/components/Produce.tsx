import produce from "immer";
import { useState } from "react";

function ProduceApp() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, name: "T-Shirt", quantity: 2, price: 9.99 },
      { id: 2, name: "Pants", quantity: 1, price: 14.99 },
    ],
  });

  const updateQuantity = (id: number, quantity: number) => {
    setCart(
      produce(cart, (draft) => {
        const item = draft.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
      })
    );
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={() => updateQuantity(1, 3)}>Update Quantity</button>
    </div>
  );
}

export default ProduceApp;
