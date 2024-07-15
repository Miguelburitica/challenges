import { Router } from 'express'
import { getUsersController, postData } from './controller'

const app = Router()

app.get('/file', getUsersController)
app.post('/file', postData)

export default app