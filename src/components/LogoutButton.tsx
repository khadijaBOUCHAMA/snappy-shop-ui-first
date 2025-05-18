
import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const LogoutButton: React.FC = () => {
  const { signOut } = useAuth();
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
      onClick={signOut}
    >
      <LogOut className="h-4 w-4 mr-1" />
      Déconnexion
    </Button>
  );
};

export default LogoutButton;
