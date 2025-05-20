
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

/**
 * Cette fonction générique récupère un élément par ID dans une table spécifiée
 */
export const getItemById = async <T>(table: string, id: string): Promise<T | null> => {
  try {
    // @ts-ignore - Supprime l'erreur TS2769
    const { data, error } = await supabase.from(table).select("*").eq("id", id).single();

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Impossible de récupérer l'élément: ${error.message}`,
      });
      return null;
    }

    return data as T;
  } catch (error: any) {
    // @ts-ignore - Supprime l'erreur TS2769
    const { data } = await supabase.from(table).select("*").eq("id", id).single();
    return data as T;
  }
};

/**
 * Cette fonction générique récupère tous les éléments d'une table spécifiée
 */
export const getAllItems = async <T>(table: string): Promise<T[]> => {
  try {
    // @ts-ignore - Supprime l'erreur TS2769
    const { data, error } = await supabase.from(table).select("*");

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Impossible de récupérer les éléments: ${error.message}`,
      });
      return [];
    }

    return data as T[];
  } catch (error: any) {
    toast({
      variant: "destructive",
      title: "Erreur",
      description: `Une erreur est survenue: ${error.message}`,
    });
    return [];
  }
};

/**
 * Cette fonction générique crée un nouvel élément dans une table spécifiée
 */
export const createItem = async <T>(table: string, item: Partial<T>): Promise<T | null> => {
  try {
    // @ts-ignore - Supprime l'erreur TS2769
    const { data, error } = await supabase.from(table).insert(item).select().single();

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Impossible de créer l'élément: ${error.message}`,
      });
      return null;
    }

    return data as T;
  } catch (error: any) {
    toast({
      variant: "destructive",
      title: "Erreur",
      description: `Une erreur est survenue: ${error.message}`,
    });
    return null;
  }
};

/**
 * Cette fonction générique met à jour un élément existant dans une table spécifiée
 */
export const updateItem = async <T>(table: string, id: string, updates: Partial<T>): Promise<T | null> => {
  try {
    // @ts-ignore - Supprime l'erreur TS2769
    const { data, error } = await supabase.from(table).update(updates).eq("id", id).select().single();

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Impossible de mettre à jour l'élément: ${error.message}`,
      });
      return null;
    }

    return data as T;
  } catch (error: any) {
    toast({
      variant: "destructive",
      title: "Erreur",
      description: `Une erreur est survenue: ${error.message}`,
    });
    return null;
  }
};

/**
 * Cette fonction générique supprime un élément d'une table spécifiée
 */
export const deleteItem = async (table: string, id: string): Promise<boolean> => {
  try {
    const { error } = await supabase.from(table).delete().eq("id", id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Impossible de supprimer l'élément: ${error.message}`,
      });
      return false;
    }

    return true;
  } catch (error: any) {
    toast({
      variant: "destructive",
      title: "Erreur",
      description: `Une erreur est survenue: ${error.message}`,
    });
    return false;
  }
};
