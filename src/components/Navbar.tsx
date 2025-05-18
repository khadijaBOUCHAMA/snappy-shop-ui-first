
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X, Search, LogIn, Sun, Moon, UserRound } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import LogoutButton from "./LogoutButton";

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const { theme, setTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-shop-blue">
            ELECTRO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-shop-blue">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-shop-blue">
              Products
            </Link>
            <Link to="/about" className="text-foreground hover:text-shop-blue">
              About
            </Link>
            <Link to="/orders" className="text-foreground hover:text-shop-blue">
              Orders
            </Link>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-64 focus:border-shop-blue"
              />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* Search Icon - Mobile */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-shop-blue text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Profile */}
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <UserRound className="h-5 w-5" />
              </Button>
            </Link>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex space-x-2">
              {isAuthenticated ? (
                <LogoutButton />
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/login">
                      <LogIn className="h-4 w-4 mr-1" />
                      Connexion
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/signup">
                      Inscription
                    </Link>
                  </Button>
                </>
              )}
            </div>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden py-2 animate-fade-in">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 animate-fade-in bg-background">
            <Link 
              to="/" 
              className="block px-2 py-1 text-foreground hover:text-shop-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-2 py-1 text-foreground hover:text-shop-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="block px-2 py-1 text-foreground hover:text-shop-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/orders" 
              className="block px-2 py-1 text-foreground hover:text-shop-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Orders
            </Link>
            <Link 
              to="/profile" 
              className="block px-2 py-1 text-foreground hover:text-shop-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <div className="flex space-x-2 px-2 py-1">
              {isAuthenticated ? (
                <LogoutButton />
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                      Connexion
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                      Inscription
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
