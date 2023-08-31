import express, { Express } from 'express'
import { routes } from '@/routes'

const PORT = Number(process.env.PORT) || 3000

export const app: Express = express()

app.use(express.json())
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.path}`)
  next()
})
app.use('/', routes)

export const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is up on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
