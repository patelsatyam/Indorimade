import React from 'react';
import './Header.css';
import logo from '../../Images/Indorimade.svg';
import { Link, BrowserRouter } from 'react-router-dom'

const Header = () => {
    return (
        <BrowserRouter>
            <div className="Header">
                <div className="Header-main">
                    <div>
                        <img src={logo} alt="Indorimade logo" className="Header-img" />
                    </div>
                    <ul className="Header-ul">
                        <li className="Header-li"><a href = "https://docs.google.com/forms/d/e/1FAIpQLSc_dFQFsuXLRVDfGAWEfDBbwQR_hWBhStDZBYFuE-EkHwGKUw/viewform?usp=sf_link">Add your Startup</a></li>
                        <li className="Header-li about"><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default Header;