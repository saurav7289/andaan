import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';
import { addNgoHotel, manageHotelApi, sendMail } from '../service/Api';

const Card = (props) => {
  const navigate = useNavigate();
  const [ngoId, setNgoId] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('ngoToken'));
    if (token) {
      setNgoId(true);
    }
  }, []);

  const manageHotel = async (id) => {
    setLoading(true);
    const ngokiId = JSON.parse(localStorage.getItem('id'));
    const res = await addNgoHotel(id, ngokiId);
    if (res.status === 201) {
      const res = await sendMail(id, ngokiId);
      if (res.status === 200) {
        const response = await manageHotelApi(id);
        if (response.status === 200) {
          setLoading(false);
          navigate('/');
        }
      }
    }
  };

  return (
    <>
      <div className="row m-3 p-3">
        <div
          className="card"
          style={{ width: 'auto', height: 'auto' }}
          key={props.detail._id}
        >
          <img
            src={props.detail.pic ? props.detail.pic : './images/slider-3.png'}
            className="card-img-top mt-2"
            alt="food"
            style={{ height: '150px' }}
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>{props.detail.restruantName}</b>
            </h5>
            <p className="card-text">
              {props.detail.email}
              <br />
              {props.detail.mobile}
              <br />
              {props.detail.address}
              <br />
              {props.detail.city}
              <br />
              {props.detail.zipCode}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {props.detail.foodType}{' '}
              <span className="ms-5">Qty: {props.detail.foodQty} kg</span>
            </li>

            <li className="list-group-item">
              Date: {props.detail.date}
              <span className="ms-3">{props.detail.time}</span>
            </li>
          </ul>
          {ngoId ? (
            <div className="card-body">
              <NavLink
                href="#"
                className="card-link"
                style={{ textDecoration: 'none' }}
                onClick={() => {
                  manageHotel(props.detail._id);
                }}
              >
                <button className="getFood btn rounded fs-6 m-auto fw-bold">
                  {loading ? (
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    'Get Food'
                  )}
                </button>
              </NavLink>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
