import React, { useContext } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import AdminNavbar from "../Components/AdminNavbar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const AdminUpdateCar = (props) => {
    const car=useLoaderData()
    const {_id,name,brand,price,details,photo,seat,brandNew,bankLoan}=car;

  const { admin } = useContext(AuthContext);
  console.log(admin.displayName);
  const handleUpdateCar = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const brand = form.get("brand");
    const price = form.get("price");
    const details = form.get("details");
    const photo = form.get("photo");
    const seat = form.get("seat");
    const brandNew = form.get("brandNew");
    const bankLoan = form.get("bankLoan");
    const seller = admin.displayName;
    const addedBy = seller.split(" ").join("");
    const updateCar = {
      name,
      brand,
      price,
      details,
      photo,
      seat,
      brandNew,
      bankLoan,
      addedBy,
    };
    console.log(updateCar);
    fetch(`https://dream-car-server-jet.vercel.app/car/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Cars updated successful !",
          }).then((result) => {
            if (result.isConfirmed) {
              window.open("/admin", self);
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong !",
          });
        }
      });
  };
  return (
    <div className="bg-gray-700 text-white">
      <AdminNavbar />
      <div className="container mx-auto  pt-10 pb-16">
        <button
          className="cursor-pointer btn text-white bg-black"
          onClick={() => window.open("/admin", self)}
        >
          Back to Home
        </button>
        <form onSubmit={handleUpdateCar}>
          <h1 className="text-3xl text-center lg:text-5xl font-bold">
            Update Your Car
          </h1>
          {/* input started */}
          <div className="flex flex-col lg:flex-row justify-between px-4 gap-6">
            <div className="lg:w-1/2">
              <label className="label">
                <span>Name</span>
              </label>
              <input
                type="text"
                placeholder={name}
                defaultValue={name}
                className="input input-bordered w-full bg-white text-black"
                name="name"
              />
            </div>
            <div className="lg:w-1/2">
              <label className="label">
                <span>Brand</span>
              </label>
              <input
                type="text"
                placeholder={brand}
                defaultValue={brand}
                className="input input-bordered w-full bg-white text-black"
                name="brand"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between px-4 gap-6">
            <div className="lg:w-1/2">
              <label className="label">
                <span>Price</span>
              </label>
              <input
                type="text"
                placeholder={price}
                defaultValue={price}
                className="input input-bordered w-full bg-white text-black"
                name="price"
              />
            </div>
            <div className="lg:w-1/2">
              <label className="label">
                <span>Details</span>
              </label>
              <input
                type="text"
                placeholder={details}
                defaultValue={details}
                className="input input-bordered w-full bg-white text-black"
                name="details"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between px-4 gap-6">
            <div className="lg:w-1/2">
              <label className="label">
                <span>Photo URL</span>
              </label>
              <input
                type="text"
                placeholder={photo}
                defaultValue={photo}
                className="input input-bordered w-full bg-white text-black"
                name="photo"
              />
            </div>
            <div className="lg:w-1/2">
              <label className="label">
                <span>Seat</span>
              </label>
              <input
                type="text"
                placeholder={seat}
                defaultValue={seat}
                className="input input-bordered w-full bg-white text-black"
                name="seat"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between px-4 gap-6">
            <div className="lg:w-1/2">
              <label className="label">
                <span>Brand New</span>
              </label>
              <input
                type="text"
                placeholder={brandNew}
                defaultValue={brandNew}
                className="input input-bordered w-full bg-white text-black"
                name="brandNew"
              />
            </div>
            <div className="lg:w-1/2">
              <label className="label">
                <span>Bank Loan</span>
              </label>
              <input
                type="text"
                placeholder={bankLoan}
                defaultValue={bankLoan}
                className="input input-bordered w-full bg-white text-black"
                name="bankLoan"
              />
            </div>
          </div>
          <div className="flex justify-center py-10">
            <button className="btn text-white bg-black" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AdminUpdateCar.propTypes = {};

export default AdminUpdateCar;
