import { CONSIGNMENT_LOAN_INTEREST_RATE, GUARANTEED_LOAN_INTEREST_RATE, PERSONAL_LOAN_INTEREST_RATE } from '../constants'
import { CustomerInfo, LoansReport } from '../types'

export const grantPersonalLoan = (customer: CustomerInfo, availableLoans: LoansReport) => {
  if (customer.income <= 3000) {
    availableLoans.loans.push({
      type: 'PERSONAL',
      interest_rate: PERSONAL_LOAN_INTEREST_RATE
    })
    return
  }

  if (customer.income >= 3000 && customer.income <= 5000 && customer.age < 30 && customer.location.toLowerCase() === 'sp') {
    availableLoans.loans.push({
      type: 'PERSONAL',
      interest_rate: PERSONAL_LOAN_INTEREST_RATE
    })
  }
}

export const grantConsignmentLoan = (customer: CustomerInfo, availableLoans: LoansReport) => {
  if (customer.income >= 5000) {
    availableLoans.loans.push({
      type: 'CONSIGNMENT',
      interest_rate: CONSIGNMENT_LOAN_INTEREST_RATE
    })
  }
}

export const grantGuaranteedLoan = (customer: CustomerInfo, availableLoans: LoansReport) => {
  if (customer.income <= 3000) {
    availableLoans.loans.push({
      type: 'GUARANTEED',
      interest_rate: GUARANTEED_LOAN_INTEREST_RATE
    })
    return
  }

  if (customer.income >= 3000 && customer.income <= 5000 && customer.age < 30 && customer.location.toLowerCase() === 'sp') {
    availableLoans.loans.push({
      type: 'GUARANTEED',
      interest_rate: GUARANTEED_LOAN_INTEREST_RATE
    })
  }
}

export const requestLoan = (customer: CustomerInfo): LoansReport => {
  const availableLoans: LoansReport = {
    customer: customer.name,
    loans: []
  }

  grantPersonalLoan(customer, availableLoans)
  grantConsignmentLoan(customer, availableLoans)
  grantGuaranteedLoan(customer, availableLoans)

  return availableLoans
}
