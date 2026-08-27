import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import CaseStudy from './pages/CaseStudy/CaseStudy'
import Prototype from './pages/Prototype/Prototype'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/prototype" element={<Prototype />} />
      </Routes>
    </>
  )
}

export default App
