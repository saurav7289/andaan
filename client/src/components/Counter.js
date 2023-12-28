import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = (props) => {
  const [countOn, setCountOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div
        data-aos="zoom-in"
        className="m-5 container"
        style={{
          width: '250px',
          height: '150px',
          backgroundColor: 'lightgray',

          borderRadius: '15px',
        }}
      >
        <h1
          className="m-auto text-center p-auto pt-4  fw-bold"
          style={{ fontSize: '50px' }}
        >
          {countOn && <CountUp start={0} end={1000} duration={2} delay={0} />}+
        </h1>
      </div>
      <h6 className="text-center">{props.detail}</h6>
    </ScrollTrigger>
  );
};

export default Counter;
