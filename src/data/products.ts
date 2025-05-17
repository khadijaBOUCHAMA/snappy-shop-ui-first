
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "A comfortable, breathable cotton t-shirt perfect for everyday wear.",
    price: 19.99,
    category: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
    rating: 4.5,
    inStock: true
  },
  {
    id: "2",
    name: "Wireless Bluetooth Headphones",
    description: "High-quality sound with noise cancellation and comfortable fit for all-day use.",
    price: 79.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    inStock: true
  },
  {
    id: "3",
    name: "Minimalist Stainless Steel Watch",
    description: "Elegant timepiece with a durable stainless steel band and water-resistant features.",
    price: 129.99,
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww",
    rating: 4.7,
    inStock: true
  },
  {
    id: "4",
    name: "Organic Cotton Denim Jeans",
    description: "Sustainable, comfortable jeans made from organic cotton with a classic fit.",
    price: 59.99,
    category: "clothing",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amVhbnN8ZW58MHx8MHx8fDA%3D",
    rating: 4.3,
    inStock: true
  },
  {
    id: "5",
    name: "Laptop Backpack",
    description: "Spacious backpack with padded laptop compartment and multiple organizational pockets.",
    price: 49.99,
    category: "bags",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    rating: 4.6,
    inStock: true
  },
  {
    id: "6",
    name: "Smart Fitness Tracker",
    description: "Track your activity, sleep, and heart rate with this sleek and waterproof fitness band.",
    price: 89.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    rating: 4.4,
    inStock: false
  },
  {
    id: "7",
    name: "Ceramic Coffee Mug Set",
    description: "Set of 4 handcrafted ceramic mugs in assorted colors, perfect for your morning coffee.",
    price: 34.99,
    category: "home",
    imageUrl: "https://images.unsplash.com/photo-1572490362434-f3bc9c3f2e0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMG11Z3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.9,
    inStock: true
  },
  {
    id: "8",
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots and a billfold compartment.",
    price: 39.99,
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fHww",
    rating: 4.2,
    inStock: true
  }
];

export const categories = [...new Set(products.map(product => product.category))];
