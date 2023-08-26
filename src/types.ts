export type CustomerInfo = {
  cpf: string,
  name: string,
  age: number
  income: number,
  location: string
}

type Loan = 'PERSONAL' | 'GUARANTEED' | 'CONSIGNMENT'

export type LoansReport = {
  customer: string,
  loans: Array<{
    type: Loan,
    interest_rate: number
  }>
}
