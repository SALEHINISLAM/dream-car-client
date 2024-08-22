import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";

const ClientCarCard = ({car}) => {
  const {admin}=useContext(AuthContext);
  //console.log(admin.email, admin.displayName)
  const [pastUsers, setPastUsers]=useState([]);
  useEffect(()=>{
    fetch('https://dream-car-server-ua11.onrender.com/users')
    .then(res=>res.json())
    .then(datum=>setPastUsers(datum))
  },[])
  
    const {_id,name,brand,price,details,photo,seat,brandNew,bankLoan}=car;
    
    const handleAddToCart=(id)=>{
      const currentUser=pastUsers.find(user=> user.name == admin.displayName && user.email == admin.email);
      console.log("currentUser", currentUser);
      const carId=id;
      fetch(`https://dream-car-server-jet.vercel.app/user/${currentUser._id}`,{
        method:"PUT",
        headers:{
          "content-type":"application/json",
        },
        body: JSON.stringify({carId})
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        if (result.modifiedCount>0) {
          Swal.fire({
            title:'Success !!!',
            text:'Your car cart updated successfully !',
            icon:'success',
            confirmButtonText:`<a href='/'>Okay</a>`
        })
        }else{
          Swal.fire('Something went wrong...')
        }
      })
    }
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
            <button className="btn btn-primary" onClick={()=>handleAddToCart(_id)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ClientCarCard.propTypes = {};

export default ClientCarCard;
