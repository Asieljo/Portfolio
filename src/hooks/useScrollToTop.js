import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// BrowserRouter keeps the window scroll between routes, so a new page would
// open at the previous page's position. Section links (router state or hash)
// are skipped because the Header scrolls to their section itself. `instant`
// overrides the global `scroll-behavior: smooth` so the jump is not animated.
export const useScrollToTop = () => {
  const { pathname, hash, state } = useLocation();
  const section = state?.section;

  useEffect(() => {
    if (hash || section) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash, section]);
};
