import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Prototype from './pages/Prototype/Prototype';
import SatechExperience from './pages/SatechExperience/SatechExperience';
import { useScrollToTop } from './hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/satech" element={<SatechExperience />} />
      </Routes>
    </>
  )
}

export default App
