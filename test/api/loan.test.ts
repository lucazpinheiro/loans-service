import { describe, test, expect } from 'vitest'
import request from 'supertest'
import { app } from '../../src/app'

describe('POST - /loan', () => {
  test('Should respond with available loans for customer info', async () => {
    const data = {
      age: 26,
      cpf: '275.484.389-23',
      name: 'Vuxaywua Zukiagou',
      income: 7000.00,
      location: 'SP'
    }

    const expected = {
      customer: 'Vuxaywua Zukiagou',
      loans: [{
        type: 'CONSIGNMENT',
        interest_rate: 2
      }]
    }

    const response = await request(app).post('/loans').send(data)
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toEqual(expected)
  })

  test('Should respond with schema validation report if customer data is not correct', async () => {
    const data = {
      age: '26',
      cpf: '275.484.389-23',
      name: 'Vuxaywua Zukiagou',
      income: 7000.00,
      location: 'SP'
    }

    const expected = [
      {
        code: 'invalid_type',
        expected: 'number',
        received: 'string',
        path: ['age'],
        message: 'Expected number, received string'
      }
    ]

    const response = await request(app).post('/loans').send(data)
    expect(response.statusCode).toBe(400)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toEqual(expected)
  })
})
