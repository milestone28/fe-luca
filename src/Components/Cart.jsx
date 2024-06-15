import React from 'react';

export default function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2 flex justify-between">
              <span>
                {item.name} - ${item.price} x {item.quantity}
              </span>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <strong>Total: ${totalPrice}</strong>
      </div>
    </div>
  );
}
