import './header.scss';
import { useState } from 'react';
import logo from '../../resources/img/logo.svg';
import { NavLink } from 'react-router-dom';
import Button from '../UI/button/button';

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className='header__container'>
            <div className='header'>
                <div className='header_left'>
                    <div className='header__logo'>
                        <img className='' src={logo} alt=''/>
                    </div>
                    <div className={menu ? "header__menu header__menu_active" : "header__menu"} onClick={() => setMenu(!menu)}>
                        <span></span>
                    </div>
                    <div className={menu ? "header__link header__link_active" : "header__link header__link_hide"} onClick={() => setMenu(!menu)}>
                        <ul>
                            <li><NavLink exact activeStyle={{'color': '#192F44'}} to="/">
                                Product
                            </NavLink></li>
                            <li><NavLink exact activeStyle={{'color': '#192F44'}} to="/not">
                                Use Cases
                            </NavLink></li>
                            <li><NavLink exact activeStyle={{'color': '#192F44'}} to="/not">
                                Developers
                            </NavLink></li>
                            <li><NavLink exact activeStyle={{'color': '#192F44'}} to="/not">
                                Pricing
                            </NavLink></li>
                            <li><NavLink exact activeStyle={{'color': '#192F44'}} to="/not">
                                About
                            </NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='header_registr'>
                    <p><NavLink exact activeStyle={{'color': '#192F44'}} to="/not">
                        Login
                    </NavLink></p>
                    <Button mix="beige">Get API Keys</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;