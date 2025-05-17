
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, ArrowLeft } from "lucide-react";

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate("/products")}>
          Back to Products
        </Button>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-4 flex items-center text-shop-darkGray hover:text-shop-black"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center text-amber-500">
              <span className="text-lg">★</span>
              <span className="ml-1 text-shop-darkGray">{product.rating}</span>
            </div>
          </div>

          <div className="text-2xl font-bold text-shop-blue">
            {formattedPrice}
          </div>

          <div className="border-t border-b py-4">
            <p className="text-shop-darkGray">{product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Category:</h3>
            <div className="inline-block bg-shop-lightGray px-3 py-1 rounded-full text-sm capitalize">
              {product.category}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Availability:</h3>
            <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <Button 
            size="lg" 
            className="w-full bg-shop-blue hover:bg-blue-700 mt-6"
            disabled={!product.inStock}
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
