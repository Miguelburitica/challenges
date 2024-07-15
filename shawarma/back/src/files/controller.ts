import { Request, Response } from 'express'
import { readDataFromCSV } from '../utils'
import path from 'path'
import fs from 'fs'

export function postData(req: Request, res: Response) {
  const file = req?.file

  const csvString = readDataFromCSV(path.join(__dirname, '../../', file?.path ?? ''))
  fs.writeFile(path.join(__dirname, '../users/data/MOCK_DATA.csv'), csvString, () => {
    res.json({
      data: 'ok',
      message: 'El archivo se cargó correctamente'
    })
  })

}
