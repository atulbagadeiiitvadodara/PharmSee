import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Context } from "./Context";
import Login from "./Login";
import Signup from "./Signup";
import axios from "axios";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  const [context, setContext] = useContext(Context);
  const history = useHistory();

  const handleLogout = async () => {
    await axios({
      method: "post",
      url: "https://pharmasee504.herokuapp.com/logout",
    })
      .then(function (response) {
        if (response.data.status == "success") {
          history.push("/");
          setContext("");
        } else console.log("error");
      })
      .catch(function (error) {
        console.log("login error", error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            PharmSee
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Latest Meds
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {context != "" ? (
              <p className="my-1">
                <i class="fa fa-user"></i> {context}
              </p>
            ) : (
              <span></span>
            )}
            <div className="buttons">
              {context == "" && <Login />}
              {context == "" && <Signup />}
              {context != "" && (
                <button
                  className="btn btn-outline-dark ms-2"
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out me-1"></i>Logout
                </button>
              )}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart({state.length}
                )
              </NavLink>
            </div>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
