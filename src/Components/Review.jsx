import React from "react";
import PropTypes from "prop-types";

const Review = (props) => {
  return (
    <div className="flex flex-row container justify-evenly mx-auto gap-8">
      <div className="card bg-black  text-white">
        <div className="card-body">
          <h2 className="card-title">Their service is awesome!</h2>
          <p>Salehin, CEO , MSI Group</p>
        </div>
      </div>
      <div className="card bg-black  text-white hidden md:flex">
        <div className="card-body">
          <h2 className="card-title">Delivery is Super fast</h2>
          <p>Ratul, CEO , Utkorsho</p>
        </div>
      </div>
      <div className="card bg-black  text-white hidden lg:flex">
        <div className="card-body">
          <h2 className="card-title">After sales service is good</h2>
          <p>jhankar, CEO , Programming Hero</p>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {};

export default Review;
