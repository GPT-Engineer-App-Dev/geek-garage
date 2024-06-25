import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Electronics Store</Link>
      </div>
      <div className="space-x-4">
        <Link to="/products">
          <Button variant="outline">Products</Button>
        </Link>
        <Link to="/cart">
          <Button variant="outline">Cart</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;