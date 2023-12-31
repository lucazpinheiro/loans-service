import { describe, expect, test } from 'vitest'
import { CONSIGNMENT_LOAN_INTEREST_RATE, GUARANTEED_LOAN_INTEREST_RATE, PERSONAL_LOAN_INTEREST_RATE } from '../../src/constants'
import { requestLoan, grantPersonalLoan, grantConsignmentLoan, grantGuaranteedLoan } from '../../src/services/loan.service'
import { CustomerInfo } from '../../src/types'

describe('services - loan', () => {
  describe('grantPersonalLoan', () => {
    test('should grant an personal loan if customer income is higher than 3000', () => {
      const costumerInfo: CustomerInfo = {
        age: 26,
        cpf: '000.000.000-11',
        name: 'name',
        income: 2000.00,
        location: 'sc'
      }

      const result = grantPersonalLoan(costumerInfo)

      const expected = {
        type: 'PERSONAL',
        interest_rate: PERSONAL_LOAN_INTEREST_RATE
      }

      expect(result).toEqual(expected)
    })

    test('should grant an personal loan if customer income is between 3000 and 5000, is under 30 years old and lives in SP', () => {
      const costumerInfo: CustomerInfo = {
        age: 29,
        cpf: '000.000.000-11',
        name: 'name',
        income: 4000.00,
        location: 'SP'
      }

      const result = grantPersonalLoan(costumerInfo)

      const expected = {
        type: 'PERSONAL',
        interest_rate: PERSONAL_LOAN_INTEREST_RATE
      }

      expect(result).toEqual(expected)
    })
  })

  describe('grantConsignmentLoan', () => {
    test('should grant an consignment loan if customer income is higher than 5000', () => {
      const costumerInfo: CustomerInfo = {
        age: 26,
        cpf: '000.000.000-11',
        name: 'name',
        income: 5000.00,
        location: 'sc'
      }

      const result = grantConsignmentLoan(costumerInfo)

      const expected = {
        type: 'CONSIGNMENT',
        interest_rate: CONSIGNMENT_LOAN_INTEREST_RATE
      }

      expect(result).toEqual(expected)
    })

    test('should return null if costumer doesn\'t has requiriments for consignment loan', () => {
      const costumerInfo: CustomerInfo = {
        age: 26,
        cpf: '000.000.000-11',
        name: 'name',
        income: 4000.00,
        location: 'sc'
      }

      const result = grantConsignmentLoan(costumerInfo)

      expect(result).toBe(null)
    })
  })

  describe('grantGuaranteedLoan', () => {
    test('should grant an guaranteed loan if customer income is higher than 3000', () => {
      const costumerInfo: CustomerInfo = {
        age: 26,
        cpf: '000.000.000-11',
        name: 'name',
        income: 3000.00,
        location: 'sc'
      }

      const result = grantGuaranteedLoan(costumerInfo)

      const expected = {
        type: 'GUARANTEED',
        interest_rate: GUARANTEED_LOAN_INTEREST_RATE
      }

      expect(result).toEqual(expected)
    })

    test('should grant an guaranteed loan if customer income is higher than 3000', () => {
      const costumerInfo: CustomerInfo = {
        age: 26,
        cpf: '000.000.000-11',
        name: 'name',
        income: 4000.00,
        location: 'sp'
      }

      const result = grantGuaranteedLoan(costumerInfo)

      const expected = {
        type: 'GUARANTEED',
        interest_rate: GUARANTEED_LOAN_INTEREST_RATE
      }

      expect(result).toEqual(expected)
    })
  })

  describe('requestLoand', () => {
    test('should call grantPersonalLoan, grantConsignmentLoan and grantGuaranteedLoan', () => {
      const costumerInfo: CustomerInfo = {
        age: 26,
        cpf: '000.000.000-10',
        name: 'name',
        income: 3100.00,
        location: 'SP'
      }

      const result = requestLoan(costumerInfo)

      const expected = [
        {
          type: 'PERSONAL',
          interest_rate: PERSONAL_LOAN_INTEREST_RATE
        },
        {
          type: 'GUARANTEED',
          interest_rate: GUARANTEED_LOAN_INTEREST_RATE
        }
      ]

      expect(result.loans).toEqual(expected)
    })
  })
})
