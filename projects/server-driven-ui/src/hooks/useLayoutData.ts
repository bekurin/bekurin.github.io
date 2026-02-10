import { useQuery } from '@tanstack/react-query'
import apiClient from '@/api/apiClient'
import type { LayoutResponse } from '@/types/sdui'

export function useLayoutData() {
  return useQuery({
    queryKey: ['layout'],
    queryFn: async () => {
      const response = await apiClient.get<LayoutResponse>('/layout')
      return response.data
    },
    staleTime: 1000 * 60 * 10,
  })
}
