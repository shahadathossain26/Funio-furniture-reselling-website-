import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineHeart, AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductCard = ({ product, setBookingProduct }) => {

    const { _id, name, image, location, resale_price, original_price, years_of_use, publish_date, seller_name, seller_status, product_amount, product_sell, discount, delivary_time, } = product;

    const progress_value = (resale_price / original_price) * 100;

    return (
        <div className='relative cursor-pointer mx-2'>
            <div >
                <img className='' src={image} alt="" />
            </div>
            <div className=' bg-slate-300 w-[50px] px-2 py-2 text-[14px] rounded-lg text-black font-bold text-center absolute top-5 left-5 invisible lg:visible'>
                -{discount}%
            </div>
            <div className='text-[25px] bg-white shadow-xl w-[40px] px-2 py-1 rounded-[50%] absolute top-5 right-5 invisible lg:visible'>
                <AiOutlineHeart className='mx-auto hover:text-red-500'></AiOutlineHeart>
            </div>

            <div >
                <h3 className='text-[8px] md:text-[12px] lg:text-[18px] text-black font-semibold'>{name}</h3>
                <div className='lg:flex justify-between items-center'>
                    <div className='mt-[-8px] md:mt-1'>
                        <span className='text-[8px] md:text-[15px] lg:text-[18px] font-bold text-black'>${resale_price}</span>
                        <span className='ml-[2px] md:ml-[4px] lg:ml-2 text-[6px] md:text-[12px] lg:text-[15px]'><del>${original_price}</del></span>
                    </div>
                    <div className='mt-[-8px] md:mt-1'>
                        <label onClick={() => setBookingProduct(product)} htmlFor="booking-modal" className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px] cursor-pointer'>Book Now</label>
                        {/* <button onClick={() => setBookingProduct(product)} htmlFor="booking-modal" className='border border-black md:px-3 md:py-1 text-black font-semibold rounded text-[7px] px-1 py-1 md:text-[13px] lg:text-[16px]'>Book Now</button> */}
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
                    <progress className="progress progress-error w-56 h-[6px]" value={progress_value} max="100"></progress>
                    <p><span>Sold: {product_sell}/</span><span className='text-error'>{product_amount}</span></p>
                </div>

                <div className='mt-2 text-green-800 font-[500]'>
                    {delivary_time} Day Delivery
                </div>
            </div>
        </div>
    );
};

export default ProductCard;