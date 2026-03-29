import { Routes, Route } from 'react-router-dom'

function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>미국주식 밸류 리밸런싱</h1>
      <p>라오어의 미국주식 밸류 리밸런싱 계산하는 웹 페이지</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
