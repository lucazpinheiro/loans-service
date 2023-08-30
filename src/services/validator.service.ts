import { z } from 'zod'
import { CustomerInfo } from '@/types'

export const customerSchema = z.object({
  cpf: z.string().min(11).max(15),
  name: z.string(),
  age: z.number(),
  income: z.number(),
  location: z.string()
})

export const validateCustomerInfo = (data: CustomerInfo) => {
  const result = customerSchema.safeParse(data)
  if (result.success) {
    return [true, null]
  }
  return [false, result.error.issues]
}
