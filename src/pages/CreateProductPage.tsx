
import React from "react";
import ProductForm from "@/components/ProductForm";

const CreateProductPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
        <ProductForm isEditing={false} />
      </div>
    </div>
  );
};

export default CreateProductPage;
