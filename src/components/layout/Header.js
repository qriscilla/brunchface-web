import React from 'react';
// import toast from '../../images/toast.png';

function Header() {
    return (
        <div className='header'>
            <span className='header_left'>
                {/* <img src={toast} alt={toast} className='header_logo' /> */}
                BrunchFace
            </span>
            <span className='header_right'>
                HOME &nbsp; &nbsp; &nbsp;
                ABOUT &nbsp; &nbsp; &nbsp;
                HOW TO PLAY &nbsp; &nbsp; &nbsp;
                CONTACT &nbsp; &nbsp; &nbsp;
                TEAM
            </span>
        </div>
    )
}

export default Header;