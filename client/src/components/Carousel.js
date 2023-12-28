import React from 'react';

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide position-relative z-n1"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./images/slider-3.png"
              class="d-block w-100"
              alt="slider-3"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./images/slider-4.png"
              class="d-block w-100"
              alt="slider-3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
