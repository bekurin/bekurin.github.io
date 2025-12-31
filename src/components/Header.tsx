import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b border-surface bg-surface/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">BrawlStats</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            맵 리스트
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
