import type { Tier } from '../types'

interface TierBadgeProps {
  tier: Tier
}

const TIER_STYLES: Record<Tier, string> = {
  OP: 'bg-tier-op text-white animate-pulse',
  '1T': 'bg-tier-1 text-white',
  '2T': 'bg-tier-2 text-white',
  '3T': 'bg-tier-3 text-white',
  '4T': 'bg-tier-4 text-white',
}

const TIER_LABELS: Record<Tier, string> = {
  OP: 'OP',
  '1T': '1티어',
  '2T': '2티어',
  '3T': '3티어',
  '4T': '4티어',
}

function TierBadge({ tier }: TierBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-bold ${TIER_STYLES[tier]}`}
    >
      {TIER_LABELS[tier]}
    </span>
  )
}

export default TierBadge
