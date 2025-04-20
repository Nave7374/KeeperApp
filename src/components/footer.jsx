import React from "react";

function Footer(){
    
    const date  = new Date();
    const year = date.getFullYear();
    
    return (
        <div className="footer">
            <p>copyright &#169; {year}</p>
        </div>
    );
};

export default Footer;