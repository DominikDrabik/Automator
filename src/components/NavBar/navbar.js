import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/automator_logo_v1.png';
import menu from '../../assets/open_menu5.svg';

import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <div className="contentNavbar">
          <img src={logo} alt='Logo' className='logo'></img>
          <div className='desktopmenu'>
              <Link  className='desktopMenuListItem' to="/">Download</Link>
              <Link className='desktopMenuListItem'  to="/how-to-use">How to use</Link>
              <Link className='desktopMenuListItem' to="/example">Example</Link>

          </div>

          <img src={menu} alt="" className="mobMenu"  onClick={() => setShowMenu(!showMenu)}/> 
          <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
              <Link className='listItem' onClick={() => setShowMenu(false)} to="/">Download</Link>
              <Link className='listItem' onClick={() => setShowMenu(false)} to="/how-to-use">How to use</Link>
              <Link className='listItem' onClick={() => setShowMenu(false)} to="/example">Example</Link>
          </div>

        </div>  

        
    </nav>
  )
}

export default Navbar