
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type StatisticsCardProps = {
  totalOrders: number;
  totalSpent: number;
  lastPurchase: string;
  favoriteCategory: string;
};

const StatisticsCard: React.FC<StatisticsCardProps> = ({ 
  totalOrders, 
  totalSpent, 
  lastPurchase, 
  favoriteCategory 
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4">Statistiques</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableHead className="w-[180px]">Total de commandes</TableHead>
              <TableCell className="font-medium">{totalOrders}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Total dépensé</TableHead>
              <TableCell className="font-medium">{totalSpent.toFixed(2)} €</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Dernier achat</TableHead>
              <TableCell className="font-medium">{lastPurchase}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead>Catégorie préférée</TableHead>
              <TableCell className="font-medium">{favoriteCategory}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
