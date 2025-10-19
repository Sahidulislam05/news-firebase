import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
