import React from 'react';
import Banner from '../Banner/Banner';
import Metarials from '../Metarials/Metarials';
import Offer from '../Offer/Offer';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Metarials></Metarials>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;