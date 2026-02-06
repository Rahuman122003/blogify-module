import { createClient } from "@supabase/supabase-js";

/**
 * ============================================
 * SUPABASE ENV VARIABLES
 * ============================================
 * Make sure these exist in your .env file
 *
 * VITE_SUPABASE_URL=your_project_url
 * VITE_SUPABASE_ANON_KEY=your_anon_key
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Safety check (prevents silent crash)
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase environment variables are missing. Check your .env file."
  );
}

/**
 * ============================================
 * SUPABASE CLIENT
 * ============================================
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

/**
 * ============================================
 * OPTIONAL HELPERS (You can use later)
 * ============================================
 */

// Get current logged in user
export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  return data.user;
};

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
