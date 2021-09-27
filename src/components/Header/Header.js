import React from 'react';
import logo from '../../images/sopuerSponsor.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header-aria">
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder="Search your favorite company" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;