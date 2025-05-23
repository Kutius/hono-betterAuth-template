import type { MiddlewareHandler } from 'hono'
import { auth } from '../lib/auth'

export function betterAuthMiddleware(): MiddlewareHandler {
  return async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })

    if (!session) {
      c.set('user', null)
      c.set('session', null)
      return next()
    }

    c.set('user', session.user)
    c.set('session', session)
    return next()
  }
}
