import { useEffect, useState } from 'react';
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

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Persisting is optional; the in-memory theme keeps working.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(getNextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, nextTheme: getNextTheme(theme), toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
