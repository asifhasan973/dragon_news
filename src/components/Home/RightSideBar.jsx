import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa6';

import img1 from '../../assets/qZone1.png';
import img2 from '../../assets/qZone2.png';
import img3 from '../../assets/qZone3.png';

const RightSideBar = () => {
  return (
    <>
      <div className="border-2 p-5">
        <h1 className="text-2xl font-bold mb-3">Login With</h1>
        <div className="">
          <Link to="/login">
            <h1 className="text-lg btn btn-outline border-outline w-full text-blue-500">
              <FaGoogle />
              Login with Google
            </h1>
          </Link>
          <Link to="/login">
            <h1 className="text-lg btn btn-outline border-outline w-full text-black-500 mt-4">
              <FaGithub />
              Login with Github
            </h1>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-5">Find Us On</h1>
        <div>
          <a href="">
            <h1 className="text-[#706f6f] font-medium text-lg flex items-center gap-3 border p-4">
              <FaFacebook /> Facebook
            </h1>
          </a>
          <a href="">
            <h1 className="text-[#706f6f] font-medium text-lg flex items-center gap-3 border p-4 border-y-0">
              <FaTwitter /> Twitter
            </h1>
          </a>
          <a href="">
            <h1 className="text-[#706f6f] font-medium text-lg flex items-center gap-3 border p-4">
              <FaInstagram /> Instagram
            </h1>
          </a>
        </div>
      </div>
      <div className=" bg-[#f3f3f3] mt-10 p-5 rounded-2xl">
        <h1 className="text-2xl font-bold mb-3 pt-5 ps-5">Q Zone</h1>
        <img src={img1} className="w-10/12" alt="" />
        <img src={img2} className="w-10/12" alt="" />
        <img src={img3} className="w-10/12" alt="" />
      </div>
    </>
  );
};

export default RightSideBar;
