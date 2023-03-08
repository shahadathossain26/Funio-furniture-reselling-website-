import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import DecoCollection from '../DecoCollection/DecoCollection';
import Metarials from '../Metarials/Metarials';
import NewProducts from '../NewProducts/NewProducts';
import Offer from '../Offer/Offer';
import OurTeam from '../OurTeam/OurTeam';
import ProductCatagory from '../ProductCatagory/ProductCatagory';
import TrackOrder from '../TrackOrder/TrackOrder';
import WhyFunio from '../WhyFunio/WhyFunio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCatagory></ProductCatagory>
            <NewProducts></NewProducts>
            <Offer></Offer>
            <Metarials></Metarials>
            <OurTeam></OurTeam>
            <TrackOrder></TrackOrder>
            <DecoCollection></DecoCollection>
            <WhyFunio></WhyFunio>
            <About></About>
        </div>
    );
};

export default Home;