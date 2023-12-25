import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUsSection = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    Swal.fire({
      title: "Are you sure to Sent?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sent",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sent",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
    reset();
  };
  return (
    <div className="py-10">
      <div className="hero text-white rounded-lg bg-gradient-to-r  from-[#78aca7]  to-[#60aa60]">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center w-full lg:w-1/2 lg:text-left">
            <h2>GET IN TOUCH</h2>
            <h1 className="text-5xl font-bold">
              Think better with company and get us with contact!
            </h1>
            <p className="py-6">
              We're happy to answer any questions you may have and help you
              determine which of our services best fit your needs.
            </p>
            <p>Call us at: + (123)-456-789</p>
            <div className="flex gap-5 pt-5 justify-center lg:justify-start">
              <p>
                <FaFacebook className="text-2xl" />
              </p>
              <p>
                <FaTwitter className="text-2xl" />
              </p>
              <p>
                <FaLinkedin className="text-2xl" />
              </p>
              <p>
                <FaTelegram className="text-2xl" />
              </p>
              <p>
                <FaYoutube className="text-2xl" />
              </p>
            </div>
          </div>
          <div className="card shrink-0  text-white w-full lg:w-1/3    shadow-2xl bg-gradient-to-r from-[#556b69] to-[#496b49]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered input-primary bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered input-primary bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  {...register("phone", { required: true })}
                  className="input input-bordered input-primary bg-transparent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  {...register("message", { required: true })}
                  className="textarea textarea-secondary bg-transparent"
                  placeholder="Bio"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">
                  Sent Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
