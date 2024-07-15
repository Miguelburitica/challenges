import { Router } from 'express'
import { postData } from './controller'
import multer from 'multer'

const upload = multer({
  dest: 'uploads/'
})

const app = Router()

app.post('/', upload.single('file'), postData)

export default app