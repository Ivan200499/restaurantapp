import React, { useState, useEffect } from 'react';
import db from './firebase-config';

const StaffApp = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const snapshot = await db.collection('orders').get();
      const data = snapshot.docs.map(doc => doc.data());
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Ordini</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            Tavolo {order.table}: {order.items.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffApp;
