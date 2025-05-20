
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import profile components
import ProfileHeader from "@/components/profile/ProfileHeader";
import InterestsCard from "@/components/profile/InterestsCard";
import OrdersTab from "@/components/profile/OrdersTab";
import AddressesTab from "@/components/profile/AddressesTab";
import WishlistTab from "@/components/profile/WishlistTab";
import GuestInfo from "@/components/profile/GuestInfo";
import StatisticsCard from "@/components/profile/StatisticsCard";

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("orders");

  // Données simulées pour démonstration
  const userInfo = user ? {
    fullName: "Jean Dupont",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue de Paris, 75001 Paris, France",
    memberSince: "Janvier 2023",
    favoriteCategories: ["Électronique", "Ordinateurs", "Accessoires", "Smartphones", "Audio"],
    recentOrders: [
      { id: "ORD-2023-001", date: "12/04/2023", amount: 299.99, status: "Livré" },
      { id: "ORD-2023-002", date: "28/05/2023", amount: 124.50, status: "En transit" },
      { id: "ORD-2023-003", date: "15/06/2023", amount: 549.00, status: "En préparation" }
    ],
    shippingAddresses: [
      { id: 1, name: "Domicile", address: "123 Rue de Paris, 75001 Paris", default: true },
      { id: 2, name: "Bureau", address: "456 Avenue des Champs-Élysées, 75008 Paris", default: false }
    ],
    paymentMethods: [
      { id: 1, type: "Carte", last4: "4242", expiry: "12/25", default: true },
      { id: 2, type: "PayPal", email: "jean.dupont@email.com", default: false }
    ],
    wishlist: [
      { id: "prod-001", name: "MacBook Pro", price: 1299.99 },
      { id: "prod-002", name: "iPhone 14 Pro", price: 999.99 },
      { id: "prod-003", name: "AirPods Pro", price: 249.99 }
    ],
    statistics: {
      totalOrders: 12,
      totalSpent: 3845.75,
      lastPurchase: "15/06/2023",
      favoriteCategory: "Électronique"
    }
  } : null;

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Mon Profil</h1>
      <p className="text-muted-foreground mb-8">Gérez vos informations et préférences</p>
      
      <div className="grid gap-6 md:grid-cols-3">
        {/* Section Informations personnelles */}
        <div className="md:col-span-1 space-y-6">
          {/* User Profile Card */}
          <ProfileHeader userInfo={userInfo} />

          {/* Interests Card - Only show for authenticated users */}
          {isAuthenticated && userInfo && (
            <>
              <InterestsCard categories={userInfo.favoriteCategories} />
              <StatisticsCard 
                totalOrders={userInfo.statistics.totalOrders}
                totalSpent={userInfo.statistics.totalSpent}
                lastPurchase={userInfo.statistics.lastPurchase}
                favoriteCategory={userInfo.statistics.favoriteCategory}
              />
            </>
          )}
        </div>
        
        {/* Section principale avec les tabs */}
        <div className="md:col-span-2">
          {isAuthenticated && userInfo ? (
            <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="space-y-4">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="orders">Commandes</TabsTrigger>
                <TabsTrigger value="addresses">Adresses</TabsTrigger>
                <TabsTrigger value="wishlist">Liste de souhaits</TabsTrigger>
              </TabsList>
              
              <TabsContent value="orders" className="space-y-4">
                <OrdersTab recentOrders={userInfo.recentOrders} />
              </TabsContent>
              
              <TabsContent value="addresses" className="space-y-4">
                <AddressesTab addresses={userInfo.shippingAddresses} />
              </TabsContent>
              
              <TabsContent value="wishlist" className="space-y-4">
                <WishlistTab wishlistItems={userInfo.wishlist} />
              </TabsContent>
            </Tabs>
          ) : (
            <GuestInfo />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
