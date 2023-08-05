import React from 'react';
import { ThemeContext } from './theme.context';
import { Theme } from './theme.vm';

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const themeSaved = window.sessionStorage.getItem('theme');
    const themeByDefault = window.location.pathname.match(/rickmorty/) ? 'dark' : 'light';
    const [theme, setTheme] = React.useState<Theme>((themeSaved ?? themeByDefault) as Theme);

    React.useEffect(() => {
        window.sessionStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = (newTheme: Theme): void => setTheme(newTheme);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};
