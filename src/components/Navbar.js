import React, { useState } from "react";
import '../styles/Navbar.css'
import Logo from '../assets/pycray-logo.png'
import { Link } from 'react-router-dom';
import menuBtn from '../assets/menu-btn.png';
import crossBtn from '../assets/cross-btn.png';
// import '../fonts/Poppins/Poppins-Regular.ttf';
// import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="leftSide">
                <Link to="/">
                    <img src={Logo} alt="companyLogo"/>
                </Link>
                {/* <img src={Logo} /> */}
                {/* <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/productgenesis"> Product Genesis </Link>
                    <Link to="/team"> Team </Link>
                    <Link to="/career"> Career </Link>
                    <Link to="/contactus"> Contact Us </Link>
                </div> */}
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                {/* <Link to="/productgenesis"> Product Genesis </Link> */}
                <Link to="/Teams"> Team </Link>
                <Link to="/about"> About </Link>
                <Link to="/contactus"> Contact Us </Link>
                <button onClick={toggleMenu}>
                    <img src={menuBtn} alt="menu-btn"/>
                </button>
                {isMenuOpen && <div className="mobile-menu-window">
                    <div className="menubar">
                        <div className="leftSide">
                            <img src={Logo} alt="companyLogo" onClick={() => { window.location.href = "/"; }}/>
                        </div>
                        <div className="rightSide">
                            <button onClick={toggleMenu}>
                                <img src={crossBtn} alt="cross-btn" />
                            </button>
                        </div>
                    </div>
                    <div className="menubarContent">
                        <div className="item text-center" role="button" onClick={() => { window.location.href = "/"; }}>Home</div>
                        
                        <div className="menubarDividerLine">
                            <svg width="153" height="1" viewBox="0 0 153 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.993164" y1="0.5" x2="152.006" y2="0.5" stroke="#959595" stroke-opacity="0.42"/>
                            </svg>
                        </div>
                        
                        <div className="item text-center" role="button" onClick={() => { window.location.href = "/about"; }}>About Us</div>
                        
                        <div className="menubarDividerLine">
                            <svg width="153" height="1" viewBox="0 0 153 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.993164" y1="0.5" x2="152.006" y2="0.5" stroke="#959595" stroke-opacity="0.42"/>
                            </svg>
                        </div>
                        
                        <div className="item text-center" role="button" onClick={() => { window.location.href = "/contactus"; }}>Contact Us</div>

                        <div className="menubarDividerLine">
                            <svg width="153" height="1" viewBox="0 0 153 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.993164" y1="0.5" x2="152.006" y2="0.5" stroke="#959595" stroke-opacity="0.42"/>
                            </svg>
                        </div>

                        <div className="item text-center" role="button" onClick={() => { window.location.href = "/Teams"; }}>Team</div>

                        <div className="menubarDividerLine">
                            <svg width="153" height="1" viewBox="0 0 153 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.993164" y1="0.5" x2="152.006" y2="0.5" stroke="#959595" stroke-opacity="0.42"/>
                            </svg>
                        </div>
                    </div>
                    <p className="menubarFooter">© 2023 PyCray. All Rights Reserved.</p>
                </div>}
            </div>
        </div>
    )
}

export default Navbar
