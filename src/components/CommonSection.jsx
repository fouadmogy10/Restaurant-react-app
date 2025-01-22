import React from "react";

const CommonSection = ({ img, title, desc, desc2 }) => {
  return (
    <section
      className="d-flex flex-column  justify-content-center align-items-center commonSec text-white"
      style={{
        minHeight: "280px",
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.6)), url(${img})`
      }}
    >
      <h1 className="fw-bold">{title}</h1>
      <p className="mb-0">{desc}</p>
      <p>{desc2}</p>
    </section>
  );
};

export default CommonSection;
