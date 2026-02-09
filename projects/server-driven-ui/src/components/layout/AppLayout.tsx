import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import type { LayoutResponse } from '@/types/sdui'
import { HeaderRenderer } from '@/components/sdui/HeaderRenderer'
import { MenuRenderer } from '@/components/sdui/MenuRenderer'

const { Sider, Content } = Layout

interface AppLayoutProps {
  layoutData: LayoutResponse
}

export function AppLayout({ layoutData }: AppLayoutProps) {
  const handleDropdownClick = (key: string) => {
    if (key === 'logout') {
      console.log('Logout clicked')
    } else if (key === 'profile') {
      console.log('Profile clicked')
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderRenderer component={layoutData.header} onDropdownClick={handleDropdownClick} />
      <Layout>
        <Sider width={240} style={{ background: '#001529' }}>
          <MenuRenderer component={layoutData.sider} />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
              borderRadius: 8,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
