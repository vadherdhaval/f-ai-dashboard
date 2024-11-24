import * as React from 'react';
import { createContext, useEffect, useState, useContext } from "react";
import { updateTheme } from './StoreManager/Slices/Theme';
import { useDispatch, useSelector } from 'react-redux';

const ThemeContext = createContext(true);

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => ({
        theme: state.THEME.theme
    }));
    const toggleTheme = () => {
        debugger;
        dispatch(updateTheme({theme:theme === "dark" ? "light" : "dark"}));
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    },[theme]);

    return(
        <ThemeContext.Provider value={{toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}