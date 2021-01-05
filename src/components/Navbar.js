import React,{ useState, useEffect } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import './Navbar.css';




function Navbar() {
    const [click, setclick] = useState(false);
    const [navbar, setnavbar] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setclick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);

    const checkBackground = () => {
        if(window.scrollY >=80){
            setnavbar(true);
        }else {
            setnavbar(false);
        }
    }
    
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', checkBackground);

        return(
            <nav className={navbar? 'NavbarItems active' : 'NavbarItems'}>
                <a href='#home' className='A'><h1 className='navbar-logo'>KP <i className='fab fa-react'></i></h1></a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        )
                    })}

                </ul>
                {button && <Button>Sign Up</Button>}
            </nav>
        )
    }
export default Navbar