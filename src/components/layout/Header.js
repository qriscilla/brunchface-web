import React from 'react';
import toast from '../../images/toast.png';
  
function Header() {
    return (

        <header className="header">

            <a href='/'>
                <img src={toast} alt={toast} className='header_img' />
                <span className='header_title'>BrunchFace</span>
            </a>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>

            <ul className="header_menu">
                <a href="/"><li>HOME</li></a>
                <a href="/"><li>ABOUT</li></a>
                <a href="/"><li>HOW TO PLAY</li></a>
                <a href="/"><li>CONTACT</li></a>
                <a href="/"><li>TEAM</li></a>
            </ul>

        </header>

    )
}

export default Header;