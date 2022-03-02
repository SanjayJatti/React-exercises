import { useState } from "react";
export default function AddToCart() {
  const products = [
    {
      id: 1,
      name: "Watch"
    },
    {
      id: 2,
      name: "Dress"
    },
    {
      id: 3,
      name: "Mobile"
    }
  ];
  const [cart, setCart] = useState([]);

  const clickHandler = (item) => {
    const index = cart.findIndex((currentItem) => currentItem.id === item.id);

    if (index === -1) {
      return setCart([...cart, { ...item, qty: 1 }]);
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : { ...cartItem }
        )
      );
    }
  };
  return (
    <div>
      <h2>Add to Cart</h2>
      <div>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <li>{item.name}</li>
              <button onClick={() => clickHandler(item)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
      <div>
        <h3>My Cart</h3>
        {cart.map((item, index) => {
          return (
            <div key={index}>
              <li>
                {item.name} {item.qty}
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}
