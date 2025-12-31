export interface Map {
  mapId: string
  mapName: string
  mode: string
  lastUpdatedAt: string
}

export interface BrawlerStat {
  brawlerId: string
  brawlerName: string
  winRate: number
  pickRate: number
  starRate: number
  totalPick: number
  totalWin: number
  tier: Tier
  totalStarPlayer: number
}

export interface Combination {
  combinationHash: string
  brawlers: BrawlerInfo[]
  winRate: number
  totalGame: number
  totalWin: number
}

export interface BrawlerInfo {
  id: string
  name: string
}

export type Tier = 'OP' | '1T' | '2T' | '3T' | '4T'

export interface ApiResponse<T> {
  totalCount: number
  data: T
}

export interface MapsData {
  maps: Map[]
}

export interface BrawlersData {
  brawlers: BrawlerStat[]
}

export interface CombinationsData {
  combinations: Combination[]
}

export interface SystemStatus {
  status: string
  data: {
    lastBatchRun: string
    totalLogCount: number
    activeMapCount: number
    version: string
  }
}
