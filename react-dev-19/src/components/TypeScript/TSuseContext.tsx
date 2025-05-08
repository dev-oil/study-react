import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
const ThemeContext = createContext<Theme>('system');

const useGetTheme = () => useContext(ThemeContext);

const MyComponent = () => {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export const TSuseContext = () => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  );
};
