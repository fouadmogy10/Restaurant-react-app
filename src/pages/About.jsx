import React from "react";
import CommonSection from "../components/CommonSection";
import bannar from "../assets/images/image_about-bg.jpg";
import { Container } from "react-bootstrap";
import AboutTop from "../components/about/AboutTop";
import Story from "../components/about/Story";
import OurChef from "../components/about/OurChef";
import Slider from "../components/about/slider/Slider";
import OurTeam from "../components/about/outTeam/OurTeam";
import Meta from "../components/Meta";
const About = () => {
  return (
    <section>
      <Meta title={"About Page"} desc={"Lorem ipsum dolor sit amet."}/>
      <CommonSection
        img={bannar}
        title={"About Us"}
        desc={"Read our Story, How we started and about the Team"}
      />
      <Container>
        <AboutTop />
        <Story />
      </Container>
      <OurChef />
      <Container>
        <Slider />
        <OurTeam/>
      </Container>
    </section>
  );
};

export default About;
