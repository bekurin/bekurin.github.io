import { useQuery } from '@tanstack/react-query'
import apiClient from '@/api/apiClient'
import type { PageResponse } from '@/types/sdui'

export function usePageData(pageKey: string) {
  return useQuery({
    queryKey: ['page', pageKey],
    queryFn: async () => {
      const response = await apiClient.get<PageResponse>(`/pages/${pageKey}`)
      return response.data
    },
    enabled: !!pageKey,
  })
}
