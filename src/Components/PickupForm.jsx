import React, { useState } from 'react';

export default function PickupForm({ setPickupDetails }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPickupDetails({ date, time });
    console.log(date);
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-xl mb-2">Pickup Details</h2>
      <input
        type="date"
        className="p-2 mb-4 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        className="p-2 mb-4 border rounded"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">
        Save Pickup Details
      </button>
    </form>
  );
}
