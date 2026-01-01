import { useState } from 'react'
import { getBrawlerImageUrl } from '../utils/brawlerImage'

interface BrawlerAvatarProps {
  brawlerId: string
  brawlerName: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  style?: React.CSSProperties
}

const SIZE_CLASSES = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-12 w-12 text-lg',
  lg: 'h-16 w-16 text-xl',
}

function BrawlerAvatar({
  brawlerId,
  brawlerName,
  size = 'md',
  className = '',
  style,
}: BrawlerAvatarProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imageUrl = getBrawlerImageUrl(brawlerId)

  const sizeClass = SIZE_CLASSES[size]
  const showFallback = !imageUrl || imageError

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-background ${sizeClass} ${className}`}
      style={style}
    >
      {!showFallback && (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-text-secondary/20" />
          )}
          <img
            src={imageUrl}
            alt={brawlerName}
            className={`h-full w-full object-cover transition-opacity duration-200 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </>
      )}
      {showFallback && (
        <span className="font-bold text-text-secondary">
          {brawlerName.charAt(0)}
        </span>
      )}
    </div>
  )
}

interface StackedBrawlerAvatarsProps {
  brawlers: { id: string; name: string }[]
  size?: 'sm' | 'md' | 'lg'
}

function StackedBrawlerAvatars({ brawlers, size = 'md' }: StackedBrawlerAvatarsProps) {
  return (
    <div className="flex -space-x-3">
      {brawlers.map((brawler, index) => (
        <BrawlerAvatar
          key={brawler.id}
          brawlerId={brawler.id}
          brawlerName={brawler.name}
          size={size}
          className="border-2 border-surface"
          style={{ zIndex: brawlers.length - index }}
        />
      ))}
    </div>
  )
}

export { BrawlerAvatar, StackedBrawlerAvatars }
export default BrawlerAvatar
