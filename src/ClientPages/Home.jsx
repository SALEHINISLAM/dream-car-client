import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import Cars from './Cars';
import Banner from '../Components/Banner';

const Home = props => {

    return (
        <div className='bg-gray-800'>
            <Banner/>
            <Cars num={3}/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;