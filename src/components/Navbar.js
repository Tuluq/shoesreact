import React from 'react';

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar__text">
            <div className="logo">
                <img src="/img/logo.png" alt="logo"/>
             </div>
             <ul className="navbar__ul">
                 <li><a href="">Women</a></li>
                 <li><a href="">Men</a></li>
                 <li><a href="">Kids</a></li>
                 <li><a href="">Sale</a></li>
                 <li><a href="">Sign In</a></li>
             </ul>
        </div>
    </nav>
    )
}

export default Navbar;