function HomePage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold">맵 리스트</h1>
        <p className="mt-1 text-text-secondary">
          글로벌 Top 200 랭커 데이터 기반 통계
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-surface p-4">
          <p className="text-text-secondary">맵 데이터를 불러오는 중...</p>
        </div>
      </section>
    </div>
  )
}

export default HomePage
