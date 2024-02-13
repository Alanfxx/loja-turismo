import { HttpStatusCode } from 'enums'

export type TResponse<T> = {
  data?: T
  error?: {
    message: string
    status: HttpStatusCode
  }
}
