import { useState } from 'react';
import { Link } from 'react-router-dom';
import Brand_Logo from '../assets/Brand_Logo.png';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [loginBtnName, setLoginBtnName] = useState('Login');

    const cartItems = useSelector((store) => (store.cart.items));
    const itemCount = cartItems.reduce((count, item) => {
        return count + item.quantity;
    }, 0);

    return (
        <div className='flex h-[100px] bg-gray-200 justify-between'>
            <div>
                <Link to="/">
                    <img className='h-full w-full' alt='Logo Image'
                    src={Brand_Logo}/>
                </Link>
            </div>

            <div className='content-center px-4 mx-4'>
                <ul className='flex'>
                    <li className='mx-2 text-lg hover:bg-gray-300 rounded-lg p-2'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='mx-2 text-lg hover:bg-gray-300 rounded-lg p-2'>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className='mx-2 text-lg hover:bg-gray-300 rounded-lg p-2'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='mx-2 text-lg hover:bg-gray-300 rounded-lg p-2 transition-colors'>
                        <Link to="/cart">
                            <span className='text-2xl'>🛒</span>
                            <span>{itemCount}</span>
                        </Link>
                    </li>
                    <li className='mx-2 text-lg hover:bg-gray-300 rounded-lg p-2'>
                        <button onClick={
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