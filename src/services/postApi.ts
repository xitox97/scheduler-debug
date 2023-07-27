import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
} from '@reduxjs/toolkit/query/react'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import dayjs from 'dayjs'
import { Posts } from '../types'

let hasInstance = false
let httpClient: AxiosInstance

const HttpClient = () => {
  if (!hasInstance) {
    httpClient = axios.create({})

    httpClient.interceptors.response.use(
      async (response) => {
        return response
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    hasInstance = true
  }
  return httpClient
}

const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig, BaseQueryApi, AxiosError> =>
  async (args: AxiosRequestConfig, _thunkApi, extraOptions) => {
    try {
      const response = await HttpClient()({
        ...args,
        extraOptions,
      } as AxiosRequestConfig)
      return {
        data: response.data,
        meta: {
          headers: response.headers,
          status: response.status,
          config: response.config,
          request: response.request,
          statusText: response.statusText,
        },
      }
    } catch (axiosError) {
      const error = axiosError as AxiosError
      return {
        error,
      }
    }
  }

const baseQuery = axiosBaseQuery()
const baseQueryWithReauth: BaseQueryFn<
  AxiosRequestConfig,
  BaseQueryApi,
  AxiosError
> = async (
  args: AxiosRequestConfig,
  api: BaseQueryApi,
  extraOptions: Object
) => {
  const result = await baseQuery(args, api, extraOptions)

  return result
}

export const postApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => ({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: 'GET',
      }),
      transformResponse(baseQueryReturnValue) {
        const response = baseQueryReturnValue as unknown as Posts[]

        return response.map((item: Posts, index: number) => {
          return {
            allDay: false,
            endDate: dayjs()
              .add(index + 1, 'day')
              .add(index + 1, 'hour')
              .toISOString(),
            id: item.id,
            startDate: dayjs()
              .add(index + 1, 'day')
              .toISOString(),
            text: item.title,
          }
        })
      },
    }),
  }),
  reducerPath: 'postApi',
})

export const { useGetPostsQuery, useLazyGetPostsQuery } = postApi
