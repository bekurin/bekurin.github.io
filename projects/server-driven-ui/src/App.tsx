import { Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { SDUIPage } from '@/pages/SDUIPage'
import { mockLayoutData } from '@/mocks/layoutData'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout layoutData={mockLayoutData} />}>
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
