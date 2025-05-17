
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ChevronRight } from "lucide-react";

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-shop-lightGray py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-shop-black">
                Shop the Best Products for Your Lifestyle
              </h1>
              <p className="text-lg text-shop-darkGray">
                Discover high-quality products at great prices. Fast shipping and excellent customer service.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-shop-blue hover:bg-blue-700">
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" 
                alt="Shopping Experience" 
                className="rounded-lg shadow-lg w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link 
              to="/products" 
              className="text-shop-blue flex items-center hover:underline"
            >
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-shop-lightGray">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/products?category=clothing" className="relative overflow-hidden rounded-lg group">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-shop-black group-hover:text-shop-blue transition-colors">Clothing</span>
              </div>
            </Link>
            <Link to="/products?category=electronics" className="relative overflow-hidden rounded-lg group">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-shop-black group-hover:text-shop-blue transition-colors">Electronics</span>
              </div>
            </Link>
            <Link to="/products?category=accessories" className="relative overflow-hidden rounded-lg group">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-shop-black group-hover:text-shop-blue transition-colors">Accessories</span>
              </div>
            </Link>
            <Link to="/products?category=home" className="relative overflow-hidden rounded-lg group">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-shop-black group-hover:text-shop-blue transition-colors">Home</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-sm border text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-shop-darkGray mb-6">
              Get updates on new products and exclusive offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue focus:border-transparent"
                required
              />
              <Button className="bg-shop-blue hover:bg-blue-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
