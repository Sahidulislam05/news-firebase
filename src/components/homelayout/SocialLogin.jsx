import { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googlelogin, githublogin } = use(AuthContext);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googlelogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Google Login Successful");
      })
      .catch((error) => {
        toast(error.message);
      });
    // console.log("Clicked");
  };
  const handleGithubLogin = (e) => {
    e.preventDefault();
    githublogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Github Login Successful");
      })
      .catch((error) => {
        toast(error.message);
      });
    // console.log("Clicked Github");
  };
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn btn-secondary btn-outline w-full"
        >
          <FcGoogle size={24} /> Login with Google
        </button>
        <button
          onClick={handleGithubLogin}
          type="button"
          className="btn btn-outline btn-primary w-full"
        >
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
