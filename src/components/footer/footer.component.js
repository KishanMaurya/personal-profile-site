import React from "react";
import "./footer.styles.scss";

const Footer = () => {
    return(
        <div className="footer">
            <p> 
                <span role="img" aria-label="Love"> 💖 </span> &  
                <span role="img" aria-label="Light">✨</span>, From Mansi Agarawal, Always.
            </p>
            <p><span>&copy; {new Date().getFullYear()}. Made with M-Agl</span></p>
        </div>
    )
}

export default Footer;