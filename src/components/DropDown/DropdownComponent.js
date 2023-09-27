import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamDetails, fetchTeams, fetchApps } from "../../redux/store";
import { Link } from "gatsby";
import { MDBBtn } from "mdbreact";

const DropdownComponent = ({ appGroup }) => {
  const teams = useSelector((state) => state.teams.data);
  const [isIconUp, setIsIconUp] = useState(false);
  const dispatch = useDispatch();
  console.log("teams", teams);
  const isFetching = teams ? teams.isFetching : false;
  const dropdownRef = useRef(null);

  console.log("appGroup",appGroup)

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
    handleFetchApps(appGroup);
    handleClickTeam(appGroup);
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
    <div className="d-flex justify-content-end">
      <div
        className={`dropdown  text-white rounded ${isOpen ? "show" : ""}`}
        ref={dropdownRef}
      >
        <div className="">
          <button
            className="btn btn-sm  rounded  m-0"
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
              //type="button"
              to={`/${appGroup}/apps`}
              onClick={() => {
                handleButtonClick();
              }}
            >
              Appgroup App
            </Link>
          </button>
          <button
            className="btn btn-sm align-items-center rounded border border-4 m-0 p-2"
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
            className="dropdown-item"
            to={`/${appGroup}/edit`}
            onClick={() => handleClickTeam(appGroup)}
          >
            Edit
          </Link>
          <Link
            to={`/${appGroup}/members`}
            className="dropdown-item"
            onClick={() => handleClickTeam(appGroup)}
          >
            Members
          </Link>
          <Link
            to={`/${appGroup}/delete`}
            className="dropdown-item"
            onClick={() => handleClickTeam(appGroup)}>
          
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;

{
  /* <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Options
                      </button>
                      <div className="dropdown-menu">
                        <Link
                          to={`/${appGroup.name}/apps`}
                          className="dropdown-item"
                          onClick={() => {
                            handleFetchApps(appGroup.name);
                            handleClickTeam(appGroup.name);
                          }}
                        >
                          Appgroup Apps
                        </Link>
                        <Link
                          to={`/${appGroup.name}/members`}
                          className="dropdown-item"
                          onClick={() => handleClickTeam(appGroup.name)}
                        >
                          Members
                        </Link>
                        <Link
                          to={`/${appGroup.name}/edit`}
                          className="dropdown-item"
                          onClick={() => handleClickTeam(appGroup.name)}
                        >
                          Edit
                        </Link>
                        <Link
                          to={`/${appGroup.name}/delete`}
                          className="dropdown-item"
                          onClick={() => handleClickTeam(appGroup.name)}
                        >
                          Delete
                        </Link>
                      </div>
                    </div> */
}
