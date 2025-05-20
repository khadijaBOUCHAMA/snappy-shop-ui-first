
import React from "react";
import ProductList from "@/components/ProductList";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const ProductsPage: React.FC = () => {
  const { user } = useAuth();
  const isAdmin = user?.email?.endsWith("@admin.com"); // Simple admin check based on email domain
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">All Products</h1>
          
          {isAdmin && (
            <Link to="/products/create">
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </Link>
          )}
        </div>
        
        <ProductList products={products} isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default ProductsPage;
