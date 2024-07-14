import path from 'path'
import { getDataFromCsvString, readDataFromCSV } from '../utils'
import { IGetResourcesResponse } from '../utils/types'
import { User } from './types'

const DATA_SOURCE_PATH = './data/MOCK_DATA.csv'

export function getUsers(): IGetResourcesResponse {
  const csvString = readDataFromCSV(path.join(__dirname, DATA_SOURCE_PATH))
  
  const { data } = getDataFromCsvString(csvString)
  
  return {
    data,
    errors: []
  }
}

export function getUsersBy(q: string): IGetResourcesResponse {
  const csvString = readDataFromCSV(path.join(__dirname, DATA_SOURCE_PATH))
  
  const { data } = getDataFromCsvString<User>(csvString)
  const regex = new RegExp(`.*${q}.*`)

  const candidates = data.filter(userObject => {
    return Object
      .values(userObject)
      .some(prop => {
        return regex.test(prop)
      })
  })
  
  return {
    data: candidates,
    errors: []
  }
}
