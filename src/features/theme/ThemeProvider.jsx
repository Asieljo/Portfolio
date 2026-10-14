import { useSyncExternalStore } from 'react';
import { ThemeContext } from './ThemeContext';

const STORAGE_KEY = 'portfolio-theme';
const THEMES = ['primary', 'secondary', 'complementary'];

// The navbar toggle cycles through the themes in order.
const getNextTheme = (current) => THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];

// Storage can be unavailable (private mode, blocked cookies); the theme then
// falls back to the primary design without persisting the choice.
const readStoredTheme = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(stored) ? stored : 'primary';
  } catch {
    return 'primary';
  }
};

// In-memory copy of the theme, so toggling keeps working when storage fails.
let currentTheme;
const listeners = new Set();

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getTheme = () => {
  currentTheme ??= readStoredTheme();
  return currentTheme;
};

// The prerendered HTML is built with the primary theme, so hydration uses it
// too and React switches to the stored theme right after. The inline script in
// index.html has already set the page colors by then.
const getServerTheme = () => 'primary';

const setTheme = (theme) => {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Persisting is optional; the in-memory theme keeps working.
  }

  listeners.forEach((listener) => listener());
};

const ThemeProvider = ({ children }) => {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggleTheme = () => {
    setTheme(getNextTheme(theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, nextTheme: getNextTheme(theme), toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
