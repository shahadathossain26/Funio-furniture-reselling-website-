import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';
import image1 from '../../../assets/new_products_images/product1.jpg'
import image2 from '../../../assets/new_products_images/product2.jpg'
import image3 from '../../../assets/new_products_images/product3.jpg'
import image4 from '../../../assets/new_products_images/product4.jpg'
import image5 from '../../../assets/new_products_images/product5.jpg'
import image6 from '../../../assets/new_products_images/product6.jpg'
import image7 from '../../../assets/new_products_images/product7.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineHeart, AiOutlineStar, AiFillStar } from "react-icons/ai";

const NewProducts = () => {
    return (
        <div className='mb-32'>
            <div className='text-center mb-20'>
                <h3 className='text-[14px] md:text-[16px] lg:text-xl font-semibold'>SEE OUR</h3>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>New Selling Products</h2>
            </div>

            <Swiper
                // effect={'coverflow'}

                centeredSlides={true}
                loop={true}
                slidesPerView={'4'}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    }
                }
                // autoplay={{ delay: 2000 }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={
                    {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true
                    }
                }
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className='swiper_container'
            >
                <SwiperSlide>
                    <div className='relative cursor-pointer mx-2'>
                        <div >
                            <img className='' src={image1} alt="" />
                        </div>
                        <div className=' bg-slate-300 w-[50px] px-2 py-2 text-[14px] rounded-lg text-black font-bold text-center absolute top-5 left-5 invisible lg:visible'>
                            -29%
                        </div>
                        <div className='text-[25px] bg-white shadow-xl w-[40px] px-2 py-1 rounded-[50%] absolute top-5 right-5 invisible lg:visible'>
                            <AiOutlineHeart className='mx-auto hover:text-red-500'></AiOutlineHeart>
                        </div>

                        <div >
                            <h3 className='text-[8px] md:text-[12px] lg:text-[18px] text-black font-semibold'>Delphine Cane Velvet Accent Chair</h3>
                            <div className='lg:flex justify-between items-center'>
                                <div className='mt-[-8px] md:mt-1'>
                                    <span className='text-[8px] md:text-[15px] lg:text-[18px] font-bold text-black'>$205.69</span>
                                    <span className='ml-[2px] md:ml-[4px] lg:ml-2 text-[6px] md:text-[12px] lg:text-[15px]'><del>$289.70</del></span>
                                </div>
                                <div className='mt-[-8px] md:mt-1'>
                                    <button className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px]'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex items-center invisible lg:visible'>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                                <span className='text-black font-semibold text-[15px] ml-3'>4.00 rating</span>
                            </div>

                            <div className='flex items-center justify-between invisible lg:visible'>
                                <progress className="progress progress-error w-56 h-[6px]" value="70" max="100"></progress>
                                <p><span>Sold: 32/</span><span className='text-error'>49</span></p>
                            </div>

                            <div className='mt-2 text-green-800 font-[500]'>
                                3 Day Delivery
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative cursor-pointer mx-2'>
                        <div >
                            <img className='' src={image2} alt="" />
                        </div>
                        <div className=' bg-slate-300 w-[50px] px-2 py-2 text-[14px] rounded-lg text-black font-bold text-center absolute top-5 left-5 invisible lg:visible'>
                            -32%
                        </div>
                        <div className='text-[25px] bg-white shadow-xl w-[40px] px-2 py-1 rounded-[50%] absolute top-5 right-5 invisible lg:visible'>
                            <AiOutlineHeart className='mx-auto hover:text-red-500'></AiOutlineHeart>
                        </div>

                        <div >
                            <h3 className='text-[8px] md:text-[12px] lg:text-[18px] text-black font-semibold'>CH24 Wishbone Chair</h3>
                            <div className='lg:flex justify-between items-center'>
                                <div className='mt-[-8px] md:mt-1'>
                                    <span className='text-[8px] md:text-[15px] lg:text-[18px] font-bold text-black'>$247.52</span>
                                    <span className='ml-[2px] md:ml-[4px] lg:ml-2 text-[6px] md:text-[12px] lg:text-[15px]'><del>$364.00</del></span>
                                </div>
                                <div className='mt-[-8px] md:mt-1'>
                                    <button className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px]'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex items-center invisible lg:visible'>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                                <span className='text-black font-semibold text-[15px] ml-3'>4.00 rating</span>
                            </div>

                            <div className='flex items-center justify-between invisible lg:visible'>
                                <progress className="progress progress-error w-56 h-[6px]" value="55" max="100"></progress>
                                <p><span>Sold: 27/</span><span className='text-error'>53</span></p>
                            </div>

                            <div className='mt-2 text-green-800 font-[500]'>
                                2 Day Delivery
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative cursor-pointer mx-2'>
                        <div >
                            <img className='' src={image3} alt="" />
                        </div>
                        <div className=' bg-slate-300 w-[50px] px-2 py-2 text-[14px] rounded-lg text-black font-bold text-center absolute top-5 left-5 invisible lg:visible'>
                            -20%
                        </div>
                        <div className='text-[25px] bg-white shadow-xl w-[40px] px-2 py-1 rounded-[50%] absolute top-5 right-5 invisible lg:visible'>
                            <AiOutlineHeart className='mx-auto hover:text-red-500'></AiOutlineHeart>
                        </div>

                        <div >
                            <h3 className='text-[8px] md:text-[12px] lg:text-[18px] text-black font-semibold'>Baptisia Square Coffe Table</h3>
                            <div className='lg:flex justify-between items-center'>
                                <div className='mt-[-8px] md:mt-1'>
                                    <span className='text-[8px] md:text-[15px] lg:text-[18px] font-bold text-black'>$359.2</span>
                                    <span className='ml-[2px] md:ml-[4px] lg:ml-2 text-[6px] md:text-[12px] lg:text-[15px]'><del>$449.00</del></span>
                                </div>
                                <div className='mt-[-8px] md:mt-1'>
                                    <button className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px]'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex items-center invisible lg:visible'>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                                <span className='text-black font-semibold text-[15px] ml-3'>4.00 rating</span>
                            </div>

                            <div className='flex items-center justify-between invisible lg:visible'>
                                <progress className="progress progress-error w-56 h-[6px]" value="75" max="100"></progress>
                                <p><span>Sold: 13/</span><span className='text-error'>18</span></p>
                            </div>

                            <div className='mt-2 text-green-800 font-[500]'>
                                2 Day Delivery
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative cursor-pointer mx-2'>
                        <div >
                            <img className='' src={image4} alt="" />
                        </div>
                        <div className=' bg-slate-300 w-[50px] px-2 py-2 text-[14px] rounded-lg text-black font-bold text-center absolute top-5 left-5 invisible lg:visible'>
                            -40%
                        </div>
                        <div className='text-[25px] bg-white shadow-xl w-[40px] px-2 py-1 rounded-[50%] absolute top-5 right-5 invisible lg:visible'>
                            <AiOutlineHeart className='mx-auto hover:text-red-500'></AiOutlineHeart>
                        </div>

                        <div >
                            <h3 className='text-[8px] md:text-[12px] lg:text-[18px] text-black font-semibold'>Hey-About A Chair AAC 22</h3>
                            <div className='lg:flex justify-between items-center'>
                                <div className='mt-[-8px] md:mt-1'>
                                    <span className='text-[8px] md:text-[15px] lg:text-[18px] font-bold text-black'>$149.4</span>
                                    <span className='ml-[2px] md:ml-[4px] lg:ml-2 text-[6px] md:text-[12px] lg:text-[15px]'><del>$249.00</del></span>
                                </div>
                                <div className='mt-[-8px] md:mt-1'>
                                    <button className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px]'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex items-center invisible lg:visible'>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                                <span className='text-black font-semibold text-[15px] ml-3'>4.00 rating</span>
                            </div>

                            <div className='flex items-center justify-between invisible lg:visible'>
                                <progress className="progress progress-error w-56 h-[6px]" value="35" max="100"></progress>
                                <p><span>Sold: 38/</span><span className='text-error'>91</span></p>
                            </div>

                            <div className='mt-2 text-green-800 font-[500]'>
                                3 Day Delivery
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative cursor-pointer mx-2'>
                        <div >
                            <img className='' src={image5} alt="" />
                        </div>
                        <div className=' bg-slate-300 w-[50px] px-2 py-2 text-[14px] rounded-lg text-black font-bold text-center absolute top-5 left-5 invisible lg:visible'>
                            -15%
                        </div>
                        <div className='text-[25px] bg-white shadow-xl w-[40px] px-2 py-1 rounded-[50%] absolute top-5 right-5 invisible lg:visible'>
                            <AiOutlineHeart className='mx-auto hover:text-red-500'></AiOutlineHeart>
                        </div>

                        <div >
                            <h3 className='text-[8px] md:text-[12px] lg:text-[18px] text-black font-semibold'>Nikari Arte Marfa Stool</h3>
                            <div className='lg:flex justify-between items-center'>
                                <div className='mt-[-8px] md:mt-1'>
                                    <span className='text-[8px] md:text-[15px] lg:text-[18px] font-bold text-black'>$804.1</span>
                                    <span className='ml-[2px] md:ml-[4px] lg:ml-2 text-[6px] md:text-[12px] lg:text-[15px]'><del>$946.00</del></span>
                                </div>
                                <div className='mt-[-8px] md:mt-1'>
                                    <button className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px]'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex items-center invisible lg:visible'>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                                <span className='text-black font-semibold text-[15px] ml-3'>4.00 rating</span>
                            </div>

                            <div className='flex items-center justify-between invisible lg:visible'>
                                <progress className="progress progress-error w-56 h-[6px]" value="85" max="100"></progress>
                                <p><span>Sold: 9/</span><span className='text-error'>11</span></p>
                            </div>

                            <div className='mt-2 text-green-800 font-[500]'>
                                3 Day Delivery
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative cursor-pointer mx-2'>
                        <div >
                            <img className='' src={image6} alt="" />
                        </div>
                        <div className=' bg-slate-300 w-[50px] px-2 py-2 text-[14px] rounded-lg text-black font-bold text-center absolute top-5 left-5 invisible lg:visible'>
                            -27%
                        </div>
                        <div className='text-[25px] bg-white shadow-xl w-[40px] px-2 py-1 rounded-[50%] absolute top-5 right-5 invisible lg:visible'>
                            <AiOutlineHeart className='mx-auto hover:text-red-500'></AiOutlineHeart>
                        </div>

                        <div >
                            <h3 className='text-[8px] md:text-[12px] lg:text-[18px] text-black font-semibold'>Lenia Sohva Sofa, Ash</h3>
                            <div className='lg:flex justify-between items-center'>
                                <div className='mt-[-8px] md:mt-1'>
                                    <span className='text-[8px] md:text-[15px] lg:text-[18px] font-bold text-black'>$729.27</span>
                                    <span className='ml-[2px] md:ml-[4px] lg:ml-2 text-[6px] md:text-[12px] lg:text-[15px]'><del>$999.00</del></span>
                                </div>
                                <div className='mt-[-8px] md:mt-1'>
                                    <button className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px]'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex items-center invisible lg:visible'>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                                <span className='text-black font-semibold text-[15px] ml-3'>4.00 rating</span>
                            </div>

                            <div className='flex items-center justify-between invisible lg:visible'>
                                <progress className="progress progress-error w-56 h-[6px]" value="30" max="100"></progress>
                                <p><span>Sold: 12/</span><span className='text-error'>40</span></p>
                            </div>

                            <div className='mt-2 text-green-800 font-[500]'>
                                1 Day Delivery
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative cursor-pointer mx-2'>
                        <div >
                            <img className='' src={image7} alt="" />
                        </div>
                        <div className=' bg-slate-300 w-[50px] px-2 py-2 text-[14px] rounded-lg text-black font-bold text-center absolute top-5 left-5 invisible lg:visible'>
                            -30%
                        </div>
                        <div className='text-[25px] bg-white shadow-xl w-[40px] px-2 py-1 rounded-[50%] absolute top-5 right-5 invisible lg:visible'>
                            <AiOutlineHeart className='mx-auto hover:text-red-500'></AiOutlineHeart>
                        </div>

                        <div >
                            <h3 className='text-[8px] md:text-[12px] lg:text-[18px] text-black font-semibold'>Around Coffe Table</h3>
                            <div className='lg:flex justify-between items-center'>
                                <div className='mt-[-8px] md:mt-1'>
                                    <span className='text-[8px] md:text-[15px] lg:text-[18px] font-bold text-black'>$482.3</span>
                                    <span className='ml-[2px] md:ml-[4px] lg:ml-2 text-[6px] md:text-[12px] lg:text-[15px]'><del>$689.00</del></span>
                                </div>
                                <div className='mt-[-8px] md:mt-1'>
                                    <button className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px]'>Book Now</button>
                                </div>
                            </div>
                            <div className='flex items-center invisible lg:visible'>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiFillStar className=' text-yellow-400'></AiFillStar>
                                <AiOutlineStar></AiOutlineStar>
                                <span className='text-black font-semibold text-[15px] ml-3'>4.00 rating</span>
                            </div>

                            <div className='flex items-center justify-between invisible lg:visible'>
                                <progress className="progress progress-error w-56 h-[6px]" value="75" max="100"></progress>
                                <p><span>Sold: 14/</span><span className='text-error'>20</span></p>
                            </div>

                            <div className='mt-2 text-green-800 font-[500]'>
                                2 Day Delivery
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="slider-controler mt-7 md:mt-10 lg:mt-20">
                    <div className="swiper-button-prev slider-arrow">
                        <AiOutlineArrowLeft className='text-[13px]'></AiOutlineArrowLeft>
                    </div>

                    <div className="swiper-button-next slider-arrow">
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default NewProducts;