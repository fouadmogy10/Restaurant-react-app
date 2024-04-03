import React from "react";
import chef from "../../assets/images/image_ourChef.png";
import { Container } from "react-bootstrap";
import PrimaryButton from "../ui/PrimaryBtn";
const OurChef = () => {
  return (
    <section
      className=""
      style={{
        backgroundColor: "#FFDFDF",
        //   backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.608))"
      }}
    >
      <div
        className="container-80 d-flex align-items-start justify-content-center flex-column chef py-2"
        style={{
          minHeight: "300px",
          backgroundImage: `url(${chef})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-right">
          <h4 className="text-red fw-thin">TASTY AND CRUNCHY</h4>
          <h2 className="fw-bold text-link">Our Chef</h2>
          <p className="text-link my-3 w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod  tempor incidition ullamco laboris nisi ut aliquip ex ea
            commodo condor  consectetur adipiscing elit, sed do eiusmod tempor
            incidition ullam.
          </p>
        </div>
        <div className="text-center w-100 mt-2">
          <PrimaryButton>VIEW OUR ALL MANU</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default OurChef;
