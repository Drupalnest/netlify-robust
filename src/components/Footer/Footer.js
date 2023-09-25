import { Link } from "gatsby";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-white fixed-bottom"
      
    >
      <div className="container p-4" />

      <div
        className="text-center p-3"
        style={{ backgroundColor: "#002A5C" }}
      >
        © 2023 Copyright:
        <Link className="text-white" >
         Web
        </Link>
      </div>
     
    </footer>
  );
};

export default Footer;
