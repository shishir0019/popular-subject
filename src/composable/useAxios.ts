// composables/useAxios.ts
import axios, { type AxiosInstance, type AxiosRequestConfig, AxiosError } from 'axios'
import { ref } from 'vue'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://www.ehlcrm.theskyroute.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'SHHuEwWewiQ9w5QT'
  },
})

export function useAxios<T = any>() {
  const error = ref<AxiosError | null>(null)
  const loading = ref<boolean>(false)

  const get = async <T>(url: string, config?: AxiosRequestConfig) => {
    loading.value = true
    error.value = null
    try {
      const res = await axiosInstance.get<T>(url, config)
      return res.data
    } catch (err: unknown) {
      error.value = err as AxiosError
    } finally {
      loading.value = false
    }
  }

  const post = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    loading.value = true
    error.value = null
    try {
      const res = await axiosInstance.post<T>(url, data, config)
      return res.data
    } catch (err: unknown) {
      error.value = err as AxiosError
    } finally {
      loading.value = false
    }
  }

  return {
    get,
    post,
    error,
    loading,
  }
}
