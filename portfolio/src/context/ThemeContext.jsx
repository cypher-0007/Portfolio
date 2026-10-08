import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'light' ? 'light' : 'dark';
    } catch {
      return 'system';
    }
  });
  const [resolvedTheme, setResolvedTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    let resolved = theme;
    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    root.setAttribute('data-theme', resolved);
    setResolvedTheme(resolved);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    if (theme !== 'system') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      const resolved = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', resolved);
      setResolvedTheme(resolved);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  const value = { theme, resolvedTheme, setTheme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
