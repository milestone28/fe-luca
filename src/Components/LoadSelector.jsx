import React, { useState } from 'react';

const loaves = [
  { id: 1, name: 'Sourdough', price: 5 },
  { id: 2, name: 'Whole Wheat', price: 4 },
  { id: 3, name: 'Rye', price: 6 },
];

export default function LoafSelector({ addToCart }) {
  const [selectedLoaf, setSelectedLoaf] = useState(loaves[0].id);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const loaf = loaves.find((loaf) => loaf.id === selectedLoaf);
    addToCart({ ...loaf, quantity });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Select Your Loaf</h2>
      <select
        className="p-2 mb-4 border rounded"
        value={selectedLoaf}
        onChange={(e) => setSelectedLoaf(Number(e.target.value))}
      >
        {loaves.map((loaf) => (
          <option key={loaf.id} value={loaf.id}>
            {loaf.name} - ${loaf.price}
          </option>
        ))}
      </select>
      <input
        type="number"
        className="p-2 mb-4 border rounded"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
      />
      <button className="p-2 bg-blue-500 text-white rounded" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
