import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [loginBtnName, setLoginBtnName] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li><button className='loginBtn' onClick={
                        () => {
                            loginBtnName === 'Login'? setLoginBtnName('Logout') : setLoginBtnName('Login');
                        }
                    }>{loginBtnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;