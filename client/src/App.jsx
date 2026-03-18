import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Pages (we'll build these next step)
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App