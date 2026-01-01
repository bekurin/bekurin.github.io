interface EmptyStateProps {
  title?: string
  message: string
  icon?: 'data' | 'search' | 'error'
}

function EmptyState({ title, message, icon = 'data' }: EmptyStateProps) {
  return (
    <div className="rounded-lg bg-surface p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background">
        {icon === 'data' && (
          <svg className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )}
        {icon === 'search' && (
          <svg className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )}
        {icon === 'error' && (
          <svg className="h-8 w-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )}
      </div>
      {title && (
        <h3 className="mb-2 font-medium text-text-primary">{title}</h3>
      )}
      <p className="text-sm text-text-secondary">{message}</p>
    </div>
  )
}

function InsufficientDataState() {
  return (
    <EmptyState
      icon="data"
      title="데이터 부족"
      message="최소 판수에 도달하지 않아 통계 데이터가 충분하지 않습니다."
    />
  )
}

export { EmptyState, InsufficientDataState }
export default EmptyState
