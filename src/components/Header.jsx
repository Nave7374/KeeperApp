import React, { useContext } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Fab } from "@mui/material";
import { Notecontext } from "./Context";

function Header(){

    const {isDark , setDarkTheme , setThemeforBody} = useContext(Notecontext);
    function handleClick(){
        setDarkTheme((prev) => !prev);
        setThemeforBody();
    }
    return (
        <div className={isDark?"header-dark":"header"}>
            <h1>Keeper </h1>
            <Fab className="themebtn" onClick={handleClick}>
                {isDark?<LightModeIcon />:<DarkModeIcon />}
            </Fab>
        </div>
    );
}

export default Header;