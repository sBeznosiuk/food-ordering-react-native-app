import React, {FC, useState} from 'react';

export enum Themes {
  Light = 'Light',
  Dark = 'Dark',
}

interface ThemeContextType {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}

export const ThemeContext =
  React.createContext<ThemeContextType>(
    {} as ThemeContextType,
  );

export const ThemeProvider: FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [theme, setTheme] = useState<Themes>(Themes.Light);
  const themeData = {theme, setTheme};

  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
};
