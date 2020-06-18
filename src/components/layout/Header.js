import React from 'react';
import { Link } from 'react-router-dom';
import toast from '../../images/toast.png';
  
function Header() {
    return (

        <header className="header">

            <Link to='/'>
                <img src={toast} alt={toast} className='header_img' />
                <span className='header_title'>BRUNCHFACE</span>
            </Link>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>

            <ul className="header_menu">
                <Link to="/home"><li>HOME</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
                <Link to="/how"><li>HOW TO PLAY</li></Link>
            </ul>

        </header>

    )
}

export default Header;