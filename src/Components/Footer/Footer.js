import React from 'react';
import './Footer.css';
import { BrowserRouter } from 'react-router-dom'

const Footer = () => {
    return (
        <BrowserRouter>
            <div className="Footer">
                <div className="Footer-main">
                  <span className = "Footer-madeby">Made by </span><span className="Footer-code">Codeindore()</span>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default Footer;