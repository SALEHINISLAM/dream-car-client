import React from "react";
import PropTypes from "prop-types";

const AdminCarCard = ({car}) => {
    const {_id,name,brand,price,details,photo,seat,brandNew,bankLoan}=car;
  return (
    <div>
      <div className="card p-4 lg:card-side bg-black text-white shadow-xl">
        <figure className="lg:w-2/3">
          <img
            src={`${photo}`}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminCarCard.propTypes = {
    car:PropTypes.object,
};

export default AdminCarCard;
