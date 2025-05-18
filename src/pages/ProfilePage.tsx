
import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Mon Profil</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Mon Compte</CardTitle>
              <CardDescription>Gérez les informations de votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 dark:text-gray-400">Email</h3>
                <p>{user.email}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-sm text-gray-500 dark:text-gray-400">ID Utilisateur</h3>
                <p className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">{user.id}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-sm text-gray-500 dark:text-gray-400">Dernière connexion</h3>
                <p>{new Date(user.last_sign_in_at || '').toLocaleString()}</p>
              </div>
              
              <Button variant="destructive" onClick={signOut} className="w-full">
                Déconnexion
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Mes Commandes</CardTitle>
              <CardDescription>Historique de vos commandes récentes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                Aucune commande récente
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
