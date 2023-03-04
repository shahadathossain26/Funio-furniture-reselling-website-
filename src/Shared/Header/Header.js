import React from 'react';

import logo from '../../assets/logo.png'

const Header = () => {
    return (

        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Dashboard</a></li>
                        <li><a href='/'>Blog</a></li>
                    </ul>
                </div>
                <img className='w-[60px] md:w-[110px] lg:w-[170px]' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Dashboard</a></li>
                    <li><a href='/'>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='text-[12px] md:text-[15px] lg:text-[18px] bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-xl font-semibold'>LogIn</button>
            </div>
        </div>

    );
};

export default Header;