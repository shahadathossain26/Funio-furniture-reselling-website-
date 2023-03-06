import React from 'react';
import Banner from '../Banner/Banner';
import DecoCollection from '../DecoCollection/DecoCollection';
import Metarials from '../Metarials/Metarials';
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
            <Offer></Offer>
            <Metarials></Metarials>
            <OurTeam></OurTeam>
            <TrackOrder></TrackOrder>
            <DecoCollection></DecoCollection>
            <WhyFunio></WhyFunio>
        </div>
    );
};

export default Home;