import { useState, useMemo } from 'react'
import { useMaps } from '../api/maps'
import SearchBar from '../components/SearchBar'
import MapCard from '../components/MapCard'
import MapCardSkeleton from '../components/MapCardSkeleton'

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, isLoading, isError } = useMaps(0)

  const filteredMaps = useMemo(() => {
    if (!data?.data) return []
    if (!searchQuery.trim()) return data.data

    const query = searchQuery.toLowerCase()
    return data.data.filter(
      (map) =>
        map.mapName.toLowerCase().includes(query) ||
        map.mode.toLowerCase().includes(query)
    )
  }, [data?.data, searchQuery])

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold">맵 리스트</h1>
        <p className="mt-1 text-text-secondary">
          글로벌 Top 200 랭커 데이터 기반 통계
        </p>
      </section>

      <section>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </section>

      <section>
        {isLoading ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <MapCardSkeleton key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="rounded-lg bg-surface p-8 text-center">
            <p className="text-text-secondary">
              데이터를 불러오는 중 오류가 발생했습니다.
            </p>
          </div>
        ) : filteredMaps.length === 0 ? (
          <div className="rounded-lg bg-surface p-8 text-center">
            <p className="text-text-secondary">
              {searchQuery ? '검색 결과가 없습니다.' : '표시할 맵이 없습니다.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {filteredMaps.map((map) => (
              <MapCard key={map.mapId} map={map} />
            ))}
          </div>
        )}
      </section>

      {data && (
        <section className="text-center text-sm text-text-secondary">
          총 {data.totalCount}개의 맵
        </section>
      )}
    </div>
  )
}

export default HomePage
