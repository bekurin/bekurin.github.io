import { useParams } from 'react-router-dom'

function MapDetailPage() {
  const { mapId } = useParams<{ mapId: string }>()

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold">맵 상세 정보</h1>
        <p className="mt-1 text-text-secondary">Map ID: {mapId}</p>
      </section>

      <section className="rounded-lg bg-surface p-4">
        <p className="text-text-secondary">통계 데이터를 불러오는 중...</p>
      </section>
    </div>
  )
}

export default MapDetailPage
