import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Slider from '../Home/Slider';
import Nav from '../common/Nav';

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <Slider></Slider>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
