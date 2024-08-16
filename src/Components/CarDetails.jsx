import React from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const CarDetails = () => {
  const car = useLoaderData();
  const {_id,name,brand,price,details,photo,seat,brandNew,bankLoan}=car;
  return (
    <div className="bg-gray-700 container mx-auto text-white">
      <AdminNavbar />
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${car? photo : 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'})`,
          }}
        >
          <div className="hero-overlay bg-opacity-70 "></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md text-white">
              <h1 className="mb-5 text-5xl font-bold">{name}</h1>
              <p className="mb-5">
                <span className="font-semibold">Brand :</span> {brand}
              </p>
              <p className="mb-5">
                <span className="font-semibold">Details :</span> {details}
              </p>
              <p className="mb-5">
                <span className="font-semibold">Price :</span> {price}
              </p>
              <p className="mb-5">
                <span className="font-semibold">Seat :</span> {seat} seated car
              </p>
              <p className="mb-5">
                <span className="font-semibold">Brand New :</span> {brandNew} 
              </p>
              <p className="mb-5">
                <span className="font-semibold">Bank Loan :</span> {bankLoan} 
              </p>
              <button className="btn btn-primary"><a href={`/updatecar/${_id}`}>Update Details</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CarDetails.propTypes = {};

export default CarDetails;
