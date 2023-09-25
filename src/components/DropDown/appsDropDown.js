import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTeamDetails,
  fetchTeams,
  fetchAppDetails,
  fetchApps,
} from "../../redux/store";
import { Link } from "gatsby";
import { MDBBtn } from "mdbreact";

const AppDropdownComponent = ({ teamName, appName }) => {
  const teams = useSelector((state) => state.teams.data);
  const [isIconUp, setIsIconUp] = useState(false);
  console.log("teams", teams);
  const isFetching = teams ? teams.isFetching : false;
  const dropdownRef = useRef(null);

  console.log("appName,teamname", teamName, appName);

  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.teamDetails);
  //const teamName = teamDetails ? teamDetails.name : "";
  //console.log("teamName", teamName);

  const apps = useSelector((state) => state.appsData.appsData);
  console.log("apps", apps);

  const isFetchingApps = apps ? apps.loading : true;

  const appgroupsapp = apps ? apps.appGroupApps : [];
  console.log("appgroupsapp", appgroupsapp);

  // const appgroups = teams ? teams.appGroups : [];
  // console.log("appgroups", appgroups);

  const handleClickTeam = (appGroup) => {
    dispatch(fetchTeamDetails(appGroup));
  };

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  const handleFetchApps = (appGroup) => {
    dispatch(fetchApps(appGroup));
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsIconUp(!isIconUp);
  };

  const handleButtonClick = () => {
    handleFetchApps(appName);
    handleClickTeam(appName);
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

  const handleAppClick = () => {
    dispatch(fetchAppDetails(teamName, appName));
  };

  return (
    <div className="d-flex justify-content-end">
      <div
        className={`dropdown  text-white  ${isOpen ? "show" : ""}`}
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
              className="text-white "
              to={`/${teamName}/apps/${appName}/edit`}
              onClick={handleAppClick}
            >
              Edit
            </Link>
          </button>
          <button
            className="btn btn-sm align-items-center  border border-5 m-0 p-2"
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

        <div className={`dropdown-menu text-end   ${isOpen ? "show" : ""}`}>
          <Link
            to={`/${teamName}/apps/${appName}/delete`}
            onClick={handleAppClick}
            className="dropdown-item"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDropdownComponent;
