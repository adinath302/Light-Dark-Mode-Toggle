import { useScroll } from "motion/react";
import { createContext, useState } from "react";

export const DarkModeContext = createContext();


export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(prev => !prev); //to toggle between the Mode true/false

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}