import React from 'react';
import member1 from '../../../assets/team_member_images/team_member1.jpg'
import member2 from '../../../assets/team_member_images/team_member2.jpg'
import member3 from '../../../assets/team_member_images/team_member3.jpg'
import member4 from '../../../assets/team_member_images/team_member4.jpg'
import member5 from '../../../assets/team_member_images/team_member5.jpg'
import member6 from '../../../assets/team_member_images/team_member6.jpg'
import member7 from '../../../assets/team_member_images/team_member7.jpg'
import member8 from '../../../assets/team_member_images/team_member8.jpg'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import './OurTeam.css'

const OurTeam = () => {
    return (
        <div className='mt-20 lg:mt-32'>
            <div className='text-center mb-10'>
                <h3 className='text-[14px] md:text-[16px] lg:text-xl font-semibold'>OUR CREATIVE FORCE</h3>
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Meet our team</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-16'>
                <div>
                    <div className='relative container'>
                        <img src={member1} alt="" />
                        <div className='overly'>
                            <div className='content absolute bottom-5 left-[70px] text-white flex justify-end items-center'>
                                <FaFacebook className='text-[24px] mr-5 text-black'></FaFacebook>
                                <FaTwitter className='text-[24px] mr-5 text-black'></FaTwitter>
                                <RiInstagramFill className='text-[24px] text-black'></RiInstagramFill>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-xl font-bold text-center mt-5'>SONIA TERRY</h3>
                    <h4 className=' text-center text-xl'>Decorater</h4>
                </div>

                <div>
                    <div className='relative container'>
                        <img src={member2} alt="" />
                        <div className='overly'>
                            <div className='content absolute bottom-5 left-[70px] text-white flex justify-end items-center'>
                                <FaFacebook className='text-[24px] mr-5 text-black'></FaFacebook>
                                <FaTwitter className='text-[24px] mr-5 text-black'></FaTwitter>
                                <RiInstagramFill className='text-[24px] text-black'></RiInstagramFill>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-xl font-bold text-center mt-5'>DAVID SLATER</h3>
                    <h4 className='text-center text-xl'>Designer</h4>
                </div>

                <div>
                    <div className='relative container'>
                        <img src={member3} alt="" />
                        <div className='overly'>
                            <div className='content absolute bottom-5 left-[70px] text-white flex justify-end items-center'>
                                <FaFacebook className='text-[24px] mr-5 text-black'></FaFacebook>
                                <FaTwitter className='text-[24px] mr-5 text-black'></FaTwitter>
                                <RiInstagramFill className='text-[24px] text-black'></RiInstagramFill>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-xl font-bold text-center mt-5'>SAM THOMSON</h3>
                    <h4 className='text-center text-xl'>Head designer</h4>
                </div>

                <div>
                    <div className='relative container'>
                        <img src={member4} alt="" />
                        <div className='overly'>
                            <div className='content absolute bottom-5 left-[70px] text-white flex justify-end items-center'>
                                <FaFacebook className='text-[24px] mr-5 text-black'></FaFacebook>
                                <FaTwitter className='text-[24px] mr-5 text-black'></FaTwitter>
                                <RiInstagramFill className='text-[24px] text-black'></RiInstagramFill>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-xl font-bold text-center mt-5'>JUSTIN SMITH</h3>
                    <h4 className='text-center text-xl'>3D creator</h4>
                </div>

                <div>
                    <div className='relative container'>
                        <img src={member5} alt="" />
                        <div className='overly'>
                            <div className='content absolute bottom-5 left-[70px] text-white flex justify-end items-center'>
                                <FaFacebook className='text-[24px] mr-5 text-black'></FaFacebook>
                                <FaTwitter className='text-[24px] mr-5 text-black'></FaTwitter>
                                <RiInstagramFill className='text-[24px] text-black'></RiInstagramFill>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-xl font-bold text-center mt-5'>ANDREA MACLEOD</h3>
                    <h4 className='text-center text-xl'>Art director</h4>
                </div>

                <div>
                    <div className='relative container'>
                        <img src={member6} alt="" />
                        <div className='overly'>
                            <div className='content absolute bottom-5 left-[70px] text-white flex justify-end items-center'>
                                <FaFacebook className='text-[24px] mr-5 text-black'></FaFacebook>
                                <FaTwitter className='text-[24px] mr-5 text-black'></FaTwitter>
                                <RiInstagramFill className='text-[24px] text-black'></RiInstagramFill>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-xl font-bold text-center mt-5'>AMANDA TERRY</h3>
                    <h4 className='text-center text-xl'>Store Manager</h4>
                </div>

                <div>
                    <div className='relative container'>
                        <img src={member7} alt="" />
                        <div className='overly'>
                            <div className='content absolute bottom-5 left-[70px] text-white flex justify-end items-center'>
                                <FaFacebook className='text-[24px] mr-5 text-black'></FaFacebook>
                                <FaTwitter className='text-[24px] mr-5 text-black'></FaTwitter>
                                <RiInstagramFill className='text-[24px] text-black'></RiInstagramFill>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-xl font-bold text-center mt-5'>DYLAN WALKER</h3>
                    <h4 className='text-center text-xl'>Architect</h4>
                </div>

                <div>
                    <div className='relative container'>
                        <img className='lg:h-[333.859px]' src={member8} alt="" />
                        <div className='overly'>
                            <div className='content absolute bottom-5 left-[70px] text-white flex justify-end items-center'>
                                <FaFacebook className='text-[24px] mr-5 text-black'></FaFacebook>
                                <FaTwitter className='text-[24px] mr-5 text-black'></FaTwitter>
                                <RiInstagramFill className='text-[24px] text-black'></RiInstagramFill>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-xl font-bold text-center mt-5'>YEUNG NGAI</h3>
                    <h4 className='text-center text-xl'>Lead Architect</h4>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;