import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { registerApi } from '../service/Api';
import Footer from './Footer';

const registerData = {
  name: '',
  ngoName: '',
  email: '',
  address: '',
  city: '',
  password: '',
  confirmPassword: '',
};
const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(registerData);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // try {
    //   const response = await fetch(
    //     `https://nominatim.openstreetmap.org/search?format=json&q=${register.city}`
    //   );
    //   const data = await response.json();

    //   // Extract latitude and longitude from the API response
    //   if (data.length > 0) {
    //     const { lat, lon } = data[0];

    //     setRegister.latitude(lat);
    //     setRegister.longitude(lon);
    //   } else {
    //     console.error('Location not found');
    //   }
    // } catch (error) {
    //   console.error('Error fetching location data:', error);
    // }

    if (
      register.name &&
      register.ngoName &&
      register.email &&
      register.address &&
      register.city &&
      register.password &&
      register.confirmPassword
    ) {
      if (register.password === register.confirmPassword) {
        const res = await registerApi(register);
        console.log(res.status);
        if (res.status === 201) {
          console.log(res);
          setRegister(registerData);
          console.log(res.data.id);
          console.log(res.data.token);
          localStorage.setItem('ngoToken', JSON.stringify(res.data.token));
          localStorage.setItem('id', JSON.stringify(res.data.id));
          setLoading(false);
          navigate('/donate-card');
        } else {
          toast.error('Ngo not registered', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });

          setRegister(registerData);
          setLoading(false);
        }
      } else {
        toast.error('Password does not match', {
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
    } else {
      toast.error('All filled are Mandetory', {
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

    // if (
    //   !register.name ||
    //   !register.ngoName ||
    //   !register.ngoId ||
    //   !register.email ||
    //   !register.address ||
    //   !register.city ||
    //   !register.zipCode ||
    //   !register.password ||
    //   !register.confirmPassword ||
    //   !register
    // ) {
    //   toast.error('All are Mandetory', {
    //     position: 'top-center',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'colored',
    //   });
    //   setLoading(false);
    // } else if (register.password !== register.confirmPassword) {
    //   toast.error('Password does not match', {
    //     position: 'top-center',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'colored',
    //   });
    //   setLoading(false);
    // } else {
    //   const res = await registerApi(register);
    //   if (res.status === 201) {
    //     setRegister(registerData);
    //     localStorage.setItem('userInfo', JSON.stringify(res));
    //     setLoading(false);
    //     navigate('/donate-card');
    //   } else {
    //     toast.error('server error', {
    //       position: 'top-center',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'colored',
    //     });
    //     alert('register fail');
    //     setRegister(registerData);
    //     setLoading(false);
    //   }
    // }
  };

  return (
    <>
      <div data-aos="zoom-in" className="parent-div">
        <div
          className="d-flex justify-content-center"
          style={{ flex: '50%', borderRight: '1px solid grey' }}
        >
          <img src="./images/cooking.svg" width="50%" alt="cooking" />
        </div>

        <div style={{ flex: '50%' }}>
          <div className="col-md-8 m-auto">
            <h3 className="text-center col-md-9 mb-5"> 👨‍💻 Register 👨‍💻</h3>
            <form className="row" action="#">
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Name"
                />
              </div>
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="ngoName"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="NGO Name"
                />
              </div>
              {/* <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="ngoId"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="NGO Id"
                />
              </div> */}
              <div className="col-md-9 mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Email"
                />
              </div>
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Address"
                />
              </div>
              <div className="col-md-9 mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="City"
                />
              </div>
              {/* <div className="col-md-9 mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="zipCode"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Zip Code"
                />
              </div> */}

              <div className="col-md-9 mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="password"
                />
              </div>
              <div className="col-md-9 mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  onChange={(e) =>
                    setRegister({
                      ...register,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Confirm Password"
                />
              </div>

              <div className="col-md-9 text-center">
                <button className="btn Btn fw-bold" onClick={handleSubmit}>
                  {loading ? (
                    <div className="spinner-border text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    'Register 👨‍💻'
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
              <NavLink
                to="/login"
                className="col-md-9 mt-5"
                style={{ color: 'black' }}
              >
                Already Registered? Login 🙋‍♂
              </NavLink>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
