
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Product } from "@/types";
import { categories } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProductFormProps {
  product?: Product;
  isEditing: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, isEditing }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState<Partial<Product>>(
    product || {
      name: "",
      description: "",
      price: 0,
      category: "",
      imageUrl: "",
      rating: 0,
      inStock: true,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({ ...formData, category: value });
  };

  const handleStockChange = (checked: boolean) => {
    setFormData({ ...formData, inStock: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, we would save the product to the database
    toast({
      title: isEditing ? "Product Updated" : "Product Created",
      description: `${formData.name} has been ${isEditing ? "updated" : "created"} successfully.`,
    });
    
    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Product description"
              rows={4}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <Input
                id="rating"
                name="rating"
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={formData.rating}
                onChange={handleChange}
                placeholder="0.0"
                required
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="inStock"
              checked={formData.inStock}
              onCheckedChange={handleStockChange}
            />
            <Label htmlFor="inStock">In Stock</Label>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" type="button" onClick={() => navigate("/products")}>
              Cancel
            </Button>
            <Button type="submit">
              {isEditing ? "Update Product" : "Create Product"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default ProductForm;
