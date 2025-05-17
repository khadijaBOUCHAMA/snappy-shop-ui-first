
import React from "react";
import ProductList from "@/components/ProductList";
import { products } from "@/data/products";

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
