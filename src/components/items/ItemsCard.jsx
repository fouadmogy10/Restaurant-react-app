import React from "react";
const ItemsCard = ({
    title,
    desc,
    img,
    price
}) => {
  return (
    <div className="d-flex align-items-center text-link shadow p-3 rounded mb-3">
      <div>
        <h5 className="fw-bold">{title}</h5>
        <p className="my-2">
          {desc}
        </p>
        <span className="fw-bold fs-4 ">{price}</span>
      </div>
      <span className="flex-grow" style={{
        flexGrow:1
      }}></span>
      <img src={img} className="me-2" alt="" style={{ width: "150px", height: " 150px" }} />
    </div>
  );
};

export default ItemsCard;
