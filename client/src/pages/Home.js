import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import NgoHotelCard from '../components/NgoHotelCard';
import { ngoHotel } from '../service/Api';
import '../App.css';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

const Home = () => {
  const [ngohotel, setNgohotel] = useState();

  useEffect(() => {
    getAllHotels();
  }, []);

  const getAllHotels = async () => {
    const res = await ngoHotel();
    setNgohotel(res.data);
  };

  return (
    <>
      <Navbar />
      <Carousel />
      <h4
        style={{
          margin: '150px auto 0px auto',
          textAlign: 'center',
        }}
      >
        Restaurant and NGO's HandShake 🫱🫲
        <div
          style={{
            margin: '10px auto 20px auto',
            textAlign: 'center',
            width: '100px',
            height: '5px',
            borderTop: '1px solid black',
          }}
        ></div>
      </h4>
      <div className="cardArrange1">
        {ngohotel?.map((ngohotel) => (
          <NgoHotelCard detail={ngohotel} />
        ))}
      </div>

      <h4 className="text-center m-auto mt-5 fw-bold fs-10">
        Daily Visitors 👨‍🦱
      </h4>
      <div className="m-auto d-flex flex-row justify-content-center align-items-center">
        <Counter detail="Monthly Donate" />

        <Counter detail="Active NGOs" />

        <Counter detail="Satisfied the Hunger 🙂" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
