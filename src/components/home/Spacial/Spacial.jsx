import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import Heading from "../../ui/Heading";
import { Col, Container, Row } from "react-bootstrap";
import spacial from "../../../assets/images/spicial/image_specials_1.png";
import SpacialCard from "./SpacialCard";
const Spacial = () => {
    const spacial_arr=[
        {
            price:"40",
            title:"Gazpacho Garlic",
            description:"Chilled tomato, cucumber, garlic, red pepper soup."
        },
        {
            price:"55",
            title:"Pan Con Berenjina Frita",
            description:"Marinated seabass with sour sauce, dill & coriander on bread."
        },
        {
            price:"35",
            title:"New Lubina Marinada",
            description:"Fried aubergine with almond on bread (2 pieces)."
        },
        {
            price:"60",
            title:"Gazpacho",
            description:"Atlantic cod fillet, chips, salad, tartare, lemon."
        },
        {
            price:"82",
            title:"Coconut Chia Bowl",
            description:"Marinated seabass with sour saucel & coriander on bread."
        },
        {
            price:"55",
            title:"New Lubina Marinada",
            description:"Atlantic cod fillet, chips, salad, tartare, lemon."
        },
        {
            price:"44",
            title:"Gazpacho Garlic",
            description:"Chilled tomato, cucumber, garlic, red pepper soup."
        },
    ]
  return (
    <section>
      <Heading
        bigTXT={"SPECIALS"}
        smallTXT={"Check out our menu"}
        smallTXT2={
          "Demoralized by the charms of pleasure of the moment so blinded except to some advantage."
        }
      />
      <div className="w-75 mx-auto mt-4">
        <Row className="align-items-center">
          <Col lg="5" className="">
            <div className="">
              <img
                src={spacial}
                className="w-100 h-100 object-fit-cover"
                alt="spacial food"
              />
            </div>
            <div className="p-2 d-flex  bg-primary-color justify-content-center align-items-center">
              <p className="mb-0 text-white d-flex justify-content-between w-100">VIEW ALL MENU</p>
              

                <AiOutlineArrowRight  color="white" className="rounded-circle border border-2 spanArrow"/>
              
            </div>
          </Col>
          <Col lg="7">

            
           {
            spacial_arr.map((card,idx)=>(
                <SpacialCard key={idx} {...card}/>
            ))
           }
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Spacial;
