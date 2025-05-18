
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

// Helper function to clear all auth-related storage items
export const cleanupAuthState = () => {
  // Remove standard auth tokens
  localStorage.removeItem('supabase.auth.token');
  // Remove all Supabase auth keys from localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      localStorage.removeItem(key);
    }
  });
  // Remove from sessionStorage if in use
  Object.keys(sessionStorage || {}).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      sessionStorage.removeItem(key);
    }
  });
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    // Clean up existing auth state
    cleanupAuthState();
    
    // Try to sign out any existing session
    try {
      await supabase.auth.signOut({ scope: 'global' });
    } catch (err) {
      // Continue even if this fails
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    toast({
      title: "Connexion réussie",
      description: "Vous êtes maintenant connecté",
    });
    
    // Force refresh for clean state
    window.location.href = '/';
    
    return { data, error: null };
  } catch (error: any) {
    console.error("Login error:", error);
    
    toast({
      variant: "destructive",
      title: "Erreur de connexion",
      description: error.message || "Impossible de se connecter. Veuillez réessayer.",
    });
    
    return { data: null, error };
  }
};

export const signUpWithEmail = async (email: string, password: string, userData = {}) => {
  try {
    // Clean up existing auth state
    cleanupAuthState();
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });
    
    if (error) throw error;
    
    toast({
      title: "Inscription réussie",
      description: "Votre compte a été créé avec succès",
    });
    
    return { data, error: null };
  } catch (error: any) {
    console.error("Signup error:", error);
    
    toast({
      variant: "destructive",
      title: "Erreur d'inscription",
      description: error.message || "Impossible de créer un compte. Veuillez réessayer.",
    });
    
    return { data: null, error };
  }
};

export const signOut = async () => {
  try {
    // Clean up auth state
    cleanupAuthState();
    
    // Attempt global sign out
    const { error } = await supabase.auth.signOut({ scope: 'global' });
    
    if (error) throw error;
    
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès",
    });
    
    // Force page reload for a clean state
    window.location.href = '/';
    
    return { error: null };
  } catch (error: any) {
    console.error("Signout error:", error);
    
    toast({
      variant: "destructive",
      title: "Erreur de déconnexion",
      description: error.message || "Impossible de se déconnecter. Veuillez réessayer.",
    });
    
    return { error };
  }
};

// Function to check if a user is authenticated
export const isAuthenticated = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    return !!session;
  } catch (error) {
    console.error("Authentication check error:", error);
    return false;
  }
};
