import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>

            <span className='footer_left'>
                <FacebookIcon className='footer_icons' style={{marginRight:'2px'}}/>
                <InstagramIcon className='footer_icons'/>
            </span>

            <span className='footer_right'>
                <Link to='/contact' style={{marginRight:'2vw'}}>Contact</Link>
                <Link to='/privacy' style={{marginRight:'2vw'}}>Privacy Policy</Link>
                <Link to='/terms'>Terms & Conditions</Link>
            </span>
            
        </div>
    )
}

export default Footer;