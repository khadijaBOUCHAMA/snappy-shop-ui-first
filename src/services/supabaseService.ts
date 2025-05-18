
import { supabase } from "@/integrations/supabase/client";

// Product related functions
export const getProducts = async () => {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { data: null, error };
  }
};

export const getProductById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return { data: null, error };
  }
};

// User related functions
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return { user, error: null };
  } catch (error) {
    console.error("Error fetching current user:", error);
    return { user: null, error };
  }
};

// Order related functions
export const createOrder = async (orderData: any) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert(orderData)
      .select()
      .single();
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error("Error creating order:", error);
    return { data: null, error };
  }
};

export const getUserOrders = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId);
    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(`Error fetching orders for user ${userId}:`, error);
    return { data: null, error };
  }
};
