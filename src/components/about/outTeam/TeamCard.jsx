import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import React from "react";
import { Card } from "react-bootstrap";

const TeamCard = ({title,desc,img}) => {
  return (
    <Card
      className=" text-center mx-auto mb-3  border-0"
      bg="transparent"
      style={{
        Height: "488px",
        width: "290px",
      }}
    >

      <Card.Body
        className="border-red rounded-circle d-flex justify-content-center align-items-center flex-column text-red text-center position-relative "
        style={{
            width: "290px",
            height: "290px",
        }}
      >
        <img src={img} width={100} height={100} alt="" className="position-absolute"  
        style={{top: "-4px",
            right: "0"}}  />
        <h4 className="fw-bold text-red " style={{marginTop:"72px"}}>{title}</h4>
        <p>
         {desc}
        </p>
      </Card.Body>
      <div className="d-flex justify-content-around text-red py-2">
        <AiFillFacebook size={20} />
        <AiFillInstagram size={20} />
        <AiFillLinkedin size={20} />
        <AiFillTwitterSquare size={20} />
      </div>
    </Card>
  );
};

export default TeamCard;
