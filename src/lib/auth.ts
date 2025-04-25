import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '../db' // your drizzle instance

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
  }),
  emailAndPassword: {
    enabled: true,
  },
})

declare module 'hono' {
  interface ContextVariableMap {
    user: typeof auth.$Infer.Session.user | null
    session: typeof auth.$Infer.Session | null
  }
}
