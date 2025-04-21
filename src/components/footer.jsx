import React, { useContext } from "react";
import { Notecontext } from "./Context";

function Footer(){
    const {isDark} = useContext(Notecontext);
    const date  = new Date();
    const year = date.getFullYear();
    
    return (
        <div className={isDark?"footer-dark":"footer"}>
            <p>copyright &#169; {year}</p>
        </div>
    );
};

export default Footer;