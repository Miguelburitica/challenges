import { Router } from 'express'
import usersRouter from './users/router'
import filesRouter from './files/router'

const apiRouter = Router()

apiRouter.use('/users', usersRouter)
apiRouter.use('/files', filesRouter)

export default apiRouter

