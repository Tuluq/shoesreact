import React from 'react';
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="banner">    
            <Navbar />
            <div className="banner__content">
                <div className="container">
                    <div className="banner__text">
                    <h3>Stay Elevated</h3>
                    <p>Add even more style add flair to your new seasons looks with the Run Star Hike,
                    Chuck Tyler All Star Move and more...
                    </p>   
                    <div className="banner__btn">
                        <a href="" className="btn btn-smart">Shop All Platforms</a> 
                    </div>
                     </div>   
                </div>
            </div>
        </div>
    );
};

export default Header;
