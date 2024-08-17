import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  Link,
  replace,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const Login = (props) => {
  const pastUsers = useLoaderData();
  const { AdminSignIn, AdminSignInWithGoogle, admin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/admin";
  const [loading, setLoading] = useState(false);
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Wrong Email",
        text: "Please Enter a Valid Email Address...",
      });
      setLoading(false);
      return;
    }
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Week Password",
        text: "Please Enter a Strong Password ...",
      });
      setLoading(false);
      return;
    }
    try {
      const response = await AdminSignIn(email, password);
      console.log(response)
      navigate(from, { replace: true });
      Swal.fire(`Hi ${response.displayName}`).then((result) => {
        if (result.isConfirmed) {
          //window.open('/',self)
          const name = response.displayName;
          //const email = response.email;
          if (
            pastUsers.find((user) => user.name == name && user.email == email)
          ) {
            window.open("/", self);
            setLoading(false);
            return;
          }
          const user = { name, email };
          fetch("https://dream-car-server-jet.vercel.app/user", {
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
      });
      setLoading(false);
      return;
    } catch (err) {
      Swal.fire(err.message);
      setLoading(false);
    }
  };
  const handleAdminGoogleLogin = async () => {
    //e.preventDefault();
    setLoading(true);
    try {
      const res = await AdminSignInWithGoogle();
      console.log(res);
      console.log(res.displayName);
      Swal.fire("Hi " + res.displayName).then((result) => {
        if (result.isConfirmed) {
          const name = res.displayName;
          const email = res.email;
          if (
            pastUsers.find((user) => user.name == name && user.email == email)
          ) {
            window.open("/", self);
            setLoading(false);
            return;
          }
          const user = { name, email };
          fetch("https://dream-car-server-jet.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
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
      });
      setLoading(false);
      return;
    } catch (error) {
      Swal.fire(error.message);
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex gap-8 py-20 flex-col items-center justify-center container mx-auto w-full">
      <h1 className="text-white text-5xl font-bold">Login Now</h1>
      <button
        onClick={handleAdminGoogleLogin}
        className="btn btn-primary bg-black text-white"
      >
        Login with Google
      </button>
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
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
        <p>
          {`Don't have an account ?`}
          <Link to={`/register`}>Register</Link>
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
