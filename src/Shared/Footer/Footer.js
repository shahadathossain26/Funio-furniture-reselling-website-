import React from 'react';
import logo from '../../assets/logo.png'
import paymentImages from '../../assets/information_images/payment_images.svg'
import { HiOutlinePhoneIncoming, HiOutlineLocationMarker, HiOutlineMailOpen, HiOutlineClock } from "react-icons/hi";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='mt-20 bg-[#f1f0f5]'>
            <div className='lg:flex justify-between items-center w-full px-10 lg:px-20 py-16'>
                <div className='lg:w-2/5'>
                    <img className='lg:w-[200px] w-[150px] mb-5' src={logo} alt="" />
                    <p className='mb-10 text-[20px] text-justify pr-5'>We’re a team that knows creativity doesn’t just happen; it takes passion and a lot of hard work. That’s why we’re committed to making it easier for people to get their creative projects done.</p>
                    <img className='w-[300px]' src={paymentImages} alt="" />
                </div>

                <div className='mt-10 lg:mt-0'>
                    <h2 className='text-3xl mb-5'>Get In Touch</h2>
                    <div className='flex items-center mb-7'>
                        <HiOutlinePhoneIncoming className='text-xl mr-2'></HiOutlinePhoneIncoming>
                        <span>+880 1924101925</span>
                    </div>

                    <div className='flex items-center mb-7'>
                        <HiOutlineLocationMarker className='text-xl mr-2'></HiOutlineLocationMarker>
                        <span>Dhaka, Bangladesh</span>
                    </div>

                    <div className='flex items-center mb-7'>
                        <HiOutlineMailOpen className='text-xl mr-2'></HiOutlineMailOpen>
                        <span>shiimran172372@gmail.com</span>
                    </div>

                    <div className='flex items-center mb-7'>
                        <HiOutlineClock className='text-xl mr-2'></HiOutlineClock>
                        <span>Mon-Fri: 10:00 - 18:00</span>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl mb-5'>Other Pages</h2>
                    <p className='mb-5'>About</p>
                    <p className='mb-5'>Dashboard</p>
                    <p className='mb-5'>Home</p>
                    <p className='mb-5'>Blog</p>
                    <p className='mb-3'>LogIn/Register</p>
                </div>

                <div>
                    <h2 className='text-3xl mb-5'>Essential</h2>
                    <p className='mb-5'>Start a Return</p>
                    <p className='mb-5'>Contact Us</p>
                    <p className='mb-5'>Shipping FAQ</p>
                    <p className='mb-5'>Terms and Conditions</p>
                    <p className='mb-3'>Privacy and Policy</p>
                </div>
            </div>

            <hr className='border-1 border-slate-400  lg:mb-10 mb-5 lg:mx-20 mx-10' />

            <div className='lg:px-20 px-10 lg:flex justify-between items-center pb-5'>
                <div>
                    <p className='text-center'>© 2023 Funio All rights reserved. Designed by Shahadat Hossain Imran</p>
                </div>
                <div className='flex mt-4 lg:mt-0 justify-center'>
                    <BsFacebook className='lg:ml-5 mr-5 lg:mr-0 text-2xl'></BsFacebook>
                    <BsTwitter className='lg:ml-5 mr-5 lg:mr-0 text-2xl'></BsTwitter>
                    <BsYoutube className='lg:ml-5 mr-5 lg:mr-0 text-2xl'></BsYoutube>
                    <BsInstagram className='lg:ml-5 mr-5 lg:mr-0 text-2xl'></BsInstagram>
                </div>
            </div>
        </div>
    );
};

export default Footer;