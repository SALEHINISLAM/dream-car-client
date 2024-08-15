import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';

const Home = props => {
    const {admin}=useContext(AuthContext)
    return (
        <div>
            home
            {
                admin && <p>admin here</p>
            }
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;