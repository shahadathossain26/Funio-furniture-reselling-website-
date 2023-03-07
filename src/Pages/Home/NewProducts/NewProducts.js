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
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const NewProducts = () => {
    return (
        <div className='mb-32'>
            <div className='text-center mb-5'>
                <h3 className='text-[14px] md:text-[16px] lg:text-xl font-semibold'>SEE OUR</h3>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>New Selling Products</h2>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'3'}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    }
                }
                autoplay={{ delay: 2000 }}
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
                    <img className='' src={image1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='' src={image2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='' src={image3} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='' src={image4} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='' src={image5} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='' src={image6} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='' src={image7} alt="" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <AiOutlineArrowLeft></AiOutlineArrowLeft>
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