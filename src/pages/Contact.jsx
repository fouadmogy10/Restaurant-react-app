import { IoIosTime } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import React from "react";
import { Col, Row } from "react-bootstrap";
import map from "../assets/images/map.png";
import img from "../assets/images/image_contact_bg.jpg";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import CommonSection from "../components/CommonSection";
import Meta from "../components/Meta";

const Contact = () => {
  return (
    <section >
       <Meta title={"Contact Page"} desc={"Lorem ipsum dolor sit amet."}/>
         <CommonSection  img={img} title={"CONTACT US"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "} desc2={"do eius mod tempor incididunt ut labore et dolore magna."}/>
        <div className="container-80">

      <Row className="align-items-center justify-content-center  ">
        <Col md="6" xs="12 " className="">
          <h4 className="text-red fw-bold">ADDRESS</h4>
          <div className="ms-2 my-2 text-link ">
            <p className="d-flex align-items-center  gap-1">
              <GiPositionMarker className="text-red" />{" "}
              <span>28 Seventh Avenue, Neew York, 10014</span>
            </p>
            <p className="d-flex align-items-center  gap-1">
              <BsFillTelephoneFill className="text-red" />
              <span>+880 1630 225 015</span>
            </p>
            <p className="d-flex align-items-center  gap-1">
              <GrMail className="text-red" /> <span>resturents@gmail.com</span>
            </p>
          </div>
          <h4 className="text-red fw-bold">WORKING HOURS</h4>
          <div className="ms-2 my-2 text-link ">
            <p className="d-flex align-items-center  gap-1">
              <IoIosTime  className="text-red"/> <span>7:30 am to 9:30pm on Weekdays</span>
            </p>
          </div>
          <h4 className="text-red fw-bold">FOLLOW US</h4>
          <div className="d-flex gap-4 text-red py-2">
        <AiFillFacebook size={20} />
        <AiFillInstagram size={20} />
        <AiFillLinkedin size={20} />
        <AiFillTwitterSquare size={20} />
      </div>
        </Col>
        <Col md={6} className="text-center  mb-3">
          <img
            src={map}
            className="w-100 h-100 object-fit-contain rounded mt-4"
            alt=""
          />
        </Col>
      </Row>
       
        </div>
    </section>
  );
};

export default Contact;
