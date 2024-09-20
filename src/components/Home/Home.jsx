import React, { useEffect, useState } from 'react';
import LeftSideBar from './LeftSideBar';
import NewsContent from './NewsContent';
import RightSideBar from './RightSideBar';

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('news.json')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="grid  grid-cols-1 md:grid-cols-4 mt-10">
      <div className="">
        <LeftSideBar></LeftSideBar>
      </div>
      <div className="col-span-2">
        {news.map((anews) => (
          <NewsContent key={anews._id} anews={anews}></NewsContent>
        ))}
      </div>
      <div className="">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default Home;
