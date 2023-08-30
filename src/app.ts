import express, { Express, Request, Response } from 'express'
import { CustomerInfo } from '@/types'
import services from '@/services'

const PORT = Number(process.env.PORT) || 3000

export const app: Express = express()

app.use(express.json())
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.path}`)
  next()
})

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ msg: 'server is up' })
})
app.post('/loans', async (req: Request, res: Response) => {
  try {
    const data: CustomerInfo = req.body
    const [isValid, validationError] = services.validateCustomerInfo(data)
    if (!isValid) {
      res.status(400).json(validationError)
    }
    const availableLoans = services.requestLoan(data)
    res.status(200).json(availableLoans)
  } catch (err) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})

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
