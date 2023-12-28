import React from 'react';

const Footer = () => {
  return (
    <>
      <div
        className="mt-5 pt-5 pb-5 d-flex justify-content-evenly align-items-center"
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        <h6 role="button">© Copyright 2023 by Andaan.org</h6>
        <h6 role="button">Privacy Policy / Terms of Condition</h6>
      </div>
    </>
  );
};

export default Footer;
