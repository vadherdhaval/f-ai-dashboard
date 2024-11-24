import { useSelector } from "react-redux";
import { useTheme } from "./themController"
import Switch from '@mui/material/Switch';

export const ThemeUpdater = () => {
    const {toggleTheme} = useTheme();
    const {theme} = useSelector((state) => ({
        theme: state.THEME.theme
    }));

    return(
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            <label>Dark Theme</label>
            <Switch onChange={toggleTheme} />
        </div>
    )
}