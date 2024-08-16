import React from "react";
import PropTypes from "prop-types";
import { BiSolidShow } from "react-icons/bi";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <div className="flex flex-row justify-around">
            <Link to={`/car/${_id}`}>
            <button className="btn btn-primary btn-circle">
              <BiSolidShow/>
            </button>
            </Link>
            <button className="btn btn-primary btn-circle">
              <MdEdit/>
            </button>
            <button className="btn btn-primary btn-circle">
              <MdDeleteForever/>
            </button>
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
