import { Link } from "gatsby";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppDetails, fetchApps } from "../../redux/store";

const MemberButton = () => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <ul
        className="tabs nav-tabs nav-tabs--primary clearfix"
        style={{ marginLeft: "150px" }}
      >
        <li className="nav-item tabs__tab">
          <Link
            className={`nav-link ${
              currentPage === "/profile" ? "active" : ""
            }`}
            to="/profile"
            onClick={() => setCurrentPage("/profile")}
          >
            Profile home 
          </Link>
        </li>
        <li className="nav-item tabs__tab">
          <Link
            className={`nav-link ${
              currentPage === "/edit-profile" ? "active" : ""
            }`}
            to="/edit-profile"
            onClick={() => setCurrentPage("/edit-profile")}
          >
            Edit profile
          </Link>
        </li>
        
        
      </ul>
    </div>
  );
};

export default MemberButton;
