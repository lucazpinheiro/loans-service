import { Request, Response } from 'express'
import { CustomerInfo } from '@/types'
import services from '@/services'

export const loans = async (req: Request, res: Response) => {
  try {
    const data: CustomerInfo = req.body

    const [isValid, validationError] = services.validateCustomerInfo(data)
    if (!isValid) {
      res.status(400).json(validationError)
      return
    }

    const availableLoans = services.requestLoan(data)

    res.status(200).json(availableLoans)
  } catch (err) {
    res.sendStatus(500)
  }
}
