import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_SUPABASE_URL) || 'https://qaptpmkbupwivynkyvzc.supabase.co';
const supabaseAnonKey = (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_SUPABASE_ANON_KEY) || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcHRwbWtidXB3aXZ5bmt5dnpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1NDUzODksImV4cCI6MjEwNDEyMTM4OX0.ZqZ-J0crOojOImNUpmjp9ycBkMPjaSvWaWEPrW_KWYo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
