'use client';
import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'مرتبة فاخرة',
    price: 8500,
    image: '/images/mattress.jpg',
  },
  {
    id: 2,
    name: 'خددية مريحة',
    price: 450,
    image: '/images/pillow.jpg',
  },
];

export default function ProductsPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`تم إضافة ${product.name} إلى السلة`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>المنتجات</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>السعر: {product.price} جنيه</p>
            <button onClick={() => addToCart(product)}>أضف للسلة</button>
          </div>
        ))}
      </div>
    </div>
  );
}
