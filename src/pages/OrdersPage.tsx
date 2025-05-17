
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package, Truck, CheckCheck } from "lucide-react";

const OrdersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample orders
  const orders = [
    {
      id: "ORD7834X",
      date: "May 15, 2024",
      status: "delivered",
      items: 3,
      total: 129.97
    },
    {
      id: "ORD6529Y",
      date: "May 10, 2024",
      status: "shipped",
      items: 2,
      total: 79.98
    },
    {
      id: "ORD5173Z",
      date: "May 5, 2024",
      status: "processing",
      items: 1,
      total: 49.99
    }
  ];
  
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Package className="h-5 w-5 text-amber-500" />;
      case "shipped":
        return <Truck className="h-5 w-5 text-blue-500" />;
      case "delivered":
        return <CheckCheck className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "processing":
        return "Processing";
      case "shipped":
        return "Shipped";
      case "delivered":
        return "Delivered";
      default:
        return status;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
      
      <div className="flex mb-6">
        <div className="relative w-full max-w-md">
          <Input
            type="search"
            placeholder="Search orders by ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>
      
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
          <h2 className="text-xl font-bold mb-2">No Orders Found</h2>
          <p className="text-shop-darkGray mb-6">
            {searchQuery ? "No orders match your search criteria." : "You haven't placed any orders yet."}
          </p>
          <Button asChild className="bg-shop-blue hover:bg-blue-700">
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-shop-lightGray">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-shop-black">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-shop-black">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-shop-black">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-shop-black">Items</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-shop-black">Total</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-shop-black">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-shop-darkGray">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center">
                        {getStatusIcon(order.status)}
                        <span className="ml-2">{getStatusText(order.status)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-shop-darkGray">
                      {order.items} {order.items === 1 ? 'item' : 'items'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-shop-darkGray">
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.total)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/order/${order.id}`}>View Details</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
