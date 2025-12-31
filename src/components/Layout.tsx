import { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-6">
          {children}
        </div>
      </main>
      <footer className="border-t border-surface py-4">
        <div className="container text-center text-sm text-text-secondary">
          BrawlStats - 글로벌 랭커 기반 통계
        </div>
      </footer>
    </div>
  )
}

export default Layout
