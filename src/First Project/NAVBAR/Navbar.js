import './Navbar.css';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi";
import { FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';

function Navbar(){

    
    const [is_menu, set_menu]= useState(false);


    return(
        <div className='navbar_container'>
            
            <h1 className='h1'>Website_Logo</h1>
            
            <ul className='navbar_ul'>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/About"> About </Link> </li>
                <li> <Link to="/Contact"> Contact </Link> </li>
                <li> <Link to="/Service"> Service </Link> </li>
            </ul>

            <div className='mobile_navbar'>
                <GiHamburgerMenu className='lines_menu_button  both_mobile_navbar_icon' />
                <FaWindowClose className='cross_menu_button  both_mobile_navbar_icon' />
            </div>
        </div>
    )

}

export default Navbar;