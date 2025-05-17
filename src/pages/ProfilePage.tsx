import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRound, Settings, Package, LogIn } from "lucide-react";

const ProfilePage: React.FC = () => {
  // Normalement on récupérerait ces données depuis une API ou un état global
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "Jan 2023",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profil Utilisateur</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Membre depuis {user.joinDate}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <LogIn className="mr-2 h-4 w-4" /> Se déconnecter
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">
                  <UserRound className="mr-2 h-4 w-4" /> Profil
                </TabsTrigger>
                <TabsTrigger value="orders">
                  <Package className="mr-2 h-4 w-4" /> Commandes
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="mr-2 h-4 w-4" /> Paramètres
                </TabsTrigger>
              </TabsList>
              
              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations personnelles</CardTitle>
                    <CardDescription>
                      Gérez vos informations personnelles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
                          <input
                            id="firstName"
                            type="text"
                            defaultValue="John"
                            className="w-full p-2 border rounded-md bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
                          <input
                            id="lastName"
                            type="text"
                            defaultValue="Doe"
                            className="w-full p-2 border rounded-md bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <input
                            id="email"
                            type="email"
                            defaultValue="john.doe@example.com"
                            className="w-full p-2 border rounded-md bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                          <input
                            id="phone"
                            type="tel"
                            defaultValue="+33 6 12 34 56 78"
                            className="w-full p-2 border rounded-md bg-background"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button>Enregistrer les modifications</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Historique des commandes</CardTitle>
                    <CardDescription>
                      Consultez vos commandes récentes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">#ORD-2023-001</p>
                            <p className="text-sm text-muted-foreground">12/05/2023</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">129,99 €</p>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Livré</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">#ORD-2023-002</p>
                            <p className="text-sm text-muted-foreground">24/04/2023</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">79,99 €</p>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Livré</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-md">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">#ORD-2023-003</p>
                            <p className="text-sm text-muted-foreground">05/03/2023</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">299,99 €</p>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Livré</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Voir toutes les commandes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Settings Tab */}
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Paramètres du compte</CardTitle>
                    <CardDescription>
                      Gérez vos préférences et sécurité
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Changer de mot de passe</h3>
                      <div className="grid gap-2">
                        <div className="space-y-2">
                          <label htmlFor="currentPassword" className="text-sm font-medium">Mot de passe actuel</label>
                          <input
                            id="currentPassword"
                            type="password"
                            className="w-full p-2 border rounded-md bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="newPassword" className="text-sm font-medium">Nouveau mot de passe</label>
                          <input
                            id="newPassword"
                            type="password"
                            className="w-full p-2 border rounded-md bg-background"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="confirmPassword" className="text-sm font-medium">Confirmer le mot de passe</label>
                          <input
                            id="confirmPassword"
                            type="password"
                            className="w-full p-2 border rounded-md bg-background"
                          />
                        </div>
                        <Button className="w-full md:w-auto">Mettre à jour le mot de passe</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Notifications</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Notifications par email</p>
                          <p className="text-sm text-muted-foreground">Recevez des emails sur vos commandes</p>
                        </div>
                        <div>
                          <input type="checkbox" id="emailNotifs" defaultChecked className="toggle" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Marketing</p>
                          <p className="text-sm text-muted-foreground">Recevez nos offres promotionnelles</p>
                        </div>
                        <div>
                          <input type="checkbox" id="marketingEmails" className="toggle" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Annuler</Button>
                    <Button>Enregistrer les modifications</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
