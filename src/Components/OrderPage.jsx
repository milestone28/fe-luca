import React from 'react';

const OrderPage = ({ addToCart }) => {
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl mb-4">Order Page</h1>
      <div className="grid grid-cols-1 gap-4">
        {items.map(item => (
          <div key={item.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <p>${item.price}</p>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
