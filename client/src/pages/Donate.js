import React from 'react';
import DonateCard from '../components/DonateCard';

const Donate = () => {
  return (
    <>
      <h3 data-aos="zoom-in" className=" mt-5 text-center">
        Who Are You 🤔
      </h3>
      <div
        style={{
          borderTop: '2px solid black',
          width: '50px',
          margin: 'auto',
          textAlign: 'center',
        }}
      ></div>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: '80vh' }}
      >
        <DonateCard
          detail="Restaurant"
          imgData="url(./images/restaurant.jpg)"
          data="fade-right"
        />
        <DonateCard
          detail="Parties"
          imgData="url(./images/party.jpg)"
          data="zoom-in"
        />
        <DonateCard
          detail="Person"
          imgData="url(./images/anyone.jpg)"
          data="fade-left"
        />
      </div>
    </>
  );
};

export default Donate;
