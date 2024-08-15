import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../Components/AdminNavbar';

const Admin = props => {
    return (
        <div>
            <AdminNavbar/>
            admin is here
            <Outlet/>
        </div>
    );
};

Admin.propTypes = {
    
};

export default Admin;