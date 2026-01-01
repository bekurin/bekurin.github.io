interface SkeletonProps {
  className?: string
}

function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`animate-pulse rounded bg-text-secondary/10 ${className}`} />
  )
}

function BrawlerRowSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-surface p-3">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="min-w-0 flex-1 space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-12" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-2 w-full" />
          </div>
        </div>
      </div>
      <Skeleton className="h-5 w-12" />
    </div>
  )
}

function CombinationCardSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-surface p-4">
      <div className="flex -space-x-3">
        <Skeleton className="h-12 w-12 rounded-full border-2 border-surface" />
        <Skeleton className="h-12 w-12 rounded-full border-2 border-surface" />
        <Skeleton className="h-12 w-12 rounded-full border-2 border-surface" />
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
      <div className="space-y-1 text-right">
        <Skeleton className="ml-auto h-6 w-16" />
        <Skeleton className="ml-auto h-3 w-8" />
      </div>
    </div>
  )
}

function BrawlerStatsTableSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Skeleton className="h-8 w-16 rounded-full" />
        <Skeleton className="h-8 w-16 rounded-full" />
        <Skeleton className="h-8 w-16 rounded-full" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, i) => (
          <BrawlerRowSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}

function CombinationListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <CombinationCardSkeleton key={i} />
      ))}
    </div>
  )
}

export {
  Skeleton,
  BrawlerRowSkeleton,
  CombinationCardSkeleton,
  BrawlerStatsTableSkeleton,
  CombinationListSkeleton,
}
export default Skeleton
