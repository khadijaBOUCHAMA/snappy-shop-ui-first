
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

type WishlistItem = {
  id: string;
  name: string;
  price: number;
};

type WishlistTabProps = {
  wishlistItems: WishlistItem[];
};

const WishlistTab: React.FC<WishlistTabProps> = ({ wishlistItems }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ma Liste de Souhaits</CardTitle>
        <CardDescription>Produits que vous avez marqués comme favoris</CardDescription>
      </CardHeader>
      <CardContent>
        {wishlistItems.length > 0 ? (
          <div className="space-y-3">
            {wishlistItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 border rounded-lg hover:bg-muted/30 transition-colors">
                <p className="font-medium truncate max-w-[50%]">{item.name}</p>
                <div className="flex items-center gap-3">
                  <p className="text-sm tabular-nums">{item.price.toFixed(2)} €</p>
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
  );
};

export default WishlistTab;
