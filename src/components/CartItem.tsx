
import React from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { CartItem as CartItemType } from "@/types";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);

  const formattedSubtotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price * quantity);

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="shrink-0">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-20 h-20 object-cover rounded"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-grow min-w-0">
        <Link to={`/products/${product.id}`}>
          <h3 className="font-medium truncate">{product.name}</h3>
        </Link>
        <p className="text-sm text-shop-darkGray">{formattedPrice}</p>
      </div>

      {/* Quantity Controls */}
      <div className="w-24">
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="text-center"
        />
      </div>

      {/* Subtotal */}
      <div className="hidden sm:block w-24 font-medium text-right">
        {formattedSubtotal}
      </div>

      {/* Remove Button */}
      <Button 
        variant="ghost" 
        size="icon"
        className="text-gray-400 hover:text-red-500"
        onClick={() => removeFromCart(product.id)} 
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
