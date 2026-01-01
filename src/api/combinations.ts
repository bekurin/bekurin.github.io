import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./client";
import type { Combination } from "../types";

interface ApiResponse<T> {
  totalCount: number;
  data: T[];
}

interface FetchCombinationsParams {
  mapId: string;
  minGames?: number;
  limit?: number;
}

async function fetchCombinations({ mapId, minGames = 3, limit = 20 }: FetchCombinationsParams): Promise<ApiResponse<Combination>> {
  const response = await apiClient.get<ApiResponse<Combination>>(`/maps/${mapId}/combinations`, { params: { minGames, limit } });
  return response.data;
}

export function useCombinations(mapId: string, minGames?: number, limit?: number) {
  return useQuery({
    queryKey: ["combinations", mapId, minGames, limit],
    queryFn: () => fetchCombinations({ mapId, minGames, limit }),
    enabled: !!mapId,
  });
}
