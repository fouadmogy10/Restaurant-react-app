import React from "react";
import { Button, Form } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center text-center gap-2">
      <Form.Control
        aria-label="Example text with button addon"
        className="border-red bg-transparent searchbar-inp"
        style={{
            maxWidth:"400px"
        }}
      />
      <Button variant="danger" className="fs-3">Go</Button>
    </div>
  );
};

export default SearchBar;
