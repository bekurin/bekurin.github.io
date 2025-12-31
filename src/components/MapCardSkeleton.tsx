function MapCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg bg-surface">
      <div className="relative aspect-[4/3] animate-pulse bg-text-secondary/10" />
      <div className="p-3">
        <div className="h-5 w-3/4 animate-pulse rounded bg-text-secondary/10" />
        <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-text-secondary/10" />
      </div>
    </div>
  )
}

export default MapCardSkeleton
