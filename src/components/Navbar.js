import React from 'react'
import './style.css'
import Logo from '../assets/pycray-logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="left-nav">
                <div className="nav-item">
                    <div className="label">Home</div>
                </div>
                <div className="menu-item-default">
                    <div className="text-wrapper">Products Genesis</div>
                </div>
                <div className="label-wrapper">
                    <div className="text-wrapper">Team</div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper">Career</div>
                </div>
                <div className="div">
                    <div className="text-wrapper">Contact us</div>
                </div>
            </div>
            <img className="element" alt="Element" src={Logo} />
        </div>
    )
}

export default Navbar
