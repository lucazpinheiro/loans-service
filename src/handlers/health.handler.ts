import { Request, Response } from 'express'

export const health = (req: Request, res: Response) => {
  res.status(200).json({ msg: 'server is up' })
}
