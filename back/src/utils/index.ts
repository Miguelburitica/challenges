import path from "path"
import fs from 'fs'

import { SliceError } from "./types"

export function readDataFromCSV (sourcePath: string) {
  const fileDataBuffer = fs.readFileSync(sourcePath)
  const fileData = String(fileDataBuffer)

  return fileData
}

export function getDataFromCsvString<T>(csvString: string) {
  const fileDataSlices = csvString.split('\n')
  
  const headers = fileDataSlices[0]?.split(',')
  const NUMBER_COLS = headers.length
  
  const dataArray: T[] = []

  const slicesWithErrors: SliceError[] = []

  for (let index = 1; index < fileDataSlices.length; index++) {
    const slice = fileDataSlices[index];
    const fields = slice.split(',')

    if (fields.length !== NUMBER_COLS) {
      slicesWithErrors.push({
        position: index,
        value: slice
      })
      continue
    }

    const dataObject = Object.create(null)

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index]
      const header = headers[index]

      dataObject[header] = field
    }

    dataArray.push(dataObject)
  }

  return {
    data: dataArray,
    errors: slicesWithErrors
  }
}