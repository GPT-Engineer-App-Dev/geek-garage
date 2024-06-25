import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Smartphone', price: '$699', quantity: 1 },
    { id: 2, name: 'Laptop', price: '$999', quantity: 1 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <Button variant="outline" className="mt-2">Remove</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/products">
          <Button variant="outline">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;