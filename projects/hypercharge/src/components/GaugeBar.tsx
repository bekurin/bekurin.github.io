interface GaugeBarProps {
  label: string
  value: number
  maxValue?: number
  colorClass?: string
  showPercentSign?: boolean
}

function getWinRateColor(value: number): string {
  if (value >= 60) return 'bg-tier-op'
  if (value >= 55) return 'bg-tier-1'
  if (value >= 50) return 'bg-tier-2'
  if (value >= 45) return 'bg-tier-3'
  return 'bg-tier-4'
}

function GaugeBar({
  label,
  value,
  maxValue = 100,
  colorClass,
  showPercentSign = true,
}: GaugeBarProps) {
  const percentage = Math.min((value / maxValue) * 100, 100)
  const color = colorClass || getWinRateColor(value)

  return (
    <div>
      <div className="flex justify-between text-xs">
        <span className="text-text-secondary">{label}</span>
        <span className="text-text-primary">
          {value.toFixed(1)}{showPercentSign && '%'}
        </span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-background">
        <div
          className={`h-full rounded-full transition-all duration-300 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default GaugeBar
