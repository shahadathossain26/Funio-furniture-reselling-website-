import React from 'react';
import icon1 from '../../../assets/why_funio_icons/icon-1.png'
import icon2 from '../../../assets/why_funio_icons/icon-2.png'
import icon3 from '../../../assets/why_funio_icons/icon-3.png'
import icon4 from '../../../assets/why_funio_icons/icon-4.png'

const WhyFunio = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-10'>Why Funio?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 md:px-10 lg:px-16'>
                <div className='flex items-center mx-auto md:mx-0'>
                    <div>
                        <img className='w-[80px] mr-10' src={icon1} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>20 day returns</h3>
                        <p>Lorem ipsum dolor sit amet, consec.</p>
                    </div>
                </div>

                <div className='flex items-center mx-auto md:mx-0'>
                    <div>
                        <img className='w-[80px] mr-10' src={icon2} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>
                            Free Shipping</h3>
                        <p>Lorem ipsum dolor sit amet, consec.</p>
                    </div>
                </div>

                <div className='flex items-center mx-auto md:mx-0'>
                    <div>
                        <img className='w-[80px] mr-10' src={icon3} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Custom Made</h3>
                        <p>Lorem ipsum dolor sit amet, consec.</p>
                    </div>
                </div>

                <div className='flex items-center mx-auto md:mx-0'>
                    <div>
                        <img className='w-[80px] mr-10' src={icon4} alt="" />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Many Options</h3>
                        <p>Lorem ipsum dolor sit amet, consec.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyFunio;