import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const userName = user?.displayName;
  // console.log(userName);
  const meneBar = (
    <>
      <li>
        <NavLink to="/" className="activeNavLink ">
          <button>Home</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="activeNavLink ">
          <button>About</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/rooms" className="activeNavLink ">
          <button>Contact</button>
        </NavLink>
      </li>

      <li>
        {user ? (
          <NavLink to={"/dashboard/dashHome"} className="activeNavLink ">
            <button>DashBoard</button>
          </NavLink>
        ) : (
          ""
        )}
        {/* <NavLink to="/myCart" className="activeNavLink ">
          <button>My Booking</button>
        </NavLink> */}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {meneBar}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/3d9d7Lf/hotel-logo.png"
            alt=""
            className="w-24 h-16"
          />
          <h2 className="md:text-2xl md:pl-5 pt-2 ">Task Management</h2>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{meneBar}</ul>
        </div>
        {user ? (
          <>
            <div className="ml-[30%] md:ml-[40%] lg:ml-0">
              {/* propic section */}
              <div className="pr-2 text-lg">
                <p>{user.displayName}</p>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/dashboard/addtask">
                      <button>Add Task</button>
                    </Link>
                  </li>

                  {/* <li>
                    <Link>
                      <button>View Room Category</button>
                    </Link>
                  </li> */}
                  <li>
                    <Link>
                      <button onClick={handleSignOut}>Logout</button>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* propic section */}
            </div>
          </>
        ) : (
          <>
            <div className="ml-[30%] md:ml-[40%] lg:ml-0">
              <Link to="/signIn">
                <button className="btn btn-outline btn-accent text-lg">
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
