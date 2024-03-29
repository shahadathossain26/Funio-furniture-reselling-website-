import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AiOutlineHome, AiOutlineDashboard } from "react-icons/ai";
import { FaBlog, FaLink } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import './Header.css'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {

        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }
    return (

        <div className="navbar bg-base-100 px-10  shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                    </ul>
                </div>
                <img className='w-[60px] md:w-[110px] lg:w-[170px]' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* <ul className="menu menu-horizontal px-1">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Dashboard</a></li>
                    <li><a href='/'>Blog</a></li>
                </ul> */}
                <div className='flex relative w-[400px] h-[70px] bg-white   justify-center items-center rounded'>
                    <ul className='w-[350px] h-full flex justify-between items-center'>
                        <Link to='/'>
                            <li className="list focus:bg-black">
                                <a href="/">
                                    <span className="icon"><AiOutlineHome></AiOutlineHome></span>
                                    <span className="text">Home</span>
                                </a>
                            </li>
                        </Link>

                        <li className="list">
                            <a href="/">
                                <span className="icon"><RiInformationLine></RiInformationLine></span>
                                <span className="text">About</span>
                            </a>
                        </li>

                        <Link to='/dashboard'>
                            <li className="list">
                                <a href="/">
                                    <span className="icon"><AiOutlineDashboard></AiOutlineDashboard></span>
                                    <span className="text">Dashboard</span>
                                </a>
                            </li>
                        </Link>

                        <li className="list">
                            <a href="/">
                                <span className="icon"><FaBlog></FaBlog></span>
                                <span className="text">blog</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button onClick={handleLogout} className='text-[12px] md:text-[15px] lg:text-[18px] bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-xl font-semibold'>LogOut</button>
                        : <Link to='/login'><button className='text-[12px] md:text-[15px] lg:text-[18px] bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-xl font-semibold'>LogIn</button></Link>
                }
            </div>
        </div>

    );
};

export default Header;