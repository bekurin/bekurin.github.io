import { Link } from 'react-router-dom'
import type { Map } from '../types'

interface MapCardProps {
  map: Map
}

const MODE_COLORS: Record<string, string> = {
  gemGrab: 'bg-purple-600',
  brawlBall: 'bg-blue-500',
  bounty: 'bg-yellow-600',
  heist: 'bg-red-600',
  hotZone: 'bg-orange-500',
  knockout: 'bg-pink-600',
  showdown: 'bg-green-600',
  duoShowdown: 'bg-green-700',
  siege: 'bg-cyan-600',
}

const MODE_LABELS: Record<string, string> = {
  gemGrab: '젬 그랩',
  brawlBall: '브롤볼',
  bounty: '바운티',
  heist: '하이스트',
  hotZone: '핫존',
  knockout: '녹아웃',
  showdown: '쇼다운',
  duoShowdown: '듀오 쇼다운',
  siege: '시즈',
}

function getModeColor(mode: string): string {
  const normalizedMode = mode.replace(/\d+V\d+/i, '')
  return MODE_COLORS[normalizedMode] || 'bg-gray-600'
}

function getModeLabel(mode: string): string {
  const normalizedMode = mode.replace(/\d+V\d+/i, '')
  return MODE_LABELS[normalizedMode] || mode
}

function MapCard({ map }: MapCardProps) {
  return (
    <Link
      to={`/maps/${map.mapId}`}
      className="group relative overflow-hidden rounded-lg bg-surface transition-transform hover:scale-[1.02]"
    >
      <div className="relative aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-text-secondary/30">
            {map.mapName.charAt(0)}
          </span>
        </div>
        <span
          className={`absolute left-2 top-2 rounded px-2 py-0.5 text-xs font-medium text-white ${getModeColor(map.mode)}`}
        >
          {getModeLabel(map.mode)}
        </span>
      </div>
      <div className="p-3">
        <h3 className="truncate font-medium text-text-primary group-hover:text-primary">
          {map.mapName}
        </h3>
        <p className="mt-1 text-xs text-text-secondary">
          최근 업데이트: {new Date(map.lastUpdatedAt).toLocaleDateString('ko-KR')}
        </p>
      </div>
    </Link>
  )
}

export default MapCard
