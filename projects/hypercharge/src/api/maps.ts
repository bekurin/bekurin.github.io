import { useQuery } from '@tanstack/react-query'
import { apiClient } from './client'
import type { PageResponse, Map } from '../types'

interface FetchMapsParams {
  page: number
  size?: number
}

async function fetchMaps({ page, size = 20 }: FetchMapsParams): Promise<PageResponse<Map>> {
  const response = await apiClient.get<PageResponse<Map>>(`/maps/page/${page}`, {
    params: { size },
  })
  return response.data
}

export function useMaps(page: number, size?: number) {
  return useQuery({
    queryKey: ['maps', page, size],
    queryFn: () => fetchMaps({ page, size }),
  })
}
