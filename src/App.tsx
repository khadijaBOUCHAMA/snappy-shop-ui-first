
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";
import OrdersPage from "./pages/OrdersPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";

const queryClient = new QueryClient();

const AppWithProviders = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow bg-background">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:productId" element={<ProductDetailPage />} />
                  <Route path="/products/create" element={<CreateProductPage />} />
                  <Route path="/products/edit/:productId" element={<EditProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order/:orderId" element={<OrderPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

const App = () => {
  return (
    <BrowserRouter>
      <AppWithProviders />
    </BrowserRouter>
  );
};

export default App;
