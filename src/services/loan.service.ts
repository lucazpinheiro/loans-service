import { CONSIGNMENT_LOAN_INTEREST_RATE, GUARANTEED_LOAN_INTEREST_RATE, PERSONAL_LOAN_INTEREST_RATE } from '../constants'
import { CustomerInfo, LoansReport } from '@/types'

export const grantPersonalLoan = (customer: CustomerInfo) => {
  if (customer.income <= 3000) {
    return {
      type: 'PERSONAL',
      interest_rate: PERSONAL_LOAN_INTEREST_RATE
    } as const
  }

  if (customer.income >= 3000 && customer.income <= 5000 && customer.age < 30 && customer.location.toLowerCase() === 'sp') {
    return {
      type: 'PERSONAL',
      interest_rate: PERSONAL_LOAN_INTEREST_RATE
    } as const
  }
  return null
}

export const grantConsignmentLoan = (customer: CustomerInfo) => {
  if (customer.income >= 5000) {
    return {
      type: 'CONSIGNMENT',
      interest_rate: CONSIGNMENT_LOAN_INTEREST_RATE
    } as const
  }
  return null
}

export const grantGuaranteedLoan = (customer: CustomerInfo) => {
  if (customer.income <= 3000) {
    return {
      type: 'GUARANTEED',
      interest_rate: GUARANTEED_LOAN_INTEREST_RATE
    } as const
  }

  if (customer.income >= 3000 && customer.income <= 5000 && customer.age < 30 && customer.location.toLowerCase() === 'sp') {
    return {
      type: 'GUARANTEED',
      interest_rate: GUARANTEED_LOAN_INTEREST_RATE
    } as const
  }
  return null
}

export const requestLoan = (customer: CustomerInfo): LoansReport => {
  const availableLoans: LoansReport = {
    customer: customer.name,
    loans: []
  }

  const personalLoan = grantPersonalLoan(customer)
  if (personalLoan) {
    availableLoans.loans.push(personalLoan)
  }

  const consignmentLoand = grantConsignmentLoan(customer)
  if (consignmentLoand) {
    availableLoans.loans.push(consignmentLoand)
  }

  const guaranteedLoan = grantGuaranteedLoan(customer)
  if (guaranteedLoan) {
    availableLoans.loans.push(guaranteedLoan)
  }

  return availableLoans
}
