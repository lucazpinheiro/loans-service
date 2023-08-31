import { Router } from 'express'
import handlers from '@/handlers'

export const routes: Router = Router()

routes.get('/health', handlers.health)
routes.post('/loans', handlers.loans)
