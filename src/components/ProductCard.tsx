
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);

  return (
    <Link to={`/products/${product.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Out of Stock
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-shop-black text-sm line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1 text-amber-500">
              <span>★</span>
              <span className="text-xs text-shop-darkGray">{product.rating}</span>
            </div>
          </div>
          <p className="text-shop-darkGray text-xs mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-shop-black">{formattedPrice}</span>
            <Button 
              size="sm" 
              variant="outline"
              className="text-xs p-1 h-8"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
