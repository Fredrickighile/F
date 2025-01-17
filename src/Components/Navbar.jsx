import React, { useEffect, useState,  } from 'react';
import { Link } from 'react-router-dom';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from './Button';
import './Navbar.css';



function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);  

    function handleClick() {
        setClick(!click); 

    }
    function closeMobileMenu(){
        setClick(false)
    }
    function showButton(){
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    // Add resize event listener using useEffect
    useEffect(() => {
        showButton(); // Initial check
        window.addEventListener('resize', showButton);
        
        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', showButton);
        };
    }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu  }>FRVN
            <LocalAirportIcon  />
            
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            
            {click ? <CloseIcon /> : <MenuIcon />} 
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
              
            </li>
            <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
                </Link>
              
                
            </li>
            <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
                </Link>
              
                
            </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
                </Link>
              
                
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
