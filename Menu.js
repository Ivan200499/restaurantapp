import React, { useState } from 'react';
import db from './firebase-config';

const Menu = () => {
  const [order, setOrder] = useState([]);
  const [tableNumber, setTableNumber] = useState('');

  const submitOrder = async () => {
    await db.collection('orders').add({
      items: order,
      table: tableNumber
    });
  };

  return (
    <div>
      <h1>Menu</h1>
      <input 
        type="text" 
        placeholder="Numero Tavolo" 
        value={tableNumber} 
        onChange={(e) => setTableNumber(e.target.value)} 
      />
      <button onClick={submitOrder}>Invia Ordine</button>
    </div>
  );
};

export default Menu;
