import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ELECTRO</h3>
            <p className="text-shop-darkGray text-sm mb-4">
              Your one-stop shop for high-quality electronics at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-shop-blue hover:text-shop-darkGray" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-shop-blue hover:text-shop-darkGray" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-shop-blue hover:text-shop-darkGray" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-shop-darkGray">
              <li>
                <Link to="/products" className="hover:text-shop-blue">All Products</Link>
              </li>
              <li>
                <Link to="/products?category=clothing" className="hover:text-shop-blue">Clothing</Link>
              </li>
              <li>
                <Link to="/products?category=electronics" className="hover:text-shop-blue">Electronics</Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="hover:text-shop-blue">Accessories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-shop-darkGray">
              <li>
                <Link to="/about" className="hover:text-shop-blue">Contact Us</Link>
              </li>
              <li>
                <a href="#" className="hover:text-shop-blue">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-shop-blue">Returns & Refunds</a>
              </li>
              <li>
                <a href="#" className="hover:text-shop-blue">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-shop-darkGray text-sm mb-4">
              Subscribe to our newsletter for updates on new products and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-shop-blue focus:border-transparent flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-shop-blue hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-shop-darkGray text-sm">
          <p>&copy; {currentYear} ELECTRO. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-shop-blue">Privacy Policy</a>
            <a href="#" className="hover:text-shop-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
