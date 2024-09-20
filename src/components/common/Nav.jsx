import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userPic from '../../assets/user.png';
import { AuthContext } from '../AuthProvider';

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar  pt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-[43px] h-[43px] me-3 rounded-full" src={userPic} />

        {user ? (
          <button
            onClick={logOut}
            className="w-[110px] h-11 bg-[#403f3f] text-white"
          >
            Log Out
          </button>
        ) : (
          <a href="/login">
            <button className="w-[110px] h-11 bg-[#403f3f] text-white">
              Log In
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Nav;
