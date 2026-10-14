import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeProvider from './features/theme/ThemeProvider';
import { useScrollToTop } from './hooks/useScrollToTop';

// Root layout shared by every route in src/routes.jsx. Each page renders its
// own Header, so section scrolling runs once the page has loaded.
const App = () => {
  useScrollToTop();

  return (
    <StrictMode>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
