
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCheck, Truck, Package } from "lucide-react";

const OrderPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [status, setStatus] = useState<'processing' | 'shipped' | 'delivered'>('processing');
  
  // Simulate order status changing over time
  useEffect(() => {
    // In a real app, you would fetch the order status from an API
    const timer1 = setTimeout(() => {
      setStatus('shipped');
    }, 3000);
    
    const timer2 = setTimeout(() => {
      setStatus('delivered');
    }, 6000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [orderId]);
  
  // Format the order date (today)
  const orderDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date());
  
  // Expected delivery date (7 days from now)
  const deliveryDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold">Order #{orderId}</h1>
              <p className="text-shop-darkGray">Placed on {orderDate}</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
          
          <Separator className="my-6" />
          
          {/* Order Status */}
          <div className="mb-8">
            <h2 className="font-semibold mb-4">Order Status</h2>
            
            <div className="relative">
              {/* Progress Bar */}
              <div className="h-1 bg-gray-200 absolute top-5 left-0 right-0 z-0">
                <div 
                  className={`h-full bg-shop-blue transition-all duration-1000 ease-out`}
                  style={{ 
                    width: status === 'processing' ? '0%' : status === 'shipped' ? '50%' : '100%'
                  }}
                ></div>
              </div>
              
              {/* Status Steps */}
              <div className="flex justify-between relative z-10">
                <div className="text-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    status === 'processing' ? 'bg-shop-blue text-white' : 'bg-shop-blue text-white'
                  }`}>
                    <Package className="h-5 w-5" />
                  </div>
                  <p className="text-sm">Processing</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    status === 'processing' ? 'bg-gray-200 text-gray-400' : 'bg-shop-blue text-white'
                  }`}>
                    <Truck className="h-5 w-5" />
                  </div>
                  <p className="text-sm">Shipped</p>
                </div>
                
                <div className="text-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    status === 'delivered' ? 'bg-shop-blue text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    <CheckCheck className="h-5 w-5" />
                  </div>
                  <p className="text-sm">Delivered</p>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-center">
              {status === 'processing' && "We're preparing your order for shipment."}
              {status === 'shipped' && "Your order is on the way!"}
              {status === 'delivered' && "Your order has been delivered. Enjoy!"}
            </p>
          </div>
          
          <Separator className="my-6" />
          
          {/* Order Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-semibold mb-4">Shipping Information</h2>
              <p className="text-shop-darkGray mb-1">John Doe</p>
              <p className="text-shop-darkGray mb-1">123 Main St</p>
              <p className="text-shop-darkGray mb-1">New York, NY 10001</p>
              <p className="text-shop-darkGray">United States</p>
              
              <div className="mt-4">
                <h3 className="font-medium">Estimated Delivery</h3>
                <p className="text-shop-darkGray">{deliveryDate}</p>
              </div>
            </div>
            
            <div>
              <h2 className="font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$129.97</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$129.97</span>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          {/* Need Help */}
          <div className="text-center">
            <h2 className="font-semibold mb-2">Need Help?</h2>
            <p className="text-shop-darkGray mb-4">
              If you have any questions about your order, please contact our customer service.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
