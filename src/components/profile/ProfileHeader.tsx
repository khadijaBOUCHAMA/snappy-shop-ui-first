
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, Settings, UserRound } from "lucide-react";

type ProfileHeaderProps = {
  userInfo: any;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userInfo }) => {
  const { user, isAuthenticated, signOut } = useAuth();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user?.user_metadata?.avatar_url || ""} alt="Photo de profil" />
          <AvatarFallback className="text-2xl bg-shop-blue text-white">
            {userInfo?.fullName?.charAt(0) || user?.email?.charAt(0)?.toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl">{userInfo?.fullName || "Utilisateur"}</CardTitle>
          <div className="mt-1.5">
            {isAuthenticated ? (
              <Badge variant="outline" className="bg-green-100 dark:bg-green-900/20">Client fidèle</Badge>
            ) : (
              "Visiteur"
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isAuthenticated && user ? (
          <>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm md:text-base">{user.email}</span>
              </div>
              
              {userInfo?.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm md:text-base">{userInfo.phone}</span>
                </div>
              )}
              
              {userInfo?.address && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm md:text-base truncate">{userInfo.address}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm md:text-base">Membre depuis {userInfo?.memberSince || new Date(user.created_at || '').toLocaleDateString()}</span>
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
  );
};

export default ProfileHeader;
