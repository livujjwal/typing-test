import { useContext, useState } from "react";
import themeContext from "./themeContext";
import themeOptions from "../Data/theme";
import { useSearchParams } from "react-router-dom";
const ThemeProvider = ({childern}) => {

    const [theme,setTheme] = useState(themeOptions[0].value)
    const values = {
        theme,
        setTheme
    }
    return (<div>
        <themeContext.Provider value={values} >
 {childern}
        </themeContext.Provider >
    </div>)
}
export const useTheme = ()=> useContext(themeContext)
export default ThemeProvider;