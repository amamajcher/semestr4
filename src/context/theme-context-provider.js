import { ThemeContext, themes } from "./theme-context"

import { useState } from "react"

export const ThemeContextProvider = ({children}) => {
    const [ theme, setTheme ] = useState(themes.light)
    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}