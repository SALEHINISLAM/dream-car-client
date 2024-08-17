import React from "react";
import PropTypes from "prop-types";
import { BiSolidShow } from "react-icons/bi";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdminCarCard = ({car}) => {
  const {_id,name,brand,price,details,photo,seat,brandNew,bankLoan}=car;
  const handleDelete=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://dream-car-server-jet.vercel.app/car/${id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then((data)=>{
          console.log(data);
          if (data.deletedCount>0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(move=>{
              if (move.isConfirmed) {
                window.open('/admin',self);
              }
            })
          }else{
            Swal.fire({
              title:"Error",
              text: "Something went wrong. Please try again...",
              icon: "error"
            })
          }
        })

        
      }
    });
  }
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
              <BiSolidShow className="size-8"/>
            </button>
            </Link>
            <Link to={`/updatecar/${_id}`}>
            <button className="btn btn-primary btn-circle">
              <MdEdit className="size-8"/>
            </button>
            </Link>
            <button className="btn btn-primary btn-circle" onClick={()=>handleDelete(_id)}>
              <MdDeleteForever className="size-8"/>
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
