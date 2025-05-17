
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Smartphone Premium",
    description: "Le dernier smartphone avec écran AMOLED 6.5\", processeur octa-core et triple caméra arrière.",
    price: 899.99,
    category: "smartphone",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    inStock: true
  },
  {
    id: "2",
    name: "Casque Audio Sans Fil",
    description: "Casque bluetooth avec réduction de bruit active, autonomie de 30h et qualité sonore exceptionnelle.",
    price: 249.99,
    category: "audio",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
    inStock: true
  },
  {
    id: "3",
    name: "Montre Connectée",
    description: "Suivez votre santé, recevez des notifications et gérez votre agenda avec cette montre étanche.",
    price: 199.99,
    category: "wearable",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww",
    rating: 4.5,
    inStock: true
  },
  {
    id: "4",
    name: "Tablette 10.2\"",
    description: "Tablette polyvalente avec écran Retina, puce A13 Bionic et compatibilité avec Apple Pencil.",
    price: 349.99,
    category: "tablet",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0fGVufDB8fDB8fHww",
    rating: 4.6,
    inStock: true
  },
  {
    id: "5",
    name: "Enceinte Portable Bluetooth",
    description: "Enceinte compacte avec son 360°, résistante à l'eau et autonomie de 12h.",
    price: 129.99,
    category: "audio",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.4,
    inStock: true
  },
  {
    id: "6",
    name: "Ordinateur Portable Ultra-fin",
    description: "Processeur i7, 16Go RAM, SSD 512Go et écran 14\" Full HD avec autonomie de 12h.",
    price: 1199.99,
    category: "laptop",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    rating: 4.9,
    inStock: false
  },
  {
    id: "7",
    name: "Caméra Action 4K",
    description: "Filmez vos aventures en 4K 60fps, étanche jusqu'à 10m avec stabilisation d'image.",
    price: 299.99,
    category: "camera",
    imageUrl: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aW9uJTIwY2FtZXJhfGVufDB8fDB8fHww",
    rating: 4.5,
    inStock: true
  },
  {
    id: "8",
    name: "Écouteurs Sans Fil",
    description: "Écouteurs bluetooth avec réduction de bruit, résistants à l'eau et autonomie de 24h avec le boîtier.",
    price: 149.99,
    category: "audio",
    imageUrl: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
    rating: 4.6,
    inStock: true
  }
];

export const categories = [...new Set(products.map(product => product.category))];
