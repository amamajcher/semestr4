import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";

export const ThemeButton = () => {
    const { toggleTheme } = useContext(ThemeContext);

    const handleChangeTheme = () => {
        toggleTheme();
    }

    return (
        <button onClick={handleChangeTheme}>Change theme</button>
    )
}