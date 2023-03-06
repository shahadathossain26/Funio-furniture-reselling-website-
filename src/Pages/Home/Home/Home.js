import React from 'react';
import Banner from '../Banner/Banner';
import DecoCollection from '../DecoCollection/DecoCollection';
import Metarials from '../Metarials/Metarials';
import Offer from '../Offer/Offer';
import OurTeam from '../OurTeam/OurTeam';
import TrackOrder from '../TrackOrder/TrackOrder';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Metarials></Metarials>
            <OurTeam></OurTeam>
            <TrackOrder></TrackOrder>
            <DecoCollection></DecoCollection>
        </div>
    );
};

export default Home;