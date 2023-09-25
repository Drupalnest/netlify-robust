import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamDetails, fetchTeams, setDeveloper } from "../../redux/store";
import { Link } from "gatsby";
import { MDBBtn } from "mdbreact";

const MembersDropDown = ({ member }) => {
  const teams = useSelector((state) => state.teams.data);
  const [isIconUp, setIsIconUp] = useState(false);
  const dispatch = useDispatch();
  console.log("teams", teams);
  const isFetching = teams ? teams.isFetching : false;
  const dropdownRef = useRef(null);

  // const appgroups = teams ? teams.appGroups : [];
  // console.log("appgroups", appgroups);

  const handleEditClick = (developer) => {
    dispatch(setDeveloper(developer));
  };

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  const teamDetails = useSelector((state) => state.teamDetails);
  console.log("members", teamDetails);
  const team = teamDetails ? teamDetails.name : "";
  console.log("team", team);

  const membersAttribute = teamDetails?.attributes.find(
    (attr) => attr.name === "__apigee_reserved__developer_details"
  );

  // Deserialize the members data
  const membersSerialized = membersAttribute?.value || "[]"; // Default to an empty array if value is not present
  const members = JSON.parse(membersSerialized);
  console.log("members Unserialized", members);

  const admins = members
    .filter((item) => item.roles.includes("admin"))
    .map((item) => item.developer)
    .join(", ");

  console.log("admins", admins);

  // const tableRef = useRef();
  // useEffect(() => {
  //   tableRef.current && window.$(tableRef.current).DataTable();
  // }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsIconUp(!isIconUp);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div
        className={`dropdown  text-white d-flex ${isOpen ? "show" : ""}`}
        ref={dropdownRef}
      >
        <div className="">
          <button
            className="btn btn-sm m-0"
            style={{
              backgroundColor: "#002A5C",
              fontSize: "14px",
              color: "white",
              //width: "150px",
              //height: "40px",
            }}
          >
            <Link
              className="text-white m-0 p-0"
              type="button"
              to={`/members/${member}/edit`}
              onClick={() => handleEditClick(member)}
            >
              Edit
            </Link>
          </button>
          <button
            className="btn btn-sm align-items-center border border-4 m-0 p-2"
            onClick={toggleDropdown}
            style={{ backgroundColor: "#F46223" }}
          >
            <i
              style={{ backgroundColor: "#F46223" }}
              className={`fas fa-chevron-${
                isIconUp ? "up" : "down"
              } mx-auto text-white `}
            ></i>
          </button>
        </div>

        <div className={`dropdown-menu   ${isOpen ? "show" : ""}`}>
          <Link
            className="dropdown-item"
            to={`/members/${member}/remove`}
            onClick={() => handleEditClick(member)}
          >
            Remove
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembersDropDown;
