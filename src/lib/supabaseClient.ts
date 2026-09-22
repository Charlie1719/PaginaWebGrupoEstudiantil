// src/lib/supabaseClient.ts
//Crea y exporta el cliente de Supabase para poder usar la base de datos en toda la pagina
import { createBrowserClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);