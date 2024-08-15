import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const AdminPrivateRoutes =({children}) => {
    const { admin, loading }=useContext(AuthContext)
    const location=useLocation()
    console.log('admin status in private route', admin);
    if (loading) {
        console.log('loading');
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (!admin) {
        console.log('no admin found in private route, redirecting to login');
        
        return <Navigate to={'/admin/login'} state={{from:location}} replace/>;
    }
    console.log('admin found rendering admin page');
    
    return children
};

AdminPrivateRoutes.propTypes = {
    children:PropTypes.node,
};

export default AdminPrivateRoutes;