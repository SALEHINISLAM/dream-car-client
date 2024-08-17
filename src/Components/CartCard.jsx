import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CartCard = ({ carId, userId }) => {
  const [car, setCar] = useState();

  useEffect(() => {
    fetch(`https://dream-car-server-jet.vercel.app/car/${carId}`)
      .then((res) => res.json())
      .then((result) => setCar(result));
  }, [carId]);
  if (!car) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  const { _id, name, brand, price, details, photo, seat, brandNew, bankLoan } =
    car;
  //console.log(car)
  const handleRemove = () => {
    fetch(`https://dream-car-server-jet.vercel.app/user/${userId}/car/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.modifiedCount > 0) {
          Swal.fire(`${name} removed from the card successfully...`).then(
            (response) => {
              if (response.isConfirmed) {
                window.open("/", self);
              }
            }
          );
        } else {
          Swal.fire("Something went wrong");
        }
      });
  };
  return (
    <div className="bg-gray-800 container mx-auto py-12">
      <div className="card lg:card-side bg-black shadow-xl p-4 text-white">
        <figure className="lg:w-2/3">
          <img
            src={`${
              car
                ? photo
                : "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            }`}
            alt={name}
          />
        </figure>
        <div className="card-body lg:w-1/3">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Brand: {brand}</h2>
          <h2 className="card-title">Details: {details}</h2>
          <h2 className="card-title">Price: {price}</h2>
          <h2 className="card-title">Seat: {seat} seated car</h2>
          <h2 className="card-title">Brand New: {brandNew}</h2>
          <h2 className="card-title">Bank Loan: {bankLoan}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => handleRemove()}>
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {};

export default CartCard;
