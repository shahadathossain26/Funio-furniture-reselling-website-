
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import background from '../../assets/homepage_banner/slider2-2.webp';
// import BookingModal from './BookingModal/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
    // const { name, image, location, resale_price, original_price, years_of_use, publish_date, seller_name } = useLoaderData();
    const products = useLoaderData();
    console.log(products)
    const [bookingProduct, setBookingProduct] = useState(null);

    // let category = "";
    // if (products.category_id = "6405b7b3145f7ba366bbc861") {
    //     category = "Sofa"
    // }
    // if (products.category_id = "6405b7b3145f7ba366bbc862") {
    //     category = "Chair"
    // }
    // if (products.category_id = "6405b7b3145f7ba366bbc863") {
    //     category = "Table"
    // }

    return (
        <section className='mt-5 mb-16'>
            <div className="hero" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content p-20">
                    <div className="max-w-md">
                        <h2 className="mb-5 text-5xl text-white text-left font-bold">Products</h2>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 lg:mx-16 my-28'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setBookingProduct={setBookingProduct}
                    ></ProductCard>)
                }
            </div>
            {/* {
                bookingProduct &&
                <BookingModal
                    bookingProduct={bookingProduct}
                    setBookingProduct={setBookingProduct}
                ></BookingModal>
            } */}
        </section>

    );
};

export default Products;