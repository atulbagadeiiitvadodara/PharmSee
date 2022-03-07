import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="assets/bg2.jpeg" className="card-img" alt="background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEWLY ARRIVED MEDICINES</h5>
            <p className="card-text lead fs-2">
              CHECK THEM OUT!
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
