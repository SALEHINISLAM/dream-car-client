import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const AdminLogin = (props) => {
    const {AdminSignIn,
        AdminSignInWithGoogle,
        admin}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname || "/admin";
    const [loading, setLoading]=useState(false);
    const handleAdminLogin=async(e)=>{
        e.preventDefault();
        setLoading(true);
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
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
            response=await AdminSignIn(email, password)
            navigate(from, {replace:true});
            Swal.fire(`Hi ${response.displayName}`)
            .then(
              result=>{
                if (result.isConfirmed) {
                  window.open('/admin',self)
                }
              }
            )
            setLoading(false)
            return;
        }catch(err){
            Swal.fire(err.message)
            setLoading(false)
        }
    }
    const handleAdminGoogleLogin=async()=>{
      //e.preventDefault();
      setLoading(true);
      try{
        const res=await AdminSignInWithGoogle()
        console.log(res)
        console.log(res.displayName)
        Swal.fire('Hi '+res.displayName)
        .then(
          result=>{
            if (result.isConfirmed) {
              window.open('/admin',self)
            }
          }
        )
        setLoading(false)
        return;
      }catch(error){
        Swal.fire(error.message)
        console.log(error);
        setLoading(false)
      }
    }
  return (
    <div className="flex flex-col items-center justify-center container mx-auto w-full h-screen">
      <form className="card-body" onSubmit={handleAdminLogin}>
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
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
        <p>
          {`Don't have an account ?`}
          <Link to={`/admin/register`}>Register</Link>
        </p>
      </form>
      <button onClick={handleAdminGoogleLogin}>
      Login with Google
      </button>
    </div>
  );
};

AdminLogin.propTypes = {};

export default AdminLogin;
