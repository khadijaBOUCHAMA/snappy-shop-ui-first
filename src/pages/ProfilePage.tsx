
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Mail, Phone, ShoppingBag, UserRound, Settings } from "lucide-react";

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, signOut } = useAuth();

  // Données simulées pour démonstration
  const userInfo = user ? {
    fullName: "Jean Dupont",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue de Paris, 75001 Paris, France",
    memberSince: "Janvier 2023",
    favoriteCategories: ["Électronique", "Ordinateurs", "Accessoires"],
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
    ]
  } : null;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Mon Profil</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        {/* Section Informations personnelles */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user?.user_metadata?.avatar_url || ""} alt="Photo de profil" />
                <AvatarFallback className="text-xl bg-shop-blue text-white">
                  {userInfo?.fullName?.charAt(0) || user?.email?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{userInfo?.fullName || "Utilisateur"}</CardTitle>
                <CardDescription>
                  {isAuthenticated ? (
                    <Badge variant="outline" className="mt-1">Client fidèle</Badge>
                  ) : (
                    "Visiteur"
                  )}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {isAuthenticated && user ? (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{user.email}</span>
                    </div>
                    
                    {userInfo?.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{userInfo.phone}</span>
                      </div>
                    )}
                    
                    {userInfo?.address && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{userInfo.address}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Membre depuis {userInfo?.memberSince || new Date(user.created_at || '').toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">ID Utilisateur</h3>
                    <p className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto">{user.id}</p>
                  </div>
                  
                  <div className="pt-2 flex flex-col gap-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="/profile/edit">
                        <Settings className="h-4 w-4 mr-2" />
                        Modifier mon profil
                      </a>
                    </Button>
                    
                    <Button variant="destructive" onClick={signOut} className="w-full">
                      Déconnexion
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <UserRound className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  <p className="mb-4">Vous n'êtes pas connecté</p>
                  <Button asChild className="w-full">
                    <a href="/login">Se connecter</a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {isAuthenticated && (
            <Card>
              <CardHeader>
                <CardTitle>Centres d'intérêt</CardTitle>
                <CardDescription>Vos catégories préférées</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userInfo?.favoriteCategories?.map((category, index) => (
                    <Badge key={index} variant="secondary">{category}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Section principale avec les tabs */}
        <div className="md:col-span-2">
          {isAuthenticated ? (
            <Tabs defaultValue="orders">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="orders">Commandes</TabsTrigger>
                <TabsTrigger value="addresses">Adresses</TabsTrigger>
                <TabsTrigger value="wishlist">Liste de souhaits</TabsTrigger>
              </TabsList>
              
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Mes Commandes</CardTitle>
                        <CardDescription>Historique de vos commandes récentes</CardDescription>
                      </div>
                      <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    {userInfo?.recentOrders && userInfo.recentOrders.length > 0 ? (
                      <div className="space-y-4">
                        {userInfo.recentOrders.map((order) => (
                          <div key={order.id} className="flex justify-between items-center p-3 border rounded-lg">
                            <div>
                              <p className="font-medium">{order.id}</p>
                              <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                            <div>
                              <p className="text-right font-medium">{order.amount.toFixed(2)} €</p>
                              <Badge 
                                variant={
                                  order.status === "Livré" ? "default" : 
                                  order.status === "En transit" ? "secondary" : 
                                  "outline"
                                }
                                className="ml-auto mt-1"
                              >
                                {order.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                        
                        <Button variant="outline" className="w-full mt-2" asChild>
                          <a href="/orders">Voir toutes mes commandes</a>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                        <p>Aucune commande récente</p>
                        <Button variant="outline" className="mt-4" asChild>
                          <a href="/products">Découvrir nos produits</a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="addresses">
                <Card>
                  <CardHeader>
                    <CardTitle>Mes Adresses</CardTitle>
                    <CardDescription>Gérez vos adresses de livraison</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {userInfo?.shippingAddresses && userInfo.shippingAddresses.length > 0 ? (
                      <div className="space-y-4">
                        {userInfo.shippingAddresses.map((address) => (
                          <div key={address.id} className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <p className="font-medium">{address.name}</p>
                              {address.default && (
                                <Badge variant="outline">Par défaut</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{address.address}</p>
                          </div>
                        ))}
                        
                        <Button variant="outline" className="w-full mt-2">
                          Ajouter une adresse
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                        <p>Aucune adresse enregistrée</p>
                        <Button variant="outline" className="mt-4">
                          Ajouter une adresse
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="wishlist">
                <Card>
                  <CardHeader>
                    <CardTitle>Ma Liste de Souhaits</CardTitle>
                    <CardDescription>Produits que vous avez marqués comme favoris</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {userInfo?.wishlist && userInfo.wishlist.length > 0 ? (
                      <div className="space-y-3">
                        {userInfo.wishlist.map((item) => (
                          <div key={item.id} className="flex justify-between items-center p-3 border rounded-lg">
                            <p className="font-medium">{item.name}</p>
                            <div className="flex items-center gap-3">
                              <p>{item.price.toFixed(2)} €</p>
                              <Button size="sm">Acheter</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                        <p>Votre liste de souhaits est vide</p>
                        <Button variant="outline" className="mt-4" asChild>
                          <a href="/products">Découvrir nos produits</a>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Connectez-vous pour accéder à votre profil complet</CardTitle>
                <CardDescription>Découvrez tous les avantages d'un compte utilisateur</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg text-center">
                    <ShoppingBag className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="font-medium">Suivi de commandes</h3>
                    <p className="text-sm text-muted-foreground">Suivez et gérez vos commandes facilement</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="font-medium">Adresses enregistrées</h3>
                    <p className="text-sm text-muted-foreground">Enregistrez vos adresses de livraison</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <UserRound className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="font-medium">Profil personnalisé</h3>
                    <p className="text-sm text-muted-foreground">Personnalisez votre expérience d'achat</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <Settings className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="font-medium">Préférences</h3>
                    <p className="text-sm text-muted-foreground">Définissez vos préférences de communication</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1" asChild>
                    <a href="/login">Se connecter</a>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href="/signup">Créer un compte</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
