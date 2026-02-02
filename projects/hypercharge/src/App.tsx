import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MapDetailPage from './pages/MapDetailPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maps/:mapId" element={<MapDetailPage />} />
      </Routes>
    </Layout>
  )
}

export default App
