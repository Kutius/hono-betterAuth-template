import { Hono } from 'hono'
import { auth } from '../lib/auth'

const router = new Hono({ strict: false })

router.on(['GET', 'POST'], '/auth/*', c => auth.handler(c.req.raw))

export default router
