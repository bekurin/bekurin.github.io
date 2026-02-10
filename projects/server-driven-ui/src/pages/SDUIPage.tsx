import { Typography, Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { SDUIRendererList } from '@/components/sdui'
import { usePageData } from '@/hooks/usePageData'

const { Title } = Typography

interface SDUIPageProps {
  pageKey?: string
}

export function SDUIPage({ pageKey: propPageKey }: SDUIPageProps) {
  const params = useParams()
  const pageKey = propPageKey ?? params.pageKey ?? 'dashboard'

  const { data: pageData, isLoading, error } = usePageData(pageKey)

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
        <p style={{ marginTop: 16 }}>페이지를 불러오는 중...</p>
      </div>
    )
  }

  if (error || !pageData) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <p>페이지를 불러오는데 실패했습니다.</p>
      </div>
    )
  }

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        {pageData.title}
      </Title>
      <SDUIRendererList components={pageData.components} />
    </div>
  )
}
