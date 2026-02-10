import { Routes, Route, Navigate } from 'react-router-dom'
import { Spin } from 'antd'
import { AppLayout } from '@/components/layout/AppLayout'
import { SDUIPage } from '@/pages/SDUIPage'
import { useLayoutData } from '@/hooks/useLayoutData'

function App() {
  const { data: layoutData, isLoading, error } = useLayoutData()

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    )
  }

  if (error || !layoutData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>레이아웃을 불러오는데 실패했습니다.</p>
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout layoutData={layoutData} />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<SDUIPage pageKey="dashboard" />} />
        <Route path="statistics/maps" element={<SDUIPage pageKey="stat-map" />} />
        <Route path="statistics/maps/:mapId" element={<SDUIPage pageKey="stat-map-detail" />} />
        <Route path="statistics/brawlers" element={<SDUIPage pageKey="stat-brawler" />} />
        <Route path="statistics/combinations" element={<SDUIPage pageKey="stat-combination" />} />
        <Route path="batch" element={<SDUIPage pageKey="batch" />} />
        <Route path="settings" element={<SDUIPage pageKey="settings" />} />
      </Route>
    </Routes>
  )
}

export default App
