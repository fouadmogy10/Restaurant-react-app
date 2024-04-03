import React from "react";
import Heading from "../../ui/Heading";
import { Col, Row } from "react-bootstrap";
import TeamCard from "./TeamCard";
import team1 from "../../../assets/images/team/image_ourTeam_1.png";
import team2 from "../../../assets/images/team/image_ourTeam_2.png";
import team3 from "../../../assets/images/team/image_ourTeam_3.png";
const OurTeam = () => {
  const arr = [
    {
      title: "Jhon Khan",
      img: team1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor  sit amet",
    },
    {
      title: "Jessica biel",
      img: team2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor  sit amet",
    },
    {
      title: " Brain Adams",
      img: team3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum dolor  sit amet",
    },
  ];
  return (
    <section className="py-5">
      <Heading
        bigTXT={"OUR TEAM"}
        smallTXT={"The Hardworking Team behind the restaurant"}
      />
      <Row className="py-5 justify-content-center">
        {arr.map((item, idx) => (
          <Col lg="4" md="6" key={item.title}>
            <TeamCard {...item} key={idx}/>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default OurTeam;
