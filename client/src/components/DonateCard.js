import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
const DonateCard = (props) => {
  return (
    <>
      <NavLink
        to="/donate-now"
        style={{
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          textDecoration: 'none',
        }}
        className="rounded"
      >
        <div
          data-aos={props.data}
          className=" d-flex justify-content-around align-items-center rounded"
          style={{
            minWidth: '400px',
            minHeight: '300px',
            backgroundImage: props.imgData,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            zIndex: '-1',
          }}
        >
          <h1 style={{ borderBlock: 'solid white' }}>{props.detail}</h1>
        </div>
      </NavLink>
    </>
  );
};

export default DonateCard;
