import { Link } from "gatsby";
import React from "react";
import Layout from "../Layout";
import Buttons from "../Buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamDetails, fetchTeams, setDeveloper } from "../../redux/store";

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

  const handleEditClick = (developer) => {
    dispatch(setDeveloper(developer));
  };

  return (
    <Layout>
      <Buttons />
      <div>
        <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
          <div className="page">
            <div className="page__tasks">
              <div className="container">
                <div className="contextual-region block block--starbucks-actions">
                  <div className="my-4">
                    <Link
                      to="/add-member"
                      className="button button-action btn btn-sm btn-primary"
                    >
                      Add Members
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div />
                  <div className="container">
                    <h1 className="js-quickedit-page-title page__title mb-0">
                      Team Members
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <main className="main" role="main">
              <div className="page-layout-sidebar-default">
                <div className="container py-5">
                  <div className="row">
                    <div className="page__content col-md">
                      <div className="hidden" />

                      <table className="responsive-enabled table">
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
                                            to="/edit-member"
                                            onClick={() =>
                                              handleEditClick(member.developer)
                                            }
                                          >
                                            Edit
                                          </Link>
                                        </li>
                                        <li style={{ listStyle: "none" }}>
                                          <Link
                                            to="/delete-member"
                                            onClick={() =>
                                              handleEditClick(member.developer)
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
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
