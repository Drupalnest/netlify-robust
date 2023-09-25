import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamDetails, fetchTeams } from "../../redux/store";
import { json } from "react-router-dom";

const AddMembers = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allUserUser {
  //       edges {
  //         node {
  //           display_name
  //           drupal_id
  //           id
  //         }
  //       }
  //     }
  //   }
  // `);

  const [username, setUsername] = useState("");
  const [selectedRoles, setSelectedRoles] = useState(["member"]);
  const [suggestions, setSuggestions] = useState([]);

  

  // Filter suggestions based on input
  //   const filteredSuggestions = data.allUserUser.edges
  //     .map((edge) => edge.node)
  //     .filter((user) => user.display_name.includes(input));
  //   setSuggestions(filteredSuggestions);
  // };

  // const handleSuggestionClick = (suggestion) => {
  //   setUsername(suggestion.display_name);
  //   setSuggestions([]); // Clear suggestions after selecting one
  // };

  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.teamDetails);
  console.log("edit", teamDetails);

  const isFetching = teamDetails ? teamDetails.loading : true; // Handle null value

  const team = teamDetails ? teamDetails.name : "";
  console.log("team", team);

  const descriptionValue = teamDetails
    ? teamDetails.attributes.find((attr) => attr.name === "description")?.value
    : "";

  const products = teamDetails
    ? teamDetails.attributes.find((attr) => attr.name === "api_product")?.value
    : "";
  console.log("products", products);

  const members = teamDetails
    ? teamDetails.attributes.find(
        (attr) => attr.name === "__apigee_reserved__developer_details"
      )?.value
    : "";
  console.log("members", members);

  const handleAddMember = async (e) => {
    e.preventDefault();
    const membersSerialized = members ? JSON.parse(members) : [];

    // Check if the developer already exists in the membersSerialized array
    const isDuplicate = membersSerialized.some(
      (member) => member.developer === developer
    );

    if (!isDuplicate) {
      // Add the new member if it's not a duplicate
      membersSerialized.push(newMember);
      console.log("Member added successfully.");
    } else {
      console.log("Duplicate entry found. Not adding the member.");
    }

    const serializedMergedData = JSON.stringify(membersSerialized);
    try {
      // const serializedApiProduct = serializeData.join(",");
      const response = await fetch(
        `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamDetails.name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
          body: JSON.stringify({
            attributes: [
              {
                name: "api_product",
                value: products,
              },
              {
                name: "description",
                value: descriptionValue,
              },
              {
                name: "__apigee_reserved__developer_details",
                value: serializedMergedData,
              },
              {
                name: "ADMIN_EMAIL",
                value: "kpatolia@starbucks.com",
              },
              {
                name: "DP_AdminEmails",
                value: admins,
              },
            ],
          }),
        }
      );

      if (response.ok) {
        // alert(serializedApiProduct);
        alert("Member added Successfully!");
        dispatch(fetchTeamDetails(team));
        navigate(`/${team}/members`);
      } else {
        alert("Failed to add member.");
      }
    } catch (error) {
      alert("An error occurred while adding the member");
    }
  };

  const handleRoleSelection = (role) => {
    setSelectedRoles((prevRoles) => {
      if (prevRoles.includes(role)) {
        return prevRoles.filter((r) => r !== role);
      } else {
        return [...prevRoles, role];
      }
    });
  };

  console.log("selectedRoles", selectedRoles);

  console.log("username", username);

  const membersSerialized = members ? JSON.parse(members) : [];

  const developer = username;
  const roles = selectedRoles;
  const newMember = { developer, roles };

  const mergedData = [...membersSerialized, newMember];

  const serializedMergedData = JSON.stringify(mergedData);
  console.log("serializedMergedData", serializedMergedData);

  // const admin = JSON.parse(serializedMergedData);

  // if (Array.isArray(admin)) {
  //   const admins = admin
  //     .filter((item) => item.roles.includes("admin"))
  //     .map((item) => item.developer)
  //     .join(", ");

  //   console.log(admins);
  // } else {
  //   console.error("admin is not a valid array.");
  // }

  const adminData = JSON.parse(serializedMergedData);

  const admins = adminData
    .filter((item) => item.roles.includes("admin"))
    .map((item) => item.developer)
    .join(", ");

  console.log("admins", admins);


  const handleInputChange = (event) => {
    const input = event.target.value;
    setUsername(input);
  }

  return (
    <Layout>
      <div
        className="dialog-off-canvas-main-canvas"
        data-off-canvas-main-canvas=""
        style={{ marginTop: "150px" }}
      >
        <div className="page">
          <div className="page__content-above">
            <div className="container-fluid px-0">
              <div className="contextual-region block block--pagetitle bg-lighter py-1">
                <div />
                <div className="container">
                  <h3 className="js-quickedit-page-title page__title mb-0">
                    Add Member
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
                    <form
                      onSubmit={handleAddMember}
                      className="apigee-edge-teams-add-team-member-form team-member-form"
                    >
                      <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
                        <legend className="float-left py-2 px-4 mb-0 border-bottom">
                          <span className="fieldset-legend"> Roles </span>
                          {/* <button className="btn-link">
                            <i className="fas fa-chevron-down d-md-none" />
                          </button> */}
                        </legend>

                        <div className="p-4 fieldset-wrapper">
                          <div
                            id="edit-team-roles"
                            className="form-checkboxes "
                          >
                            <small className="form-text py-2">
                              Assign one or more roles to &nbsp;all
                              developers&nbsp; that you selected in &nbsp;
                              <span className="font-italic">{team}</span>&nbsp;
                              appgroup.
                            </small>

                            <div className="js-form-item form-item js-form-type-checkbox form-item-team-roles-admin js-form-item-team-roles-admin form-check p-0">
                              <input
                                type="checkbox"
                                checked={selectedRoles.includes("admin")}
                                onChange={() => handleRoleSelection("admin")}
                                name="team_roles[admin]"
                                defaultValue="admin"
                                // className="form-checkbox form-check-input"
                                className="mx-2 "
                              />

                              <label className="form-check-label option py-2">
                                Administrator
                              </label>
                            </div>

                            <div className="js-form-item form-item js-form-type-checkbox form-item-team-roles-member js-form-item-team-roles-member form-check p-0">
                              <input
                                type="checkbox"
                                checked={selectedRoles.includes("member")}
                                onChange={() => handleRoleSelection("member")}
                                defaultValue="member"
                                // className="form-checkbox form-check-input"
                                className="mx-2"
                              />

                              <label className="form-check-label option">
                                Member
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <div className="js-form-item form-item js-form-type-entity-autocomplete form-type-entity-autocomplete form-item-username js-form-item-username form-group">
                        <label className="js-form-required form-required">
                          Username
                          <sup>
                            <i
                              className="fas fa-asterisk text-danger form-required__indicator"
                              style={{ fontSize: "0.7em" }}
                            />
                          </sup>
                        </label>

                        <input
                          className="form-autocomplete required form-control"
                          type="text"
                          id="edit-username"
                          name="username"
                          value={username}
                          onChange={handleInputChange}
                        />

                        {/* Render suggestions dropdown */}
                        {/* {username && suggestions.length > 0 && (
                          <div className="suggestions-dropdown">
                            {suggestions.map((user) => (
                              <div
                                key={user.id}
                                onClick={() => handleSuggestionClick(user)}
                                className="suggestion-item"
                                style={{
                                  padding: "8px",
                                  cursor: "pointer",
                                  transition: "background-color 0.3s ease",
                                  backgroundColor: "white",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = "green";
                                  e.target.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = "white";
                                  e.target.style.color = "black";
                                }}
                              >
                                {user.display_name}
                              </div>
                            ))}
                          </div>
                        )} */}
                      </div>

                      <button className="all-buttons-color js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-md text-white">
                        Add Member
                      </button>

                      <Link
                        to="/members"
                        className="button js-form-submit btn btn-md"
                      >
                        Cancel
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default AddMembers;
