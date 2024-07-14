export type SliceError = {
  position: number
  value: string
}

export interface IGetResourcesResponse {
  data: unknown[]
  errors: SliceError[]
  msg?: string
}
