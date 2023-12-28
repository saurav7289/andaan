import React, { useState } from 'react';
import '../App.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginApi } from '../service/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const ngoData = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(ngoData);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (login.email && login.password) {
      const res = await loginApi(login);

      if (res.status === 200) {
        setLogin(ngoData);
        localStorage.setItem('ngoToken', JSON.stringify(res.data.token));
        localStorage.setItem('id', JSON.stringify(res.data._id));
        setLoading(false);
        navigate('/donate-card');
      }
      if (res.status === 400) {
        toast.error('Invalid Email or Password', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setLogin(ngoData);
        setLoading(false);
      }
    } else {
      toast.error('please fill both field', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setLogin(ngoData);
      setLoading(false);
    }
  };
  return (
    <>
      <div data-aos="zoom-in" className="parent-div">
        <div style={{ flex: '50%', borderRight: '1px solid grey' }}>
          <form className="row mt-5">
            <div className="col-md-8 m-auto">
              <h3 className="text-center col-md-9 mb-5"> Login 👨‍💻</h3>

              <div className="col-md-9 mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setLogin({
                      ...login,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-md-9 mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  name="password"
                  placeholder="password"
                  onChange={(e) =>
                    setLogin({
                      ...login,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-md-9 text-center">
                <button
                  className="btn Btn fw-bold mb-3 p-auto"
                  onClick={submitHandler}
                >
                  {loading ? (
                    <div className="spinner-border text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    'login 👨‍💻'
                  )}
                </button>
                <ToastContainer />
              </div>
              <NavLink
                to="/register"
                className="col-md-9"
                style={{ color: 'black', float: 'right' }}
              >
                New User?Register 🙋‍♂
              </NavLink>
            </div>
          </form>
        </div>

        <div>
          <img
            style={{ flex: '50%' }}
            src="./images/breakfast.svg"
            alt="breakfast"
            width="50%"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
