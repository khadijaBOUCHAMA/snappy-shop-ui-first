
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Product } from "@/types";
import { categories } from "@/data/products";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showInStock, setShowInStock] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    let result = products;

    // Filter by search query
    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }

    // Filter by in stock
    if (showInStock) {
      result = result.filter(product => product.inStock);
    }

    setFilteredProducts(result);
  }, [products, searchQuery, selectedCategories, showInStock]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search */}
      <div className="mb-6 relative">
        <Input
          type="search"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pr-10"
        />
        <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
      </div>

      {/* Mobile Filter Toggle */}
      <Button
        variant="outline"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className="flex w-full justify-between items-center mb-4 md:hidden"
      >
        Filters
        {filtersOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters */}
        <aside className={`${filtersOpen || 'hidden'} md:block`}>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-bold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={category} 
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={category} className="text-sm capitalize cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
            </div>

            <div className="border-t mt-4 pt-4">
              <h3 className="font-bold mb-3">Availability</h3>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="inStock" 
                  checked={showInStock}
                  onCheckedChange={() => setShowInStock(!showInStock)}
                />
                <label htmlFor="inStock" className="text-sm cursor-pointer">
                  In stock only
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
