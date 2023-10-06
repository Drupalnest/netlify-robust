import { Link } from "gatsby";
import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import Buttons from "../../components/Buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamDetails, fetchTeams, setDeveloper } from "../../redux/store";
import MembersDropDown from "../../components/DropDown/MembersDropDown";

const Members = ({}) => {
  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.teamDetails);
  console.log("members", teamDetails);
  const isFetching = teamDetails ? teamDetails.loading : true;
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

  const handleEditClick = (developer) => {
    dispatch(setDeveloper(developer));
  };

  // const tableRef = useRef();
  // useEffect(() => {
  //   tableRef.current && window.$(tableRef.current).DataTable();
  // }, []);

  return (
    <Layout>
      <div style={{ marginTop: "120px" }}>
        <Buttons />
        <div>
          <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
            <div className="page">
              <div className="page__tasks">
                <div className="container">
                  <div className="contextual-region block block--starbucks-actions">
                    <div className="d-flex justify-content-center mt-3 ">
                      <div className="my-4">
                        <Link
                          to="/members/add-member/"
                          className="button button-action btn rounded btn-md text-white"
                          style={{ backgroundColor: "#F46223" }}
                        >
                          Add Members
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="container">
                  <div className="contextual-region block block--starbucks-actions">
                    <div className="d-flex justify-content-center mt-3 ">
                      <Link
                        to="/add-team"
                        className="button button-action btn btn-sm text-white"
                        style={{ backgroundColor: "#002A5C" }}
                      >
                        Add Appgroup
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
              <div className="page__content-above">
                <div className="container-fluid px-0">
                  <div className="contextual-region block block--pagetitle bg-lighter py-4">
                    <div />
                    <div className="container">
                      <h3 className="js-quickedit-page-title page__title mb-0">
                        Team Members
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <main className="main" role="main">
                <div className="page-layout-sidebar-default">
                  <div className="container py-3">
                    <div className="row">
                      <div className="page__content col-md">
                        {/* <div className="input-group input-group-sm mb-3 d-flex">
                        <input
                          type="text"
                          className="form-control mx-2"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          style={{ width: "100px" }}
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                        <div className="input-group-append mx-2">
                          <button className="btn btn-primary" type="button">
                            Search
                          </button>
                        </div>
                      </div> */}

                        {/* <table className="responsive-enabled table">
                          <thead>
                            <tr>
                              <th>Member</th>
                              <th>Roles</th>
                              <th>Operations</th>
                            </tr>
                          </thead>
                          <tbody>
                            {members.length > 0 ? (
                              members.map((member, index) => (
                                <tr
                                  key={index}
                                  id={member.developer}
                                  className={index % 2 === 0 ? "even" : "odd"}
                                >
                                  <td>
                                    <Link to="">{member.developer}</Link>
                                  </td>
                                  <td>
                                    <ul>
                                      {member.roles.map((role, roleIndex) => (
                                        <li
                                          style={{ listStyle: "none" }}
                                          key={roleIndex}
                                        >
                                          {role === "admin"
                                            ? "Administrator"
                                            : role.charAt(0).toUpperCase() +
                                              role.slice(1)}
                                        </li>
                                      ))}
                                    </ul>
                                  </td>
                                  <td>
                                    <div className="dropbutton-wrapper">
                                      <div className="dropbutton-widget">
                                        <ul className="dropbutton">
                                          <li style={{ listStyle: "none" }}>
                                            <Link
                                              to={`/members/${member.developer}/edit`}
                                              onClick={() =>
                                                handleEditClick(
                                                  member.developer
                                                )
                                              }
                                            >
                                              Edit
                                            </Link>
                                          </li>
                                          <li style={{ listStyle: "none" }}>
                                            <Link
                                              to={`/members/${member.developer}/remove`}
                                              onClick={() =>
                                                handleEditClick(
                                                  member.developer
                                                )
                                              }
                                            >
                                              Remove
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="3">No members available</td>
                              </tr>
                            )}
                          </tbody>
                        </table> */}

                        <div className="container table-responsive  ">
                          {members.length > 0 ? (
                            <table className="table">
                              {/* ref={tableRef} */}
                              <thead className=" border-bottom">
                                <tr className="text-center align-middle  border-bottom">
                                  <th className=" border-bottom">
                                  Member No.
                                  </th>
                                  <th className=" border-bottom">Member</th>
                                  <th className=" border-bottom">Roles</th>
                                  <th className=" border-bottom">Operations</th>
                                </tr>
                              </thead>
                              <tbody className="text-center align-middle">
                                {members.map((member, index) => (
                                  <tr
                                    key={member.name}
                                    className=" text-center align-middle  border-bottom"
                                  >
                                    <td
                                      className=" text-center align-middle  border-bottom align-content-center  "
                                      scope="row"
                                    >
                                      {index + 1}
                                    </td>
                                    <td className=" text-center align-middle   border-bottom">
                                      <button
                                        className="rounded-3 text-center align-middle fw-bold "
                                        // onClick={() =>
                                        //   handleClickTeam(member.name)
                                        // }
                                        style={{
                                          background: "none",
                                          border: "none",
                                          cursor: "pointer",

                                          color: "black",
                                        }}
                                      >
                                        {/* onClick={() => handleFetchApps(appGroup.name)} */}
                                        {/* <Link to={`/${member.name}`}> */}
                                        <Link
                                          className="text-center align-middle"
                                          to=""
                                        >
                                          {member.developer}
                                        </Link>
                                        {/* </Link> */}
                                      </button>
                                    </td>

                                    <td className=" text-center align-middle border-bottom p-0 ">
                                      <ul>
                                        {member.roles.map((role, roleIndex) => (
                                          <li
                                            style={{ listStyle: "none" }}
                                            key={roleIndex}
                                          >
                                            {role === "admin"
                                              ? "Administrator"
                                              : role.charAt(0).toUpperCase() +
                                                role.slice(1)}
                                          </li>
                                        ))}
                                      </ul>
                                    </td>
                                    <td className="rounded-3 text-center align-middle  border-bottom">
                                      <MembersDropDown
                                        member={member.developer}
                                        // onClick={() =>
                                        //   handleEditClick(member.developer)
                                        // }
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p>No appgroups found</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
