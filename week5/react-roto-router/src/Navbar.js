import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul id="navbar">
                <li className="navLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink">
                    <Link to="/about">About</Link>
                </li>
                <li className="navLink">
                    <Link to="/services">Services</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;