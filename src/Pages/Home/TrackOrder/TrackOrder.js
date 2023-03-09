import React from 'react';
import image from '../../../assets/trackOrder_image.jpg'

const TrackOrder = () => {
    return (
        <div className='lg:flex justify-between items-center w-full mt-20 overflow-x-hidden'>
            <div className='w-full lg:w-1/2 px-10 md:px-10 lg:px-20' data-aos="fade-left" data-aos-duration="1500">
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-5 text-center lg:text-start'>Track your order</h2>
                <p className='text-[12px] md:text-[15px] lg:text-[18px] opacity-70 mb-5'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <form>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="order_id" className='mb-2'>ORDER ID</label>
                        <input type="text" name='order_id' id='order_id' placeholder='Found in your order confirmation E-mail' className='border border-black px-2 py-2' />
                    </div>

                    <div className='flex flex-col '>
                        <label htmlFor="order_email" className='mb-2'>BILLING EMAIL</label>
                        <input type="text" name='order_email' id='order_email' placeholder='E-mail you used during checkout' className='border border-black px-2 py-2' />
                    </div>

                    <button type='submit' className='text-[12px] md:text-[15px] lg:text-[18px] bg-white text-black border border-black px-2 md:px-3 lg:px-8 md:py-2 rounded font-semibold mt-5'>Track</button>
                </form>
            </div>
            <div className='w-full lg:w-1/2 mt-5 md:mt-10 lg:mt-0' data-aos="fade-right" data-aos-duration="1500">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default TrackOrder;