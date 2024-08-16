import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = (props) => {
    const pastUsers = useLoaderData();
  const {createAdmin}=useContext(AuthContext)
  const handleAdminRegistration=async(e)=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const fullName=form.get('name')
    const email=form.get('email')
    const password=form.get('password')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon:"error",
                title:"Wrong Email",
                text:"Please Enter a Valid Email Address...",
            }
            );
            setLoading(false)
            return;
        }
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon:"error",
                title:"Week Password",
                text:"Please Enter a Strong Password ...",
            }
            );
            setLoading(false)
            return;
        }
    try{
      const response=await createAdmin(email, password, fullName)
      console.log(response)
      Swal.fire('user created successfully !')
      .then(result=>{
        if (result.isConfirmed) {
            //window.open('/',self)
            const name=fullName;
          if (
            pastUsers.find((user) => user.name == name && user.email == email)
          ) {
            window.open("/", self);
            setLoading(false);
            return;
          }
          const user = { name, email };
          fetch("http://localhost:5001/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((response1) => response1.json())
            .then((newUser) => {
              console.log(newUser);
              if (newUser.insertedId) {
                Swal.fire("Welcome to Dream Car").then((sweet) => {
                  if (sweet.isConfirmed) {
                    window.open("/", self);
                  }
                });
              }
            });
          setLoading(false);
          return;
        }
      })
      return;
    }catch(err){
      console.log(err);
      Swal.fire(err.message)
    }
  }

  return (
    <div className='flex items-center justify-center container mx-auto w-full h-screen'>
      
      <form className="card-body" onSubmit={handleAdminRegistration}>
      <h1 className="text-white text-center text-5xl font-bold pb-10 pt-8">
        Register Now
      </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">Registration</button>
        </div>
        <p>
          Already have an account ? <Link to={`/admin/login`}>Login</Link>
        </p>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
