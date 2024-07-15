import express from 'express'
import cors from 'cors'
import apiRouter from './api'

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors())
app.use('/api', apiRouter)

app.listen(port, () => {
  console.log('server listening at http://localhost:' + port)
})
