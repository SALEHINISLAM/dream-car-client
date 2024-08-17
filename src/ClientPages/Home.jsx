import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import Cars from './Cars';
import Banner from '../Components/Banner';
import Stat from '../Components/Stat';
import Accordian from '../Components/Accordian';
import Review from '../Components/Review';

const Home = props => {

    return (
        <div className='bg-gray-800'>
            <Banner/>
            <Cars num={3}/>
            <Stat/>
            <Accordian/>
            <h1 className='text-5xl font-bold text-white text-center pb-10'>Reviews</h1>
            <Review/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;