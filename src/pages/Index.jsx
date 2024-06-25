import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Electronics Store</h1>
      <p className="text-lg">Your one-stop shop for all electronic gadgets</p>
      <div className="space-x-4">
        <Link to="/products">
          <Button variant="outline">View Products</Button>
        </Link>
        <Link to="/cart">
          <Button variant="outline">View Cart</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;