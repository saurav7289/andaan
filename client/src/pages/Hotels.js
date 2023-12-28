import React, { useEffect, useState } from 'react';
import { getHotel } from '../service/Api';
import Card from '../components/Card';
import '../App.css';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
const Hotels = () => {
  const [hotels, setHotels] = useState();

  useEffect(() => {
    getAllHotels();
  }, []);

  const getAllHotels = async () => {
    const res = await getHotel();
    setHotels(res.data);
  };

  return (
    <>
      <NavLink to="/">
        <button className=" Btn btn rounded fs-6 mt-3 me-3 fw-bold position-fixed end-0 ">
          Home
        </button>
      </NavLink>

      <div className="cardArrange">
        {hotels?.map((hotel) => (
          <Card detail={hotel} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
