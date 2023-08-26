import { describe, expect, test } from 'vitest'
import services from '../../src/services'
import { CustomerInfo } from '../../src/types'

describe('services - validator', () => {
  describe('validateCustomerInfo', () => {
    test('should return true and a null error object when a valid object is passed as argument', () => {
      const costumerInfo: CustomerInfo = {
        age: 26,
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 7000.00,
        location: 'SP'
      }

      const result = services.validateCustomerInfo(costumerInfo)

      expect(result[0]).toBe(true)
      expect(result[1]).toBe(null)
    })

    test('should return false and an error object when an invalid object is passed as argument', () => {
      const costumerInfo: any = {
        age: '',
        cpf: '275.484.389-23',
        name: 'Vuxaywua Zukiagou',
        income: 7000.00,
        location: 'SP'
      }

      const expected = [
        {
          code: 'invalid_type',
          expected: 'number',
          message: 'Expected number, received string',
          path: [
            'age'
          ],
          received: 'string'
        }
      ]

      const result = services.validateCustomerInfo(costumerInfo)

      expect(result[0]).toBe(false)
      expect(result[1]).toEqual(expected)
    })
  })
})
