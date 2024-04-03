import { BsFillTelephoneFill } from "react-icons/bs"; 
import { IoIosTime } from "react-icons/io"; 
import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="bg-primary-color">
      <Stack className=" container text-white flex-wrap" direction="horizontal" >
        <div className="p-2 d-flex align-items-center justify-content-center gap-2"><IoIosTime />7.30 AM - 9.30 PM</div>
        <div className="p-2 d-flex align-items-center justify-content-center gap-2"><BsFillTelephoneFill />+880 1630 225 015</div>
        <Link to={"/register"} className="p-2 ms-md-auto">REGISTER</Link>
      </Stack>
    </div>
  );
};

export default TopNav;
