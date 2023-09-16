import React, { useState } from "react";
import '../styles/Navbar.css'
import Logo from '../assets/pycray-logo.png'
import { Link } from 'react-router-dom';
// import '../fonts/Poppins/Poppins-Regular.ttf';
// import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
      };

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
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
                <Link to="/productgenesis"> Product Genesis </Link>
                <Link to="/Teams"> Team </Link>
                <Link to="/about"> About </Link>
                <Link to="/contactus"> Contact Us </Link>
                <button onClick={toggleNavbar}>
                    {/* <ReorderIcon /> */}
                </button>
            </div>
        </div>
    )
}

export default Navbar
