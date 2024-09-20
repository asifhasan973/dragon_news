import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className=" text-center space-y-3 ">
        <img src={logo} alt="" />
        <p className="text-[#706f6f] text-lg font-normal font-['Poppins'] leading-[30px] ">
          Journalism Without Fear or Favour
        </p>
        <div>
          <span className="text-[#403f3f] text-xl font-medium font-['Poppins'] leading-[30px]">
            Sunday,
          </span>
          <span className="text-[#706f6f] text-xl font-medium font-['Poppins'] leading-[30px]">
            {' '}
            November 27, 2022
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
