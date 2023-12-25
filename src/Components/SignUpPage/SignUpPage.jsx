import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios, { Axios } from "axios";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const SignUpPage = () => {
  const [googleUser, setGoogleUser] = useState(null);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState("");
  const { createUser, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSignUp = async (e) => {
    // console.log(e);
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("ImageURL");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, image, email, password);
    // console.log("pass", password);
    const userInfo = { name, image, email };
    // console.log("user", userInfo);

    // console.log("user", userInfo);
    // console.log(name, image, email, password);
    // console.log("role", role);
    //   create user
    setSignUpError("");
    setSignUpSuccess("");

    if (password.length < 6) {
      setSignUpError("Password must be minimum 6 character or more");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setSignUpError("Password must include one Capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      setSignUpError("password have must include one special character");
      return;
    }
    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        updateProfile(res.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                // console.log("user added db", userInfo);
                setGoogleUser(res.user);
                setSignUpSuccess("User Created Successfully");
                Swal.fire("User Created Successfully");
                navigate(
                  location?.state ? location.state : "/dashboard/dashHome"
                );
              }
            });
            // console.log(name, image);
            // window.location.reload();
          })
          .catch((error) => {
            // console.error("Error updating profile:", error);
          });
        // setGoogleUser(res.user);
        // setSignUpSuccess("User Created Successfully");
        // Swal.fire("User Created Successfully");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.error(error);
        setSignUpError(error.message);
        Swal.fire(error.code);
        // console.log("abc", error.message);
      });
  };
  // const handleSignInGoogle = () => {
  //   signInGoogle()
  //     .then((res) => {
  //       // console.log(res.user);
  //       Swal.fire("Login Successfully via Google");
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((err) => {
  //       // console.error(err);
  //     });
  // };

  const handleSignInGoogle = () => {
    signInGoogle().then(async (res) => {
      const name = res.user.displayName;
      const image = res.user.photoURL;
      const email = res.user.email;

      // Send user data to your backend
      const userInfo = { name, image, email };
      axiosPublic.post("/users", userInfo).then(() => {
        Swal.fire("User Created Successfully via Google");
        navigate(location?.state ? location.state : "/");
      });
    });
  };
  return (
    <div className="py-20">
      <div className="hero ">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-orange-400 ">
          <p className="py-5 text-center text-4xl text-blue-600 font-semibold">
            Please Sign UP
          </p>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-blue-600 font-semibold">
                  Name:
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered bg-white text-black text-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-blue-600 font-semibold">
                  ImageURL:
                </span>
              </label>
              <input
                type="text"
                name="ImageURL"
                placeholder="Enter Your Image URL/Link"
                className="input input-bordered bg-white text-black text-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-blue-600 font-semibold">
                  Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered bg-white text-black text-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-blue-600">
                  Password:
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered bg-white text-black text-xl"
                required
              />
              <label className="pt-2">
                <p className="text-xl text-blue-600">
                  Already SignUP? Please
                  <Link
                    to="/signIn"
                    className="text-purple-700 underline hover:text-green-700"
                  >
                    SignIn
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-2xl">SIGNUP</button>
            </div>
          </form>

          {signUpSuccess && (
            <p className="text-green-700 text-lg">{signUpSuccess}</p>
          )}
          {signUpError && <p className="text-red-700 text-lg">{signUpError}</p>}
          <p className="text-2xl text-blue-600 text-center">SignUp Via:</p>
          {/* google and github */}
          <div className="pb-10 mx-auto flex gap-5  ">
            <div className=" mt-6 flex ">
              <button
                onClick={handleSignInGoogle}
                className="btn btn-primary text-xl"
              >
                <FaGoogle></FaGoogle> Google
              </button>
            </div>
            {/* <div className=" mt-6 flex ">
              <button className="btn btn-primary text-xl">
                <FaGithub></FaGithub> Github
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
