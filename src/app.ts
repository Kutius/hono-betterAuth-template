import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { betterAuthMiddleware } from './middlewares/auth.middleware'

import authApp from './routes/auth'

const app = new Hono()

app.use('*', logger())
app.use('*', betterAuthMiddleware())

app.basePath('/api').route('/', authApp)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
