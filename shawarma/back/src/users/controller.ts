import { Request, Response } from 'express';
import { getUsers, getUsersBy } from './model';

export function getUsersController(req: Request, res: Response) {
  const queryParams = req.query
  if (!Object.keys(queryParams).includes('q')) {

    res.status(200)
    res.contentType('application/json')

    const { data } = getUsers()
    
    res.json({
      data,
    })

    return 'ok'
  }
  
  const q = String(queryParams.q)
  const { data } = getUsersBy(q)
  
  const response = {
    data: data,
  }
  
  res.status(200)
    .contentType('application/json')
    .json(response)
}
