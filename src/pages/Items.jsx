import React from "react";
import CommonSection from "../components/CommonSection";
import banner from "../assets/images/image_items_bg.jpg";
import { Col, Row } from "react-bootstrap";
import Heading from "../components/ui/Heading";
import SearchBar from "../components/items/searchBar";
import ItemsCard from "../components/items/ItemsCard";
import { data } from "../components/items/data";
import img2 from "../assets/images/image_itemsList_ooffer.jpg";
import bannar2 from "../assets/images/image_itemsList_ooffer_2.jpg";
import Meta from "../components/Meta";
const Items = () => {
  return (
    <section>
      <CommonSection
        img={banner}
        title={"ITEMS"}
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "}
        desc2={"do eius mod tempor incididunt ut labore et dolore magna."}
      />
       <Meta title={"Menu Page"} desc={"Lorem ipsum dolor sit amet."}/>
      <div className="container">
        <Heading
          smallTXT={"It’s the food and groceries you Love, delivered"}
          classname={"fw-bold fs-3"}
        />
        <SearchBar />
        <Row className="pt-4">
          <Col lg="6">
            {data?.map((item, idx) => {
              if (item.id < 6) {
                return <ItemsCard {...item} key={Math.random()} />;
              }
            })}
          </Col>
          <Col lg="6">
            <img src={img2} alt="" className="w-100 mb-2 object-fit-cover" style={{
                minHeight:"570px                "
            }} />
            {data?.map((item, idx) => {
              if (item.id == "6" || item.id == 7) {
                return <ItemsCard {...item} key={Math.random()} />;
              }
            })}
          </Col>
        </Row>
        <CommonSection img={bannar2} />
        <br />
        <Row>
          {data?.map((item, idx) => {
            if (item.id < 7) {
              return (
                <Col lg="6" key={Math.random()}>
                  <ItemsCard {...item} />
                </Col>
              );
            }
          })}
        </Row>
      </div>
    </section>
  );
};

export default Items;
