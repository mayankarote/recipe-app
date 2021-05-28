import React from 'react';
import logo from "./logo2.png";

const Footer = () => {
    return (
        <div className="footer column">
             <h2  style={{marginRight: 800}}>
            <img src={logo} alt="store" style={{ width: 80, borderRadius: 100 }} />
            Created by: Mayanka Rote @2021
                </h2>
        </div>
            
    );
};

export default Footer;