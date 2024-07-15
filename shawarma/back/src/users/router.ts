import { Router } from 'express'
import { getUsersController } from './controller'

const app = Router()

app.get('/', getUsersController)

export default app