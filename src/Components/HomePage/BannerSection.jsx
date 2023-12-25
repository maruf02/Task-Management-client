import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" ">
          <h1 className="mb-5 text-5xl font-bold text-[#00ffcc] ">
            Task Management System
          </h1>
          <p className="mb-5 text-xl text-[#00cc66]">
            Make Your Life and Task Manage in Easier Way
          </p>
          <Link to="/dashboard/dashHome">
            <button className="btn btn-primary">Let’s Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
