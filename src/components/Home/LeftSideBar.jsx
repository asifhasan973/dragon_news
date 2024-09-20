import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import news1 from '../../assets/editorsInsight1.png';
import news2 from '../../assets/editorsInsight2.png';
import news3 from '../../assets/editorsInsight3.png';
import { FaCalendarDays } from 'react-icons/fa6';

const LeftSideBar = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-[#403f3f] text-xl font-semibold mb-6 ps-3">
          All Category
        </h1>
        <div>
          {categories.map((category) => (
            <>
              <Link to={`catagory/:${category.id}`}>
                <div className=" ps-3 text-[#9f9f9f] text-xl font-medium w-[267px] h-16 rounded-[5px] hover:bg-[#e7e7e7] hover:text-black flex justify-start items-center">
                  {' '}
                  {category.name}
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <div className="card ">
          <figure>
            <img src={news1} alt="Shoes" />
          </figure>
          <div className="mt-5">
            <h2 className="text-xl font-semibold ">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="card-actions flex justify-between">
              <div className="mt-3 text-[#403f3f] text-base font-medium">
                Sports
              </div>
              <div className="mt-3 text-[#9f9f9f] text-base font-medium flex items-center gap-1">
                <FaCalendarDays /> Jan 4, 2022
              </div>
            </div>
          </div>
        </div>
        <div className="card ">
          <figure>
            <img src={news2} alt="Shoes" />
          </figure>
          <div className="mt-5">
            <h2 className="text-xl font-semibold ">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="card-actions flex justify-between">
              <div className="mt-3 text-[#403f3f] text-base font-medium">
                Sports
              </div>
              <div className="mt-3 text-[#9f9f9f] text-base font-medium flex items-center gap-1">
                <FaCalendarDays /> Jan 4, 2022
              </div>
            </div>
          </div>
        </div>
        <div className="card ">
          <figure>
            <img src={news3} alt="Shoes" />
          </figure>
          <div className="mt-5">
            <h2 className="text-xl font-semibold ">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="card-actions flex justify-between">
              <div className="mt-3 text-[#403f3f] text-base font-medium">
                Sports
              </div>
              <div className="mt-3 text-[#9f9f9f] text-base font-medium flex items-center gap-1">
                <FaCalendarDays /> Jan 4, 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
