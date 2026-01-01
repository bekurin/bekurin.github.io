import { useState, useMemo } from 'react'
import type { BrawlerStat, Tier } from '../types'
import TierBadge from './TierBadge'
import GaugeBar from './GaugeBar'

type SortKey = 'winRate' | 'pickRate' | 'tier'

interface BrawlerStatsTableProps {
  brawlers: BrawlerStat[]
}

const TIER_ORDER: Record<Tier, number> = {
  OP: 0,
  '1T': 1,
  '2T': 2,
  '3T': 3,
  '4T': 4,
}

function BrawlerStatsTable({ brawlers }: BrawlerStatsTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('winRate')

  const sortedBrawlers = useMemo(() => {
    return [...brawlers].sort((a, b) => {
      if (sortKey === 'tier') {
        return TIER_ORDER[a.tier] - TIER_ORDER[b.tier]
      }
      return b[sortKey] - a[sortKey]
    })
  }, [brawlers, sortKey])

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <SortButton
          label="승률순"
          isActive={sortKey === 'winRate'}
          onClick={() => setSortKey('winRate')}
        />
        <SortButton
          label="픽률순"
          isActive={sortKey === 'pickRate'}
          onClick={() => setSortKey('pickRate')}
        />
        <SortButton
          label="티어순"
          isActive={sortKey === 'tier'}
          onClick={() => setSortKey('tier')}
        />
      </div>

      <div className="space-y-2">
        {sortedBrawlers.map((brawler) => (
          <BrawlerRow key={brawler.brawlerId} brawler={brawler} />
        ))}
      </div>
    </div>
  )
}

interface SortButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

function SortButton({ label, isActive, onClick }: SortButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-sm transition-colors ${
        isActive
          ? 'bg-primary text-background'
          : 'bg-surface text-text-secondary hover:text-text-primary'
      }`}
    >
      {label}
    </button>
  )
}

interface BrawlerRowProps {
  brawler: BrawlerStat
}

function BrawlerRow({ brawler }: BrawlerRowProps) {
  const isOP = brawler.tier === 'OP'

  return (
    <div className="flex items-center gap-4 rounded-lg bg-surface p-3 transition-all">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
          isOP
            ? 'bg-tier-op/20 text-tier-op'
            : 'bg-background text-text-secondary'
        }`}
      >
        {brawler.brawlerName.charAt(0)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium text-text-primary">{brawler.brawlerName}</span>
          <TierBadge tier={brawler.tier} />
        </div>

        <div className="mt-2 grid grid-cols-2 gap-4">
          <GaugeBar label="승률" value={brawler.winRate} />
          <GaugeBar label="픽률" value={brawler.pickRate} colorClass="bg-secondary" />
        </div>
      </div>

      <div className="flex items-center gap-1 text-sm text-primary">
        <span>★</span>
        <span>{brawler.starRate.toFixed(1)}%</span>
      </div>
    </div>
  )
}

export default BrawlerStatsTable
