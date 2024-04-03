import React from "react";

const SpacialCard = ({ price, title, description }) => {
  return (
    <div className="d-flex  justify-content-between dotted ">
      <div>
        <h3 className="text-red">{title}</h3>
        <p className="text-link mb-2">
          {description}
        </p>
      </div>
      <span className="text-red fw-bold ">${price}</span>
    </div>
  );
};

export default SpacialCard;
