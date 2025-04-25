'use client';

import { useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>سلة المشتريات</h1>
      {cartItems.length === 0 ? (
        <p>السلة فارغة حالياً.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} جنيه
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
