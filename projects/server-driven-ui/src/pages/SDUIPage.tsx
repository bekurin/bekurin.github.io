import { Typography, Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { SDUIRendererList } from '@/components/sdui'
import { getPageData } from '@/mocks/pageData'

const { Title } = Typography

interface SDUIPageProps {
  pageKey?: string
}

export function SDUIPage({ pageKey: propPageKey }: SDUIPageProps) {
  const params = useParams()
  const pageKey = propPageKey ?? params.pageKey ?? 'dashboard'

  const pageData = getPageData(pageKey)

  if (!pageData) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
        <p style={{ marginTop: 16 }}>페이지를 불러오는 중...</p>
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
