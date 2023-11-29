import React from "react";
import { Link } from "gatsby";
import PageNotFoundImage from "../images/page_not_found.jpeg";

const NotFoundPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="text-center p-5">
        <img
          src={PageNotFoundImage}
          alt="Page Not Found"
          className="img-fluid mx-auto" // Center the image horizontally
          style={{ maxHeight: "80vh" }} // Limit the image height to 80% of the viewport height
        />
        <p className="fs-5 mt-4">
          Sorry, the page you are looking for might be under construction.
        </p>
        <Link
          to="/"
          className="btn btn-primary text-xxl text-xl text-lg text-md text-sm" // Replace with appropriate Bootstrap text utility classes
          role="button"
          style={{ textDecoration: "none" }}
        >
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
