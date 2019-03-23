import React from "react";

export const themes = {
    type:new Set(['dark', 'light']),
    primary: new Set([]),
    secondary: new Set([]),
    background: new Set(['#EEAB46', '#EFDCC8', '#EEAFAB', '#6D9F99', '#EC666A'])
};
export const defaultTheme = {
    type: themes.type[1],
    primary: '',
    secondary: '',
    background: themes.background[3]
};

export const ThemeContext = React.createContext({
    theme:defaultTheme,
    toggleType: () => {},
    setColor: () => {}
});