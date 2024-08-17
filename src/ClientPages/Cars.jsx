import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClientCarCard from '../Components/ClientCarCard';
import { Link } from 'react-router-dom';

const Cars = ({num}) => {
    const [cars, setCars]=useState([]);
    const [displayCars, setDisplayCars]=useState([]);
    useEffect(()=>{
        fetch('https://dream-car-server-jet.vercel.app/addcar')
        .then(response=>response.json())
        .then(result=>setCars(result))
      
    },[])

    useEffect(()=>{
        if (num) {
            setDisplayCars(cars.slice(0,parseInt(num)))
        }else{
            setDisplayCars(cars)
        }
    },[num, cars])
    return (
        <div className='bg-gray-800'>
            <h1 className='text-white font-bold text-4xl text-center py-8'>
Cars
            </h1>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-8">
                {
                    displayCars.map((car, index)=><ClientCarCard car={car} key={index}/>)
                }
            </div>
            <div className={`${parseInt(num)>0? "flex justify-center py-6":"hidden"}`}>
                <Link to={'/cars'}>
                <button className='btn bg-black text-white'>
                    See More
                </button>
                </Link>
            </div>
        </div>
    );
};

Cars.propTypes = {
    num:PropTypes.number,
};

export default Cars;