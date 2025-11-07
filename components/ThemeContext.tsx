'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const themes = [
  { name: 'Emerald', className: 'theme-emerald' },
  { name: 'Cyan', className: 'theme-cyan' },
  { name: 'Violet', className: 'theme-violet' },
  { name: 'Rose', className: 'theme-rose' },
  { name: 'Amber', className: 'theme-amber' },
];

const ThemeContext = createContext({
  theme: themes[0].className,
  setTheme: (theme: string) => {},
  themes,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(themes[0].className);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.classList.remove(...themes.map(t => t.className));
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}