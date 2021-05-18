import { createContext } from 'react';

export enum Theme {
    Pink = "Pink",
    Blue = "Blue"
}

type ThemeContextType = {
    theme: Theme;
    setTheme: (value: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
