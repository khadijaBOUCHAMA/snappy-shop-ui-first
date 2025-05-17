
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

const CartPage: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();

  const formattedTotalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalPrice);

  // Calculate shipping cost (free if over $50, otherwise $5.99)
  const shippingCost = totalPrice > 50 ? 0 : 5.99;
  const formattedShippingCost = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(shippingCost);

  // Calculate final total with shipping
  const finalTotal = totalPrice + shippingCost;
  const formattedFinalTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(finalTotal);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="mb-8 text-shop-darkGray">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Button asChild className="bg-shop-blue hover:bg-blue-700">
          <Link to="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="hidden sm:flex justify-between mb-2 text-sm text-gray-500 font-medium">
              <div className="flex-grow">Product</div>
              <div className="w-24 text-center">Quantity</div>
              <div className="w-24 text-right">Subtotal</div>
              <div className="w-10"></div>
            </div>

            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}

            <div className="flex justify-between mt-4 pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="text-gray-500 hover:text-red-500 hover:border-red-500"
              >
                Clear Cart
              </Button>
              <Button asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-2 text-shop-darkGray">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formattedTotalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shippingCost === 0 ? 'Free' : formattedShippingCost}
                </span>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-bold text-black text-lg">
                <span>Total</span>
                <span>{formattedFinalTotal}</span>
              </div>
              
              <p className="text-xs mt-2">
                {totalPrice < 50 && (
                  <span className="text-shop-blue">
                    Add {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(50 - totalPrice)} more for free shipping!
                  </span>
                )}
              </p>
            </div>
            
            <Button 
              className="w-full mt-6 bg-shop-blue hover:bg-blue-700"
              asChild
            >
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
