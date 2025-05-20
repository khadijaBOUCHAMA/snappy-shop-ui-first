
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type InterestsCardProps = {
  categories: string[];
};

const InterestsCard: React.FC<InterestsCardProps> = ({ categories }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Centres d'intérêt</CardTitle>
        <CardDescription>Vos catégories préférées</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary">{category}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InterestsCard;
