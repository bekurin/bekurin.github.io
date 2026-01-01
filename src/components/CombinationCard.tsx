import type { Combination } from '../types'
import BrawlerAvatar from './BrawlerAvatar'

interface CombinationCardProps {
  combination: Combination
  rank: number
}

function CombinationCard({ combination, rank }: CombinationCardProps) {
  const isBest = rank === 1

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-surface p-4 ${
        isBest ? 'ring-2 ring-primary' : ''
      }`}
    >
      {isBest && (
        <div className="absolute right-0 top-0 rounded-bl bg-primary px-2 py-1 text-xs font-bold text-background">
          Best Synergy
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {combination.brawlers.map((brawler, index) => (
            <BrawlerAvatar
              key={brawler.id}
              brawlerId={brawler.id}
              brawlerName={brawler.name}
              size="md"
              className="border-2 border-surface"
              style={{ zIndex: combination.brawlers.length - index }}
            />
          ))}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-1">
            {combination.brawlers.map((brawler, index) => (
              <span key={brawler.id} className="text-sm text-text-primary">
                {brawler.name}
                {index < combination.brawlers.length - 1 && (
                  <span className="text-text-secondary"> · </span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-1 text-xs text-text-secondary">
            {combination.totalGame}게임 · {combination.totalWin}승
          </p>
        </div>

        <div className="text-right">
          <p className={`text-xl font-bold ${isBest ? 'text-primary' : 'text-text-primary'}`}>
            {combination.winRate.toFixed(1)}%
          </p>
          <p className="text-xs text-text-secondary">승률</p>
        </div>
      </div>
    </div>
  )
}

interface CombinationListProps {
  combinations: Combination[]
}

function CombinationList({ combinations }: CombinationListProps) {
  if (combinations.length === 0) {
    return (
      <div className="rounded-lg bg-surface p-8 text-center">
        <p className="text-text-secondary">추천 조합 데이터가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {combinations.map((combination, index) => (
        <CombinationCard
          key={combination.combinationHash}
          combination={combination}
          rank={index + 1}
        />
      ))}
    </div>
  )
}

export { CombinationCard, CombinationList }
export default CombinationList
