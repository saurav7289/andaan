import React from 'react';

const NgoHotelCard = (props) => {
  return (
    <>
      <div
        data-aos="zoom-in"
        className="row m-1 p-1 mb-5 m-auto"
        style={{ height: 'auto' }}
      >
        <div
          className="card pb-3"
          style={{ width: 'auto', backgroundColor: '#efefef' }}
          key={props.detail._id}
        >
          <div className="card-body">
            <h5 className="card-title">
              <span style={{ fontSize: '15px', marginRight: '5px' }}>NGO:</span>{' '}
              <b>{props.detail.ngoName}</b>
            </h5>
            <h4 className="card-title">
              <span style={{ fontSize: '15px', marginRight: '5px' }}>
                Food Donar:
              </span>{' '}
              <b>{props.detail.restruantName}</b>
            </h4>
            <span style={{ float: 'right' }}>🤝</span>
          </div>
          <ul
            className="list-group list-group-flush"
            style={{ backgroundColor: 'lightgray' }}
          >
            <li
              className="list-group-item"
              style={{ backgroundColor: 'lightgray' }}
            >
              <b>{props.detail.foodType}</b>
              <span className="ms-5" style={{ float: 'right' }}>
                Qty: <b>{props.detail.foodQty} kg</b>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NgoHotelCard;
