import React from "react";

const CommonSection = ({ img, title, desc, desc2 }) => {
  return (
    <section
      className="d-flex flex-column  justify-content-center align-items-center commonSec text-white"
      style={{
        minHeight: "280px",
        backgroundImage: `url(${img})`,
      }}
    >
      <h1 className="fw-bold">{title}</h1>
      <p className="mb-0">{desc}</p>
      <p>{desc2}</p>
    </section>
  );
};

export default CommonSection;
