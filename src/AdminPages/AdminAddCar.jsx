import React, { useContext } from "react";
import PropTypes from "prop-types";
import AdminNavbar from "../Components/AdminNavbar";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";

const AdminAddCar = (props) => {
    const {admin}=useContext(AuthContext);
    console.log(admin.displayName);
    const handleAddCar=async(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const brand=form.get('brand');
        const price=form.get('price');
        const details=form.get('details');
        const photo=form.get('photo');
        const seat=form.get('seat');
        const brandNew=form.get('brandNew');
        const bankLoan=form.get('bankLoan');
        const seller=admin.displayName;
        const addedBy=seller.split(' ').join('');
        const newCar={name, brand, price, details, photo, seat, brandNew, bankLoan,addedBy};
        console.log(newCar);
        fetch(`http://localhost:5001/addcar`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newCar)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    icon:"success",
                    title:"Success",
                    text:"Cars added successful !",
                })
                .then(result=>{
                    if (result.isConfirmed) {
                        window.open('/admin/add-car',self)
                    }
                })
            }else{
                Swal.fire({
                    icon:"error",
                    title:"Something went wrong !"
                })
            }
        })
    }
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
        <form onSubmit={handleAddCar}>
          <h1 className="text-3xl text-center lg:text-5xl font-bold">
            Add Brand New Car
          </h1>
          {/* input started */}
          <div className="flex flex-col lg:flex-row justify-between px-4 gap-6">
            <div className="lg:w-1/2">
              <label className="label">
                <span>Name</span>
              </label>
              <input
                type="text"
                placeholder="Car's Model name"
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
                placeholder="Car's Brand (Toyota)"
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
                placeholder="15 lac"
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
                placeholder="detailed info"
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
                placeholder="photo url(i.bb/gjhgghfghf0)"
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
                placeholder="4"
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
                placeholder="yes/no"
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
                placeholder="Available"
                className="input input-bordered w-full bg-white text-black"
                name="bankLoan"
              />
            </div>
          </div>
            <div className="flex justify-center py-10">
            <button className="btn text-white bg-black" type="submit">
                Submit
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};

AdminAddCar.propTypes = {};

export default AdminAddCar;
