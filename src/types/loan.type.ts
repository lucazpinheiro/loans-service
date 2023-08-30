export type Loan = 'PERSONAL' | 'GUARANTEED' | 'CONSIGNMENT'

export type LoansReport = {
  customer: string,
  loans: Array<{
    type: Loan,
    interest_rate: number
  }>
}
