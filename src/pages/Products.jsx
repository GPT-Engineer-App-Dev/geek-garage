import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const sampleProducts = [
  { id: 1, name: 'Smartphone', price: '$699', category: 'Electronics' },
  { id: 2, name: 'Laptop', price: '$999', category: 'Electronics' },
  { id: 3, name: 'Smartwatch', price: '$199', category: 'Wearables' },
  { id: 4, name: 'Headphones', price: '$299', category: 'Accessories' },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || product.category === selectedCategory)
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <Input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Select onValueChange={(value) => setSelectedCategory(value)}>
        <SelectTrigger className="w-[180px] mb-4">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All</SelectItem>
          <SelectItem value="Electronics">Electronics</SelectItem>
          <SelectItem value="Wearables">Wearables</SelectItem>
          <SelectItem value="Accessories">Accessories</SelectItem>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
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