import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';
const Navbar = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('ngoToken'))) {
      setLogin(true);
    }
  }, []);

  const checkLogin = () => {
    const getToken = JSON.parse(localStorage.getItem('ngoToken'));
    if (getToken) {
      navigate('/donate-card');
    } else {
      navigate('/login');
    }
  };

  const logOut = () => {
    const removeToken = localStorage.removeItem('ngoToken');
    if (!removeToken) {
      setLogin(false);
      navigate('/');
    }
  };

  return (
    <>
      <div data-aos="zoom-in" className="d-flex justify-content-center ">
        <div className="container p-4 position-absolute ">
          <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 rounded">
            <div className="container-fluid   ">
              <NavLink
                className="navbar-brand fs-3 fw-bold"
                to="/"
                style={{ color: '#ff7c0c' }}
              >
                Andaan
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-flex justify-content-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item p-2 fs-5">
                    <NavLink
                      className="nav-link active "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item p-2 fs-5" onClick={checkLogin}>
                    <NavLink className="nav-link" to="#">
                      Get food
                    </NavLink>
                  </li>
                </ul>
              </div>

              {login ? (
                <NavLink to="#" onClick={logOut}>
                  <button className=" Btn btn rounded fs-6 m-auto fw-bold">
                    Log out
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/donate">
                  <button className=" Btn btn rounded fs-6 m-auto fw-bold">
                    Donate Now
                  </button>
                </NavLink>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
