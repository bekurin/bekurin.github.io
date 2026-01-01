import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useBrawlerStats } from '../api/brawlers'
import { useCombinations } from '../api/combinations'
import Tabs from '../components/Tabs'
import BrawlerStatsTable from '../components/BrawlerStatsTable'
import CombinationList from '../components/CombinationCard'

const TABS = [
  { id: 'brawlers', label: '브롤러 통계' },
  { id: 'combinations', label: '추천 조합' },
]

function MapDetailPage() {
  const { mapId } = useParams<{ mapId: string }>()
  const [activeTab, setActiveTab] = useState('brawlers')

  const {
    data: brawlersData,
    isLoading: isBrawlersLoading,
    isError: isBrawlersError,
  } = useBrawlerStats(mapId || '')

  const {
    data: combinationsData,
    isLoading: isCombinationsLoading,
    isError: isCombinationsError,
  } = useCombinations(mapId || '')

  const brawlers = brawlersData?.data || []
  const combinations = combinationsData?.data || []

  const isLoading = activeTab === 'brawlers' ? isBrawlersLoading : isCombinationsLoading
  const isError = activeTab === 'brawlers' ? isBrawlersError : isCombinationsError

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <Link to="/" className="hover:text-primary">
          맵 리스트
        </Link>
        <span>/</span>
        <span className="text-text-primary">맵 상세</span>
      </div>

      <header>
        <h1 className="text-2xl font-bold">맵 ID: {mapId}</h1>
        <p className="mt-1 text-sm text-text-secondary">
          글로벌 Top 200 랭커 데이터 기반 분석
        </p>
      </header>

      <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      <section>
        {isLoading ? (
          <LoadingSkeleton tab={activeTab} />
        ) : isError ? (
          <div className="rounded-lg bg-surface p-8 text-center">
            <p className="text-text-secondary">데이터를 불러오는 중 오류가 발생했습니다.</p>
          </div>
        ) : activeTab === 'brawlers' ? (
          brawlers.length > 0 ? (
            <BrawlerStatsTable brawlers={brawlers} />
          ) : (
            <EmptyState message="브롤러 통계 데이터가 없습니다." />
          )
        ) : (
          <CombinationList combinations={combinations} />
        )}
      </section>
    </div>
  )
}

function LoadingSkeleton({ tab }: { tab: string }) {
  if (tab === 'brawlers') {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-20 animate-pulse rounded-lg bg-surface" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-24 animate-pulse rounded-lg bg-surface" />
      ))}
    </div>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-lg bg-surface p-8 text-center">
      <p className="text-text-secondary">{message}</p>
    </div>
  )
}

export default MapDetailPage
