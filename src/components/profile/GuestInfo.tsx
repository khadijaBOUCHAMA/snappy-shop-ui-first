
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MapPin, UserRound, Settings } from "lucide-react";

const GuestInfo: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Connectez-vous pour accéder à votre profil complet</CardTitle>
        <CardDescription>Découvrez tous les avantages d'un compte utilisateur</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg text-center hover:bg-muted/30 transition-colors">
            <ShoppingBag className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-medium">Suivi de commandes</h3>
            <p className="text-sm text-muted-foreground">Suivez et gérez vos commandes facilement</p>
          </div>
          <div className="p-4 border rounded-lg text-center hover:bg-muted/30 transition-colors">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-medium">Adresses enregistrées</h3>
            <p className="text-sm text-muted-foreground">Enregistrez vos adresses de livraison</p>
          </div>
          <div className="p-4 border rounded-lg text-center hover:bg-muted/30 transition-colors">
            <UserRound className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-medium">Profil personnalisé</h3>
            <p className="text-sm text-muted-foreground">Personnalisez votre expérience d'achat</p>
          </div>
          <div className="p-4 border rounded-lg text-center hover:bg-muted/30 transition-colors">
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
  );
};

export default GuestInfo;
