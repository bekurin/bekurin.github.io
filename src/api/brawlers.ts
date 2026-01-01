import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./client";
import type { BrawlerStat } from "../types";

interface ApiResponse<T> {
  totalCount: number;
  data: T[];
}

async function fetchBrawlerStats(mapId: string): Promise<ApiResponse<BrawlerStat>> {
  const response = await apiClient.get<ApiResponse<BrawlerStat>>(`/maps/${mapId}/brawlers`);
  return response.data;
}

export function useBrawlerStats(mapId: string) {
  return useQuery({
    queryKey: ["brawlers", mapId],
    queryFn: () => fetchBrawlerStats(mapId),
    enabled: !!mapId,
  });
}
