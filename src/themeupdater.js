import { useSelector } from "react-redux";
import { useTheme } from "./themController"

export const ThemeUpdater = () => {
    const {toggleTheme} = useTheme();
    const {theme} = useSelector((state) => ({
        theme: state.THEME.theme
    }))
    return(
        <div>
            <label>Toggle Theme</label>
            <input 
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
                className="inputBox"
            />
        </div>
    )
}