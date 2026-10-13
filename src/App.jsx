import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Prototype from './pages/Prototype/Prototype';
import SatechExperience from './pages/SatechExperience/SatechExperience';
import PortfolioDesignSystem from './pages/PortfolioDesignSystem/PortfolioDesignSystem';
import { useScrollToTop } from './hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/work-experience" element={<SatechExperience />} />
        <Route path="/design-system" element={<PortfolioDesignSystem />} />
      </Routes>
    </>
  )
}

export default App
