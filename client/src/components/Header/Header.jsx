import React from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)

    const getMenuStyle = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className='h-wrapper'>
            <div className="flexCenter paddings innerWidth h-container">
                <Link to="/">
                    <img src="./logo.png" alt="logo" width={150}></img>
                </Link>

                <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
                    <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
                        <NavLink to="/properties">Properties</NavLink>
                        
                        
                        <a href="mailto:sohailfarhan000@gmail.com">Contact</a>
                    
                    {/* Login button */}
                    <button className="button">Login</button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>


        </section>
    )
}
export default Header