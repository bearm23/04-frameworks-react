import React from 'react';
import { Theme } from './theme.vm';

interface ThemeContextModel {
    theme: Theme;
    toggleTheme: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextModel>({
    theme: 'light',
    toggleTheme: () => {},
});
