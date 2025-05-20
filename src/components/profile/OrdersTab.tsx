
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";

type Order = {
  id: string;
  date: string;
  amount: number;
  status: string;
};

type OrdersTabProps = {
  recentOrders: Order[];
};

const OrdersTab: React.FC<OrdersTabProps> = ({ recentOrders }) => {
  return (
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
        {recentOrders.length > 0 ? (
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex justify-between items-center p-3 border rounded-lg hover:bg-muted/30 transition-colors">
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
  );
};

export default OrdersTab;
