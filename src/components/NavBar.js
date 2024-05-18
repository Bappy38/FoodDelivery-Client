import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'

const NavBar = () => {
    const [loginBtnName, setLoginBtnName] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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