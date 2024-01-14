import React, { useState, useEffect } from 'react'
import { MdOutlineLightMode ,MdDarkMode} from "react-icons/md";



const Darkmode = () => {
    const [theme, setTheme] = useState("dark")

    function toggle() {
        if (theme === "light") { setTheme("dark") } else { setTheme("light") }
    }
    useEffect(() => {

        document.body.className = theme;
    }, [theme])
    return (
        <>
            <button onClick={toggle}>{theme=="light"?<MdOutlineLightMode size={25}/>:<MdDarkMode size={25}/>}</button>
        </>)
}

export default Darkmode;