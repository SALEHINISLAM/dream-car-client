import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const AdminNavbar = (props) => {
  const { admin, AdminLogOut } = useContext(AuthContext);
  console.log(admin)
  console.log(admin.photoURL);
  
  const handleAdminLogOut = async () => {
    try {
      await AdminLogOut();
      Swal.fire("Logout Successful !");
    } catch (err) {
      Swal.fire("Something went wrong");
    }
  };
  return (
    <div className="container mx-auto bg-black rounded-xl text-white">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">DreamCar</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={'/admin/add-car'} className={({isActive})=>isActive?'active':''}>
                Add Car
              </NavLink>
            </li>
            <li>
            {!admin && <a href="/admin/login">Login</a>}
            </li>
          </ul>
        </div>
        {
            admin && <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt={admin.displayName}
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li className="text-center">
                {admin.displayName}
              </li >
              <li></li>
              <li className="text-center cursor-pointer hover:font-bold hover:border text-red-600" onClick={handleAdminLogOut}>Logout</li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

AdminNavbar.propTypes = {};

export default AdminNavbar;
