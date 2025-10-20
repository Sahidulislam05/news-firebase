import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");

  const { logInUser, ForgetPassword } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef(null);

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
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    ForgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        toast.error(error.code);
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
              ref={emailRef}
              className="input"
              placeholder="Email"
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <button
                type="button"
                onClick={handleForgetPassword}
                className="underline text-red-500 font-semibold text-xs"
              >
                Forgot password?
              </button>
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
