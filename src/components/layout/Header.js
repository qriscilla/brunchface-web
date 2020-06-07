import React from 'react';
import toast from '../../images/toast.png';
  
function Header() {
    return (

        <header className="header">

            <a href='/'>
                <img src={toast} alt={toast} className='logo_img' />
                <span className='logo_title'>BrunchFace</span>
            </a>

            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>

            <ul className="menu">
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">HOW TO PLAY</a></li>
                <li><a href="/">CONTACT</a></li>
                <li><a href="/">TEAM</a></li>
            </ul>

        </header>

        // <div className='header'>
        //     <span className='header_left'>
        //         <img src={toast} alt={toast} className='header_logo' />
        //         BrunchFace
        //     </span>
        //     <span className='header_right'>
        //         HOME &nbsp; &nbsp; &nbsp;
        //         ABOUT &nbsp; &nbsp; &nbsp;
        //         HOW TO PLAY &nbsp; &nbsp; &nbsp;
        //         CONTACT &nbsp; &nbsp; &nbsp;
        //         TEAM
        //     </span>
        // </div>
    )
}

export default Header;

// <Grid container className='header'>
//     <Grid item xs={3}>
//         <img src={toast} alt={toast} className='header_logo' />
//         BrunchFace
//     </Grid>
//     <Grid item xs={9} container justify='flex-end'>
//         HOME &nbsp; &nbsp; &nbsp;
//         ABOUT &nbsp; &nbsp; &nbsp;
//         HOW TO PLAY &nbsp; &nbsp; &nbsp;
//         CONTACT &nbsp; &nbsp; &nbsp;
//         TEAM
//     </Grid>
// </Grid>