import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';
import CartCard from '../Components/CartCard';

const ClientCart = () => {
    const currentUser=useLoaderData();
    const [user,setUser]=useState();
    return (
        <div>
            <h1 className='text-center text-white pt-16 font-bold text-5xl'>
                My Cart
            </h1>
            {/* {currentUser && currentUser.carId.map((car, index)=>(
                <p key={index} className='text-white'>
                    {car.carId.carId}
                </p>
            ))} */}
            {currentUser && currentUser.carId.map((car, index)=>(
                <CartCard key={index} carId={car.carId.carId} userId={currentUser._id}/>
            ))}
        </div>
    );
};

ClientCart.propTypes = {
    
};

export default ClientCart;