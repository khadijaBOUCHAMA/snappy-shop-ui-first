
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

type Address = {
  id: number;
  name: string;
  address: string;
  default: boolean;
};

type AddressesTabProps = {
  addresses: Address[];
};

const AddressesTab: React.FC<AddressesTabProps> = ({ addresses }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mes Adresses</CardTitle>
        <CardDescription>Gérez vos adresses de livraison</CardDescription>
      </CardHeader>
      <CardContent>
        {addresses.length > 0 ? (
          <div className="space-y-4">
            {addresses.map((address) => (
              <div key={address.id} className="p-3 border rounded-lg hover:bg-muted/30 transition-colors">
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
  );
};

export default AddressesTab;
