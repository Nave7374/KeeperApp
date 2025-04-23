import React, { useContext } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Fab , Tooltip } from "@mui/material";
import { Notecontext } from "./Context";
import ClearIcon from '@mui/icons-material/Clear';

function Header(){

    const {isDark , setDarkTheme , setThemeforBody , handleClear} = useContext(Notecontext);
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
            <Tooltip title="Clear All Item" arrow>
                <Fab style={{marginLeft:"10px"}} onClick={handleClear}>
                    <ClearIcon />
                </Fab>
            </Tooltip>
        </div>
    );
}

export default Header;