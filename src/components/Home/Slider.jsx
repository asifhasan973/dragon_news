import React from 'react';
import Marquee from 'react-fast-marquee';

const Slider = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto h-20 bg-[#f3f3f3] flex items-center px-5 mt-5">
        <button className="w-[110px] h-12 bg-[#d72050] text-white">
          Latest
        </button>

        <Marquee pauseOnHover="true" className="text-lg font-semibold ">
          <p className="me-10">
            I can be a React component, multiple React components, or just some
            text.
          </p>
          <p className="me-10">
            I can be a React component, multiple React components, or just some
            text.
          </p>
          <p className="me-10">
            I can be a React component, multiple React components, or just some
            text.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;
