import { env } from './env/index'
import app from './app'
const port: number = Number.parseInt(env.PORT)
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`server is running on http://localhost:${port}`)
  })
