import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About ELECTRO</h1>
        
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-8">
          <div className="aspect-video w-full">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGUtY29tbWVyY2V8ZW58MHx8MHx8fDA%3D" 
              alt="ELECTRO Team" 
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-shop-darkGray mb-4">
              ELECTRO was founded in 2023 with a simple mission: to provide high-quality electronic products at affordable prices with exceptional customer service. We believe that online shopping should be easy, convenient, and enjoyable.
            </p>
            <p className="text-shop-darkGray">
              Our team of dedicated professionals works tirelessly to source the best products, ensure fast shipping, and provide excellent customer support. We're committed to creating a positive shopping experience for all our customers.
            </p>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Why Choose ELECTRO</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-shop-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-shop-blue"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Quality Products</h3>
              <p className="text-shop-darkGray text-sm">
                We carefully select every product in our store to ensure high quality and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-shop-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-shop-blue"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <rect width="4" height="4" x="10" y="10" />
                  <path d="m16 16-2-2" />
                  <path d="M4 12h4" />
                  <path d="M12 4v4" />
                  <path d="M20 12h-4" />
                  <path d="M12 20v-4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Fast Shipping</h3>
              <p className="text-shop-darkGray text-sm">
                We process orders quickly and provide fast shipping options to get your products to you as soon as possible.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="bg-shop-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-shop-blue"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Secure Payments</h3>
              <p className="text-shop-darkGray text-sm">
                Your payment information is always secure with our encrypted checkout process and trusted payment providers.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-shop-darkGray mb-6">
            Have questions or feedback? We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
          </p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue focus:border-transparent"
                required
              ></textarea>
            </div>
            <Button 
              type="submit"
              className="bg-shop-blue hover:bg-blue-700"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
