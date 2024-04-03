import React from "react";

const Card = ({
  name,
comment,
img
}) => {
  return (
    <div
    style={{
      textAlign: "-webkit-center",
      paddingRight: 20,
      paddingLeft: 20,
    }}
  >
    <div className="testimonials-profile-circle">
      <img
        width={50}
        height={50}
        src={img}
        alt="testimonial-avatar"
        className="testimonial-avatar"
      />
    </div>
    <p className="text-red">
      {comment}
    </p>
    <h6 className="review-by text-link">- {name}</h6>
  </div>
  );
};

export default Card;
