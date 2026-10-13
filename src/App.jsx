import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useScrollToTop } from './hooks/useScrollToTop';

// Home ships in the main bundle; the other pages load on demand so the landing
// does not download their code. Each page renders its own Header, so section
// scrolling runs once the page has loaded.
const CaseStudy = lazy(() => import('./pages/CaseStudy/CaseStudy'));
const Prototype = lazy(() => import('./pages/Prototype/Prototype'));
const SatechExperience = lazy(() => import('./pages/SatechExperience/SatechExperience'));
const PortfolioDesignSystem = lazy(() => import('./pages/PortfolioDesignSystem/PortfolioDesignSystem'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  useScrollToTop();

  // Keep the paths in sync with `routes` in vite.config.js, which gives each
  // one its own index.html on GitHub Pages.
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/prototype" element={<Prototype />} />
        <Route path="/work-experience" element={<SatechExperience />} />
        <Route path="/design-system" element={<PortfolioDesignSystem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
