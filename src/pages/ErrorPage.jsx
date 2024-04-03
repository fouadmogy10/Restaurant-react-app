import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const ErrorPage = () => {
  return (
    <section
      style={{ minHeight: "100vh" }}
      className="d-flex justify-content-center 
    align-items-center flex-column 
    text-center w-100"
    >
       <Meta title={"error "} desc={"Lorem ipsum dolor sit amet."}/>
      <h1 className="display-1 fw-bold text-red w-50 ">404</h1>
      <div>
        <p className="display-4">Looks Like You're Lost</p>
        <p>The page you are looking for not available...</p>
        <Link
          to="/"
          className="text-white text-decoration-none px-4 py-3 
                       d-inline-block mt-2 rounded def-btn"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
