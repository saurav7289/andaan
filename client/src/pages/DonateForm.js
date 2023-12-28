import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { hotelDataApi } from '../service/Api';
import Footer from '../components/Footer';

const donateForm = {
  name: '',
  restruantName: '',
  mobile: '',
  email: '',
  foodQty: '',
  address: '',
  foodType: '',
  city: '',
  zipCode: '',
  date: '',
  time: '',
  pic: '',
};
const DonateForm = () => {
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(donateForm);
  const [loading, setLoading] = useState(false);
  
  console.log(hotel);

  // upload file on cloudnary
  const postDetails = async (pics) => {
    try {
      setLoading(true);
      if (pics === undefined) {
        toast.error('Please Select an Image!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setLoading(false);
      } else if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
        const data = new FormData();
        data.append('file', pics);
        data.append('upload_preset', 'chat-app');
        data.append('cloud_name', 'dxo97hn5c');
        const respones = await fetch(
          'https://api.cloudinary.com/v1_1/dxo97hn5c/image/upload',
          {
            method: 'post',
            body: data,
          }
        );
        const resData = await respones.json();
        const imageUrl = resData.secure_url;
        console.log(imageUrl);
        setHotel({ ...hotel, pic: imageUrl });
        setLoading(false);
      } else {
        toast.error('Please Select an Image!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log(hotel.pic);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    // try {
    //   console.log(hotel.city);
    //   const response = await fetch(
    //     `https://nominatim.openstreetmap.org/search?format=json&q=${hotel.city}`
    //   );
    //   const data = await response.json();

      
    //   if (data.length > 0) {
    //     const { lat, lon } = data[0];

    //     setLatitude(lat);
    //     setLongitude(lon);
    //     hotel.latitude = latitude;
    //     hotel.longitude = longitude;
    //     console.log(hotel.latitude);
    //     console.log(hotel.longitude);
    //   } else {
    //     console.error('Location not found');
    //   }
    // } catch (error) {
    //   console.error('Error fetching location data:', error);
    // }

    if (
      !hotel.name ||
      !hotel.restruantName ||
      !hotel.mobile ||
      !hotel.foodQty ||
      !hotel.foodType ||
      !hotel.address ||
      !hotel.city ||
      !hotel.date ||
      !hotel.time ||
      !hotel.email ||
      !hotel.zipCode
    ) {
      toast.error('Please Fill all the fields', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setLoading(false);
    } else {
      const res = await hotelDataApi(hotel);
      console.log(res);
      console.log(res.status);
      if (res.status === 201) {
        setHotel(donateForm);
        setLoading(false);
        navigate('/donate-card');
      } else {
        toast.error('Failed To Register !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setLoading(false);
      }
    }
  };

  return (
    <>
      <form data-aos="zoom-in" className="row mt-5 m-auto">
        <div className="col-md-6 m-auto">
          <h3 className="text-center col-md-9 mb-5">
            🥞 Satisfy a Man's Hunger🍞
          </h3>
          <div className="col-md-9 mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-md-9 mb-3">
            <input
              type="text"
              className="form-control"
              name="restruantName"
              placeholder="Restaurant Name / Wedding / Donate "
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-md-9 mb-3">
            <input
              type="number"
              className="form-control"
              name="mobile"
              min="10"
              max="10"
              placeholder="Mobile No."
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-md-9 mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-md-9 mb-3">
            <input
              type="number"
              className="form-control"
              name="foodQty"
              placeholder="Food Qty in kg"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col-md-9 mb-3">
            <select
              className="form-control"
              name="foodType"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
            >
              <option className="text-grey">Select Food Type</option>
              <option>Raw food</option>
              <option>cooked food</option>
              <option>Boil food</option>
            </select>
          </div>
          <label>Set Time for Donate</label>
          <div className="col-md-9 mb-3 d-flex justify-content-around">
            <input
              type="Date"
              className="form-control m-auto"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
              name="date"
              placeholder="Date for Donate"
            />
            <input
              type="time"
              className="form-control m-auto"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
              name="time"
              placeholder="Time for Donate"
            />
          </div>
          <div className="col-md-9 mb-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
              name="address"
              placeholder="address"
            />
          </div>
          <div className="col-md-9 mb-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
              name="city"
              placeholder="City"
            />
          </div>
          <div className="col-md-9 mb-3 d-flex justify-content-around">
            <input
              type="number"
              className="form-control m-auto"
              onChange={(e) =>
                setHotel({ ...hotel, [e.target.name]: e.target.value })
              }
              name="zipCode"
              placeholder="Zip code"
            />
            <input
              type="file"
              accept="image/*"
              className="form-control m-auto"
              placeholder="upload image"
              onChange={(e) => postDetails(e.target.files[0])}
              name="pic"
            />
          </div>

          <div className="col-md-9 text-center mb-5">
            <button className="btn Btn fw-bold" onClick={submitHandler}>
              {loading ? (
                <div className="spinner-border text-warning" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                'Donate now'
              )}
            </button>
            <ToastContainer
            // position="top-center"
            // autoClose={5000}
            // hideProgressBar={false}
            // newestOnTop={false}
            // closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            // theme="colored"
            />
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default DonateForm;
