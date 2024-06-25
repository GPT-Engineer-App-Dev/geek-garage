import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const sampleProducts = [
  { id: 1, name: 'Smartphone', price: '$699' },
  { id: 2, name: 'Laptop', price: '$999' },
  { id: 3, name: 'Smartwatch', price: '$199' },
];

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sampleProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.price}</p>
              <Button variant="outline" className="mt-2">Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;