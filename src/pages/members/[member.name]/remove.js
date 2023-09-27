import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { Link, navigate } from "gatsby";
import { fetchTeamDetails, fetchTeams } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

const DeleteMember = () => {
  const developer = useSelector((state) => state.memberName.developer);
  console.log("developer", developer);

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


  const adminsEmail = teamDetails
  ? teamDetails.attributes.find((attr) => attr.name === "ADMIN_EMAIL")
      ?.value
  : "";
console.log("adminsEmail", adminsEmail);

  const handleDeleteMember = async (e) => {
    e.preventDefault();

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
                value: adminsEmail
            },
            ],
          }),
        }
      );

      if (response.ok) {
        // alert(serializedApiProduct);
        alert("Member remove Successfully!");
        dispatch(fetchTeamDetails(team));
        navigate(`/${team}/members`);
      } else {
        alert("Failed to remove members.");
      }
    } catch (error) {
      alert("An error occurred while remove member.");
    }
  };

  const membersSerialized = JSON.parse(members);
  console.log("membersSerialized", membersSerialized);

  // Find the index of the member to be removed
  const memberIndexToRemove = membersSerialized.findIndex(
    (member) => member.developer === developer
  );

  if (memberIndexToRemove !== -1) {
    // Remove the member from the array
    membersSerialized.splice(memberIndexToRemove, 1);
    console.log("Member removed successfully.");
  } else {
    console.log("Member not found in the list.");
  }

  const serializedMergedData = JSON.stringify(membersSerialized);
  console.log("serializedMergedData", serializedMergedData);

  return (
    <Layout>
      <div className="dialog-off-canvas-main-canvas" style={{marginTop:"120px"}}>
        <div className="page">
          <header className="page__header"></header>
          <div className="page__content-above">
            <div className="container-fluid px-0">
              <div className="contextual-region block block--pagetitle bg-lighter py-4">
                <div className="container">
                  <h3 className="js-quickedit-page-title page__title mb-0">
                    Are you sure that you would like to remove
                    &nbsp;{developer}&nbsp;from the team member?
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <main className="main" role="main">
            <div className="page-layout-sidebar-default">
              <div className="container py-2">
                <div className="row">
                  <div className="page__content col-md">
                    <form
                      className="apigee-edge-teams-remove-team-member-form confirmation team-member-form"
                      onSubmit={handleDeleteMember}
                    >
                      This action cannot be undone.
                      <div className="form-actions js-form-wrapper form-wrapper">
                        <button
                          type="submit"
                          defaultValue="Confirm"
                          className="all-buttons-color text-white js-form-submit form-submit btn btn-md"
                        >
                          Remove
                        </button>
                        <Link
                          to={`/${team}/members`}
                          className="button btn btn-md btn-outline-primary"
                        >
                          Cancel
                        </Link>
                      </div>
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

export default DeleteMember;
