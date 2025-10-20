import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, SetUser, updateUser, emailVerification } =
    use(AuthContext);

  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo);
    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            SetUser({ ...user, displayName: name, photoURL: photo });
            emailVerification().then(() => {
              toast.success("Registration-Successful! Check your email");
            });
            navigate("/auth/login");
          })
          .catch((error) => {
            toast(error.message);
            SetUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-xs text-error"> {nameError} </p>}
            {/* Photo URL  */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* Email  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* Password  */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral my-4">
              Register
            </button>
            <h1 className="text-center">
              Already Have An Account ?{" "}
              <Link
                to="/auth/login"
                className="text-red-500 underline font-semibold"
              >
                Login
              </Link>
            </h1>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
