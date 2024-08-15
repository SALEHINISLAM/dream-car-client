import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import AdminNavbar from '../Components/AdminNavbar';
import AdminCarCard from '../Components/AdminCarCard';
import { AuthContext } from '../Providers/AuthProviders';

const Admin = props => {
    const {admin}=useContext(AuthContext)
    const seller=admin.displayName;
    const addedBy=seller.split(" ").join("");
    const loadedCars=useLoaderData();
    const loadedMyCars=loadedCars.filter(car=>car.addedBy==addedBy)
    return (
        <div>
            <AdminNavbar/>
            <Link to={'/admin'}>
            <h1 className='text-center text-5xl font-bold text-white pt-10'>
                My Added Cars
            </h1>
            </Link>
            <div className="container mx-auto flex flex-col gap-6 py-10">
            {
                loadedMyCars.map((car,index)=><AdminCarCard car={car} key={index}/>)
            }
            </div>
        </div>
    );
};

Admin.propTypes = {
    
};

export default Admin;