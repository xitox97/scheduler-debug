import { ErrorType, HttpStatusCode } from './enums/general'
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

import dayjs from 'dayjs'

export type ProblemDetails = {
  detail?: string
  instance?: string
  status: HttpStatusCode
  title: string
  type: ErrorType
}

type HttpStatusHandlerFn = (
  axiosResponse: AxiosResponse<ProblemDetails>
) => void

export type HttpClientOptions = {
  httpStatusHandlers?: Record<HttpStatusCode, HttpStatusHandlerFn>
}

export type Posts = {
  userId: number
  id: number
  title: string
  body: string
}
export type AppAxiosRequestConfig<D = any> = AxiosRequestConfig<D> & {
  extraOptions?: HttpClientOptions
}
