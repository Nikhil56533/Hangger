import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart, Search } from 'lucide-react';

const ClothingStore = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const products = [
    { id: 1, name: 'Classic T-Shirt', price: 29.99, image: '/api/placeholder/200/250' },
    { id: 2, name: 'Denim Jeans', price: 79.99, image: '/api/placeholder/200/250' },
    { id: 3, name: 'Casual Shirt', price: 49.99, image: '/api/placeholder/200/250' },
    { id: 4, name: 'Summer Dress', price: 89.99, image: '/api/placeholder/200/250' }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fashion Store</h1>
          <div className="flex items-center gap-6">
            <Search className="w-6 h-6 text-gray-600" />
            <Heart className="w-6 h-6 text-gray-600" />
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">New Collection Available</h2>
          <p className="text-lg text-gray-300">Discover the latest trends in fashion</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                  >
                    Add to Cart
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothingStore;
