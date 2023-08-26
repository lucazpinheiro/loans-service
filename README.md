## Loans service

This project is as service built following the constraints described on challenges repo from [backend-br](https://github.com/backend-br), you can check it out [here](https://github.com/backend-br/desafios/blob/master/loans/PROBLEM.md)

The challenge proposes that we built a web API tha will receive a POST request with an costumer data we should follow some rules to decie wich type of loan this costumer has access to.

### rules

* Grant the personal loan if the client's salary is equal to or less than R$ 3000.
* Grant the personal loan if the client's salary is between R$ 3000 and R$ 5000, and the client is under 30 years old and resides in São Paulo (SP).
* Grant the payroll loan if the client's salary is equal to or greater than R$ 5000.
* Grant the loan with collateral if the client's salary is equal to or less than R$ 3000.
* Grant the loan with collateral if the client's salary is between R$ 3000 and R$ 5000, and the client is under 30 years old and resides in São Paulo (SP).

### example payload request

```json
{
  "age": 26,
  "cpf": "275.484.389-23",
  "name": "Vuxaywua Zukiagou",
  "income": 7000.00,
  "location": "SP"
}
```

### example payload response

```json
{
  "customer": "Vuxaywua Zukiagou",
  "loans": [
    {
      "type": "PERSONAL",
      "interest_rate": 4
    },
    {
      "type": "GUARANTEED",
      "interest_rate": 3
    },
    {
      "type": "CONSIGNMENT",
      "interest_rate": 2
    }
  ]
}
```

## how to use

```bash
# run on dev
npm run start:dev

# build
npm run build

# start
npm start

# run unit tests
npm run test

# run test with coverage
npm run test:coverage
```
