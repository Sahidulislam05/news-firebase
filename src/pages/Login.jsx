import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");

  const { logInUser } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log()
    logInUser(email, password)
      .then((res) => {
        if (!res.user?.emailVerified) {
          toast.error("Email not verified");
          return;
        }
        console.log(res.user);
        toast.success("Login-Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
        // toast(error.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-500 text-xs"> {error} </p>}
            <button className="btn btn-neutral my-4">Login</button>
            <h1 className="text-center">
              Dont’t Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="text-red-500 underline font-semibold"
              >
                Register
              </Link>
            </h1>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
