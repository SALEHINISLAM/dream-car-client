import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
const links=(
    <>
    <li>
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive
            ? "active text-red-600 font-bold underline-offset-1 underline"
            : isPending
            ? "pending"
            : ""}
        >
            Home
        </NavLink>
    </li>
    <li>
        <NavLink
        to="/cars"
        className={({ isActive, isPending }) =>
          isActive
            ? "active text-red-600 font-bold underline-offset-1 underline"
            : isPending
            ? "pending"
            : ""}
        >
            Cars
        </NavLink>
    </li>
    </>
)
  return (
    <div className="mx-auto container bg-black text-white rounded-b-xl">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box bg-black text-white z-[1] mt-3 w-52 p-2 shadow"
            >
            {
                links
            }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal bg-black text-white px-1">
            {
                links
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
