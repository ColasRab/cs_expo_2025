import { createBrowserClient } from '@supabase/ssr'

export function createClient(
  supabaseUrl?: string,
  supabaseAnonKey?: string
): ReturnType<typeof createBrowserClient> {
  const url = supabaseUrl ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = supabaseAnonKey ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    throw new Error(
      "Supabase URL or ANON KEY is missing. Provide them as parameters or in environment variables."
    )
  }

  return createBrowserClient(url, key)
}
