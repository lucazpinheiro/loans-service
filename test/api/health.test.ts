import { describe, test, expect } from 'vitest'
import request from 'supertest'
import { app } from '../../src/app'

describe('GET - /health', () => {
  test('Should respond with json health message', async () => {
    const response = await request(app).get('/health')
    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body).toEqual({ msg: 'server is up' })
  })
})
