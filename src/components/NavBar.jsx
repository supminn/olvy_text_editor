import React from "react";
import { Button } from "react-bootstrap";

export const NavBar = ({ setShow }) => {
  return (
    <nav className="border border-dark bg-dark text-white px-2 d-flex justify-content-between align-items-center position-sticky top-0">
      <Button variant="dark" className="fs-4 fst-italic">
        Richie Editor
      </Button>
      <Button variant="outline-light" onClick={() => setShow(true)}>
        How to use?
      </Button>
    </nav>
  );
};
