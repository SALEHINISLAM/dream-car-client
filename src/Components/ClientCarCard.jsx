import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClientCarCard = ({car}) => {
    const {_id,name,brand,price,details,photo,seat,brandNew,bankLoan}=car;
    return (
    <div>
      <div className="card bg-base-100 image-full shadow-xl w-full h-full">
        <figure>
          <img
            src={` ${car ? photo :"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}`}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand} {name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-between">
            <Link to={`/carDetails/${_id}`}>
            <button className="btn btn-primary">See Details</button>
            </Link>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ClientCarCard.propTypes = {};

export default ClientCarCard;
