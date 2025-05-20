
import React from "react";
import ProductForm from "@/components/ProductForm";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";

const EditProductPage: React.FC = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
          <p>The product you are trying to edit does not exist.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Edit Product: {product.name}</h1>
        <ProductForm product={product} isEditing={true} />
      </div>
    </div>
  );
};

export default EditProductPage;
