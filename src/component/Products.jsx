import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DATA from "../Data";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = [...DATA];
      if (componentMounted) {
        setData(response);
        setFilter(response);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Cold")}
          >
            Cold
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Beauty")}
          >
            Beauty
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Fitness")}
          >
            Fitness
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Ayush")}
          >
            Ayush
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}</h5>
                    <p className="card-text lead fw-bold">&#8377; {product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Meds</h1>
            <hr />
            <div className="row justify-content-center">
              {loading ? <Loading /> : <ShowProducts />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
