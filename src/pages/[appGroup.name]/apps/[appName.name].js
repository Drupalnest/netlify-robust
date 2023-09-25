import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import AppsButton from "./AppsButton";
import {
  fetchTeamDetails,
  fetchAppDetails,
  updateAppDetails,
  appDetails,
} from "../../../redux/store";

import "../../../style/popup.css"

//import "../../../styles/popup.css";
import { Link, navigate } from "gatsby";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
//import "./viewstyle.css";

import DropDownDark from "../../../images/DropDownDark.svg";

const ViewApp = () => {
  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState({});

  const toggleDropdown = (credentialKey) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [credentialKey]: !prevState[credentialKey],
    }));
  };

  const getImageSource = () => {
    if (showDropdown) {
      // Use the open dropdown icon (reversed)
      return "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%3Ctitle%3E03_Iconography%2FDefault%2FDrop_Down_Dark%3C%2Ftitle%3E%0A%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%3Cg%20id%3D%2203_Iconography%2FDefault%2FDrop_Down_Dark%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Crect%20id%3D%22Bounds%22%20fill%3D%22%23FF0000%22%20opacity%3D%220%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%2224%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Cpolyline%20id%3D%22Path-5%22%20stroke%3D%22%23666666%22%20stroke-width%3D%221.75%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate(12.078668%2C%2011.959429)%20rotate(-90.000000)%20translate(-12.078668%2C%20-11.959429)%22%20points%3D%2214.5577155%206.88076112%209.5192385%2011.9192381%2014.6380971%2017.0380967%22%3E%3C%2Fpolyline%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"; // Replace with your open dropdown SVG data
    } else {
      // Use the closed dropdown icon

      return "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%3Ctitle%3E03_Iconography%2FDefault%2FDrop_Down_Dark%3C%2Ftitle%3E%0A%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%3Cg%20id%3D%2203_Iconography%2FDefault%2FDrop_Down_Dark%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Crect%20id%3D%22Bounds%22%20fill%3D%22%23FF0000%22%20opacity%3D%220%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%2224%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Cpolyline%20id%3D%22Path-5%22%20stroke%3D%22%23666666%22%20stroke-width%3D%221.75%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate(12.078668%2C%2011.959429)%20rotate(-90.000000)%20translate(-12.078668%2C%20-11.959429)%22%20points%3D%2214.5577155%206.88076112%209.5192385%2011.9192381%2014.6380971%2017.0380967%22%3E%3C%2Fpolyline%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"; // Replace with your closed dropdown SVG data
    }
  };

  // const teamDetails = useSelector((state) => state.teamDetails);
  // console.log("teamDetails",teamDetails)

  const appDetailsData = useSelector(
    (state) => state.appDetailsData.appDetailsData
  );
  console.log("appDetailsData", appDetailsData);

  const isFetching = appDetailsData ? appDetailsData.loading : true; // Handle null value

  const teamName = appDetailsData ? appDetailsData.appGroup : "";
  console.log("teamName", teamName);

  const appName = appDetailsData ? appDetailsData.name : "";

  // console.log("appData",appData)

  console.log("appName", appName);

  // useEffect(() => {
  //   // Fetch updated app details after the component mounts
  //   dispatch(fetchAppDetails(teamName, appName));
  // }, [dispatch, teamName, appName]);

  const [showSecrets, setShowSecrets] = useState({});
  const [showconsumerkey, setshowconsumerkey] = useState({});
  const [showKey, setShowKey] = useState(false);
  const [showKey1, setShowKey1] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [copyMessages, setCopyMessages] = useState({});
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  // const copyToClipboard = (text, index) => {
  //   navigator.clipboard.writeText(text);
  //   setCopyMessage("Copied!");
  //   setCopiedIndexes([...copiedIndexes, index]);
  //   setTimeout(() => {
  //     setCopyMessage("");
  //   }, 2000);
  // };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyMessage("");

      setTimeout(() => {
        setCopyMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      // Handle the error here if needed
    }
  };

  function customFormatTimestamp(timestamp) {
    if (!timestamp) {
      return "N/A";
    }

    const customDate = new Date(parseInt(timestamp));
    if (!isNaN(customDate)) {
      const now = new Date();
      const diff = now - customDate;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30); // Approximation, not precise
      const years = Math.floor(months / 12);
      const timeZone = "UTC";

      if (years >= 1) {
        const remainingMonths = months % 12;
        const remainingWeeks = Math.floor((days % 30) / 7);
        const remainingDays = days % 7;
        return `${years} years ${remainingMonths} months`;
      } else if (months >= 1) {
        const remainingWeeks = Math.floor((days % 30) / 7);
        const remainingDays = days % 7;
        return `${months} months ${remainingWeeks} weeks`;
      } else if (weeks >= 1) {
        const remainingDays = days % 7;
        return `${weeks} weeks ${remainingDays} days ago`;
      } else if (days >= 1) {
        const remainingHours = hours % 24;
        return `${days} days ${remainingHours} hours ago`;
      } else if (hours >= 1) {
        const remainingMinutes = minutes % 60;
        return `${hours} hours ${remainingMinutes} minutes ago`;
      } else if (minutes >= 1) {
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes ${remainingSeconds} seconds ago`;
      } else {
        return `${seconds} seconds ago`;
      }
    } else {
      return "Invalid Date";
    }
  }

  function customFormatTDate(timestamp) {
    if (!timestamp) {
      return "N/A";
    }

    const customDateObject = new Date(parseInt(timestamp));
    if (!isNaN(customDateObject)) {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "UTC",
      };

      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        customDateObject
      );
      return `${formattedDate} (UTC)`;
    } else {
      return "Invalid Date";
    }
  }

  function customFormatDateTimetamp(timestamp) {
    const customDate = new Date(parseInt(timestamp));

    if (isNaN(customDate)) {
      return "Invalid Date";
    }

    const now = new Date();
    const diff = customDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.4); // Approximately 4.4 weeks in a month
    const remainingWeeks = Math.floor(weeks % 4.8);

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC", // Specify the timeZone as 'UTC'
    };
    const dateObject = customDate;

    return `${new Intl.DateTimeFormat("en-US", options).format(
      dateObject
    )} (UTC) in ${months} months ${remainingWeeks} weeks`;
  }

  const timestamp = Date.now() + 365 * 24 * 60 * 60 * 1000;

  const formattedDate = customFormatDateTimetamp(timestamp);

  console.log(formattedDate);

  const generateRandomSecret = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "";
    for (let i = 0; i < 64; i++) {
      key += characters[Math.floor(Math.random() * characters.length)];
    }
    return key;
  };

  const generateRandomKey = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let secret = "";
    for (let i = 0; i < 48; i++) {
      secret += characters[Math.floor(Math.random() * characters.length)];
    }
    return secret;
  };

  const togglePopup = async () => {
    setShowPopup(!showPopup);
    setShowConfirmButton(false); // Hide the button when toggling the popup
    setTimeout(() => {
      setShowConfirmButton(true); // Show the button after 1 second
    }, 1000);
  };

  const handleConfirmClick = async () => {
    try {
      const oneYearInMilliseconds = 365 * 24 * 60 * 60;
      const randomKey = generateRandomKey();
      const randomSecret = generateRandomSecret();

      const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys`;
      const bearerToken = process.env.BEARER_TOKEN;

      const response = await axios.post(
        apiUrl,
        {
          consumerKey: randomKey,
          consumerSecret: randomSecret,
          expiresInSeconds: oneYearInMilliseconds,
        },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(fetchAppDetails(teamName, appName));
      //alert("API key created successfully");
    } catch (error) {
      alert("Error creating API key: " + error.message);
    }
  };

  useEffect(() => {
    const credentialsWithNoApiProducts = appDetailsData?.credentials?.filter(
      (credential) =>
        !credential.apiProducts ? true : credential.apiProducts.length === 0
    );

    credentialsWithNoApiProducts?.sort(
      (cred1, cred2) => parseInt(cred2.createdAt) - parseInt(cred1.createdAt)
    );

    const latestCredential = credentialsWithNoApiProducts?.[0];
    const latestConsumerKey = latestCredential?.consumerKey || null;

    console.log("Latest Consumer Key without apiProducts:", latestConsumerKey);
  }, [appDetailsData]);

  const credentialsWithNoApiProducts = appDetailsData?.credentials?.filter(
    (credential) =>
      !credential.apiProducts ? true : credential.apiProducts.length === 0
  );

  credentialsWithNoApiProducts?.sort(
    (cred1, cred2) => parseInt(cred2.createdAt) - parseInt(cred1.createdAt)
  );

  const latestCredential = credentialsWithNoApiProducts?.[0];
  const latestConsumerKey = latestCredential?.consumerKey || null;

  console.log("Latest Consumer Key without apiProducts:", latestConsumerKey);

  let apiProducts = [];

  for (let i = 0; i < (appDetailsData?.credentials?.length ?? 0); i++) {
    const credential = appDetailsData.credentials[i];
    apiProducts = credential?.apiProducts
      ? credential.apiProducts.map((product) => product.apiproduct)
      : [];

    if (apiProducts.length > 0) {
      break;
    }
  }

  console.log(
    "API Products from First Credential with apiProducts:",
    apiProducts
  );

  const handleAddAPIProduct = async () => {
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys/${latestConsumerKey}`;
    const bearerToken = process.env.BEARER_TOKEN;

    const requestBody = {
      apiProducts: apiProducts,
    };

    try {
      await axios.post(apiUrl, requestBody, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      dispatch(fetchAppDetails(teamName, appName));
      alert("API key and product added successfully");
      setShowPopup(false);
    } catch (error) {
      alert("Error adding API product: " + error);
    }
  };

  const toggleVisibility = (key) => {
    setShowSecrets((prevShowSecrets) => ({
      ...prevShowSecrets,
      [key]: !prevShowSecrets[key],
    }));

    setShowKey((prevShowKey) => ({
      ...prevShowKey,
      [key]: !prevShowKey[key],
    }));
  };

  const toggleVisibility2 = (key) => {
    setshowconsumerkey((prevShowConsumer) => ({
      ...prevShowConsumer,
      [key]: !prevShowConsumer[key],
    }));
    setShowKey1((prevShowkey) => ({
      ...prevShowkey,
      [key]: !prevShowkey[key],
    }));
  };

  const hideKey = (key) => {
    return "•".repeat(15);
  };

  const handleRemovekey = async (teamName, appName, consumerKey) => {
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}`;
    const bearerToken = process.env.BEARER_TOKEN;

    try {
      await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      dispatch(fetchAppDetails(teamName, appName));
      alert("Key removed successfully");
    } catch (error) {
      alert("Error removing key: " + error);
    }
  };

  const handleRevokeKey = async (teamName, appName, consumerKey) => {
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}?action=revoke`;
    const bearerToken = process.env.BEARER_TOKEN;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      if (response.status === 204) {
        // Key revoked successfully
        dispatch(fetchAppDetails(teamName, appName));
        alert("Key revoked successfully");
      } else {
        alert("Key revocation was not successful");
      }
    } catch (error) {
      alert("Error revoking key: " + error.message);
    }
  };

  if (!appDetailsData || (appDetailsData && isFetching)) {
    return (
      <Layout>
        <div>
          <AppsButton />
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div className="container">
                    <h1 className="js-quickedit-page-title page__title mb-0">
                      Loading appgroups appdetails...
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ marginTop: "110px" }}>
        <AppsButton />

        <div className="dialog-off-canvas-main-canvas">
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div
                    data-contextual-id="block:block=pagetitle:langcode=en"
                    data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
                  />
                  <div className="container">
                    <h3 className="js-quickedit-page-title page__title mb-0">
                      {appDetailsData.name} team app
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
                      <div className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full">
                        <div
                          className="tab-pane show active"
                          // style={{ border: "1px solid red" }}
                        >
                          <div className="card apigee-entity--app__details">
                            <h4 className="card-header bg-white">Details</h4>
                            <div className="card-body">
                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
                                    <div
                                      className="field__label  my-1"
                                      style={{ width: "100%" }}
                                    >
                                      Team App status
                                    </div>
                                  </div>
                                  <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
                                    <div className="field__item  my-1">
                                      <span className="badge badge-success">
                                        {appDetailsData.status}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
                                    <div
                                      className="field__label  my-1 "
                                      style={{ width: "100%" }}
                                    >
                                      Created
                                    </div>
                                  </div>
                                  <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
                                    <div className="field__item  my-1">
                                      {appDetailsData.createdAt
                                        ? customFormatTimestamp(
                                            appDetailsData.createdAt
                                          )
                                        : "N/A"}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
                                    <div
                                      className="field__label  my-1 "
                                      style={{ width: "100%" }}
                                    >
                                      Last updated
                                    </div>
                                  </div>
                                  <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
                                    <div className="field__item  my-1">
                                      {appDetailsData.lastModifiedAt
                                        ? customFormatTimestamp(
                                            appDetailsData.lastModifiedAt
                                          )
                                        : "N/A"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card apigee-entity--app__credentials">
                            <div className="container">
                              <div className="row">
                                <div className="col-6">
                                  <h4 className="card-header bg-white">
                                    Credentials
                                  </h4>
                                </div>
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                  <button
                                    className="all-buttons-color text-white use-ajax button btn  btn-md"
                                    onClick={() => {
                                      togglePopup();
                                      handleConfirmClick();
                                    }}
                                  >
                                    Add key
                                  </button>
                                </div>
                              </div>
                            </div>





                            {showPopup && (
                              <div className="popup-overlay">
                                <div className="popup">
                                  <span className="close" onClick={togglePopup}>
                                    &times;
                                  </span>
                                  <div className="popup-content">
                                    <h2>Add Key</h2>
                                    <p>
                                      Do you really want to create a new API key
                                      for this team app?
                                    </p>
                                    <label>
                                      Set an expiry date:
                                      <select>
                                        <option>1 Year</option>
                                        {/* Add other options here */}
                                      </select>
                                    </label>
                                    <div className="popup-buttons">
                                      <button
                                        className="popup-button cancel-button"
                                        onClick={togglePopup}
                                      >
                                        Cancel
                                      </button>
                                      {showConfirmButton && (
                                        <button
                                          className="all-buttons-color text-white  btn btn-md "
                                          onClick={handleAddAPIProduct}
                                        >
                                          Confirm
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            
                            
                            
                            <div
                              className="card-body  pb-0"
                              //style={{ border: "7px solid green" }}
                            >
                              {appDetailsData.credentials?.length > 0 ? (
                                appDetailsData.credentials.map(
                                  (credential, index) => {
                                    if (credential.status === "approved") {
                                      const credentialKey =
                                        credential.consumerKey;
                                      return (
                                        <fieldset
                                          className="items--inline app-credential d-flex flex-wrap  border-bottom m-1 "
                                          key={index}
                                          style={{ border: "4px solid green" }}
                                        >
                                          <div
                                            className="fieldset-wrapper d-flex "
                                            style={{
                                              border: "4px solid yellow",
                                            }}
                                          >
                                            <div
                                              className="w-200 "
                                              style={{
                                                border: "2px solid blue",
                                                //width: "40%",
                                                fontSize: "15px",
                                              }}
                                            >
                                              <div className="item-property d-flex m-1 ">
                                                <div style={{ width: "145px" }}>
                                                  <label className="flex-shrink-0">
                                                    Consumer Key
                                                  </label>
                                                </div>
                                                <div className="secret field__item d-flex flex-grow-1">
                                                  {showconsumerkey[
                                                    credential.consumerKey
                                                  ] ? (
                                                    <div className="secret__value">
                                                      {credential.consumerKey}
                                                    </div>
                                                  ) : (
                                                    <div className="secret__value__hidden">
                                                      {hideKey(
                                                        credential.consumerKey
                                                      )}
                                                    </div>
                                                  )}
                                                  <br />
                                                  <button
                                                    className="secret__toggle"
                                                    onClick={() =>
                                                      toggleVisibility2(
                                                        credential.consumerKey
                                                      )
                                                    }
                                                  >
                                                    {showKey1 ? (
                                                      <Link className="secret__toggle__hide d-flex ">
                                                        <VisibilityOffOutlinedIcon
                                                          style={{
                                                            color: "#002a5c",
                                                            fontSize: "inherit",
                                                          }}
                                                        />
                                                      </Link>
                                                    ) : (
                                                      <Link className="secret__toggle__show">
                                                        <RemoveRedEyeOutlinedIcon
                                                          style={{
                                                            color: "#002a5c",
                                                            fontSize: "inherit",
                                                          }}
                                                        />
                                                      </Link>
                                                    )}
                                                  </button>
                                                  <div className="secret__copy d-flex align-items-center">
                                                    <button
                                                      className="secret__copy"
                                                      onClick={() =>
                                                        copyToClipboard(
                                                          credential.consumerKey
                                                        )
                                                      }
                                                      title="Click to copy"
                                                    >
                                                      <ContentCopyOutlinedIcon
                                                        style={{
                                                          color: "#002a5c",
                                                          fontSize: "inherit",
                                                        }}
                                                      />
                                                    </button>
                                                    <span className="copy-message">
                                                      {copyMessage}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="item-property d-flex r m-1">
                                                <div style={{ width: "145px" }}>
                                                  <label>Consumer Secret</label>
                                                </div>
                                                <div className="secret field__item d-flex">
                                                  {showSecrets[
                                                    credential.consumerSecret
                                                  ] ? (
                                                    <div className="secret__value ">
                                                      {
                                                        credential.consumerSecret
                                                      }
                                                    </div>
                                                  ) : (
                                                    <div className="secret__value__hidden">
                                                      {hideKey(
                                                        credential.consumerSecret
                                                      )}
                                                    </div>
                                                  )}
                                                  <br />
                                                  <button
                                                    className="secret__toggle"
                                                    onClick={() =>
                                                      toggleVisibility(
                                                        credential.consumerSecret
                                                      )
                                                    }
                                                  >
                                                    {showKey ? (
                                                      <Link className="secret__toggle__hide">
                                                        <VisibilityOffOutlinedIcon
                                                          style={{
                                                            color: "#002a5c",
                                                            fontSize: "inherit",
                                                          }}
                                                        />
                                                      </Link>
                                                    ) : (
                                                      <Link className="secret__toggle__show">
                                                        <RemoveRedEyeOutlinedIcon
                                                          style={{
                                                            color: "#002a5c",
                                                            fontSize: "inherit",
                                                          }}
                                                        />
                                                      </Link>
                                                    )}
                                                  </button>
                                                  <div className="secret__copy">
                                                    <button
                                                      className="secret__copy"
                                                      onClick={() =>
                                                        copyToClipboard(
                                                          credential.consumerSecret
                                                        )
                                                      }
                                                      title="Click to copy"
                                                    >
                                                      <ContentCopyOutlinedIcon
                                                        style={{
                                                          color: "#002a5c",
                                                          background: "none",
                                                          fontSize: "inherit",
                                                        }}
                                                      />
                                                    </button>

                                                    <span className="copy-message">
                                                      {copyMessage}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="item-property  d-flex m-1">
                                                <div style={{ width: "145px" }}>
                                                  <label> Issued </label>
                                                </div>

                                                {credential.issuedAt
                                                  ? customFormatTDate(
                                                      credential.issuedAt
                                                    )
                                                  : "N/A"}
                                              </div>

                                              <div className="item-property  d-flex m-1">
                                                <div style={{ width: "145px" }}>
                                                  <label> Expires </label>
                                                </div>
                                                {credential.expiresAt
                                                  ? customFormatDateTimetamp(
                                                      credential.expiresAt
                                                    )
                                                  : "N/A"}
                                              </div>

                                              <div className=" d-flex m-1 ">
                                                <div style={{ width: "120px" }}>
                                                  <label> Key Status </label>
                                                </div>
                                                <div>
                                                  <span
                                                    className="badge badge-success"
                                                    style={{
                                                      marginLeft: "10px",
                                                    }}
                                                  >
                                                    {credential.status}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>

                                            
                                            
                                            <div
                                              className="item-property"
                                              // style={{ marginLeft: "45px" }}
                                              style={
                                                {
                                                  // border: "5px solid pink",
                                                  //display: "flex",
                                                  //flexDirection: "column",
                                                  //width: "60%",
                                                }
                                              }
                                            >
                                              <div
                                                className="dropbutton-widget"
                                                style={{
                                                  marginLeft: "495px",
                                                  //border: "2px solid green",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    //alignItems: "center",
                                                    //border:"2px solid red"
                                                  }}
                                                >
                                                  <button
                                                    className="custom-button all-buttons-color text-white border btn btn-sm m-0 border-0"
                                                    onClick={() =>
                                                      handleRevokeKey(
                                                        teamName,
                                                        appDetailsData.name,
                                                        credential.consumerKey
                                                      )
                                                    }
                                                  >
                                                    Revoke
                                                  </button>

                                                  <div
                                                    style={{
                                                      position: "relative",
                                                    }}
                                                  >
                                                    <button
                                                      // className="dropdown-toggle"

                                                      onClick={() =>
                                                        toggleDropdown(
                                                          credentialKey
                                                        )
                                                      }
                                                      className="all-buttons-color text-white  border border-0 m-0"
                                                      style={{
                                                        width: "25px",
                                                        height: "35px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                          "center",
                                                        backgroundColor:
                                                          "F46223",
                                                      }}
                                                    >
                                                      {/* &#9660; */}
                                                      {/* {DropDownDark} */}
                                                      <img
                                                        src={getImageSource()}
                                                        alt={
                                                          showDropdown
                                                            ? "Open Dropdown"
                                                            : "Closed Dropdown"
                                                        }
                                                        style={{
                                                          Width: "100%",
                                                          Height: "100%",
                                                        }}
                                                      />
                                                    </button>
                                                  </div>
                                                </div>

                                                {showDropdown[
                                                  credentialKey
                                                ] && (
                                                  <div
                                                    className="dropdown-content"
                                                    style={{
                                                      position: "absolute",

                                                      width: "114px",
                                                      textAlign: "left",
                                                      //border: "1px solid blue",
                                                      overflow: "auto",
                                                      zIndex: 1, // Ensure the dropdown appears above other content
                                                    }}
                                                  >
                                                    <button
                                                      className="custom-button all-buttons-color text-white btn btn-sm m-0"
                                                      // style={{
                                                      //   width: "114px",
                                                      //   textAlign: "left",
                                                      // }}
                                                      onClick={() => {
                                                        const removePath = `/${teamName}/apps/${appName}/remove?team=${teamName}&appName=${appName}&consumerKey=${credential.consumerKey}`;
                                                        setShowDropdown(false);
                                                        navigate(removePath);
                                                      }}
                                                    >
                                                      Delete
                                                    </button>
                                                  </div>
                                                )}
                                              </div>
                                              <div
                                                className="wrapper--secondary"
                                                style={
                                                  {
                                                    //marginRight: "200px",
                                                    //border: "1px solid red",
                                                    //width: "600px",
                                                  }
                                                }
                                              >
                                                <label
                                                  style={{ marginLeft: "70px" }}
                                                >
                                                  Products
                                                </label>
                                                {credential &&
                                                credential.apiProducts &&
                                                credential.apiProducts.length >
                                                  0 ? (
                                                  <div>
                                                    {credential.apiProducts.map(
                                                      (
                                                        product,
                                                        productIndex
                                                      ) => (
                                                        <div
                                                          className="api-product-list-row clearfix"
                                                          key={productIndex}
                                                        >
                                                          <div className="api-product-list-row clearfix">
                                                            <span
                                                              className="api-product-name"
                                                              style={{
                                                                marginLeft:
                                                                  "70px",
                                                              }}
                                                            >
                                                              {
                                                                product.apiproduct
                                                              }
                                                            </span>

                                                            <span
                                                              className="badge badge-success"
                                                              style={{
                                                                //  border:"1px solid red",
                                                                backgroundColor:
                                                                  "#C5C5C5",
                                                                marginLeft:
                                                                  "340px",
                                                              }}
                                                            >
                                                              {product.status
                                                                ? "Enabled"
                                                                : "Disabled"}
                                                            </span>
                                                          </div>
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                ) : (
                                                  <p
                                                    style={{
                                                      marginLeft: "32px",
                                                    }}
                                                  >
                                                    No API products found for
                                                    this credential.
                                                  </p>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </fieldset>
                                      );
                                    }
                                  }
                                )
                              ) : (
                                <p style={{ marginLeft: "32px" }}>
                                  No credentials found for this app.
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="card apigee-entity--app__credentials">
                            <details className="js-form-wrapper form-wrapper card bg-lighter mb-3">
                              <summary
                                role="button"
                                aria-expanded="false"
                                aria-pressed="false"
                                className="card-header bg-lighter"
                              >
                                Revoked keys (
                                {
                                  appDetailsData.credentials.filter(
                                    (credential) =>
                                      credential.status === "revoked"
                                  ).length
                                }
                                )
                              </summary>

                              <div
                                className="card-body pb-0"
                                // style={{ border: "7px solid green" }}
                              >
                                {/* Iterate over revoked credentials */}
                                {appDetailsData.credentials?.length > 0 ? (
                                  appDetailsData.credentials.map(
                                    (credential, index) => {
                                      if (credential.status === "revoked") {
                                        return (
                                          <fieldset
                                            className="items--inline app-credentiald-flex flex-wrap  border-bottom m-1 "
                                            key={index}
                                            style={{ border: "5px solid red" }}
                                          >
                                            <legend>Credential</legend>

                                            <div className="fieldset-wrapper d-flex ">
                                              <div
                                                className="w-200"
                                                style={{
                                                  //width: "40%",
                                                  fontSize: "15px",
                                                  border: "8px solid yellow",
                                                }}
                                              >
                                                
                                                
                                                <div className="item-property d-flex m-1 ">
                                                <div style={{ width: "145px" }}>
                                                  <label className="flex-shrink-0">
                                                    Consumer Key
                                                  </label>
                                                </div>
                                                <div className="secret field__item d-flex flex-grow-1">
                                                  {showconsumerkey[
                                                    credential.consumerKey
                                                  ] ? (
                                                    <div className="secret__value">
                                                      {credential.consumerKey}
                                                    </div>
                                                  ) : (
                                                    <div className="secret__value__hidden">
                                                      {hideKey(
                                                        credential.consumerKey
                                                      )}
                                                    </div>
                                                  )}
                                                  <br />
                                                  <button
                                                    className="secret__toggle"
                                                    onClick={() =>
                                                      toggleVisibility2(
                                                        credential.consumerKey
                                                      )
                                                    }
                                                  >
                                                    {showKey1 ? (
                                                      <Link className="secret__toggle__hide d-flex ">
                                                        <VisibilityOffOutlinedIcon
                                                          style={{
                                                            color: "#002a5c",
                                                            fontSize: "inherit",
                                                          }}
                                                        />
                                                      </Link>
                                                    ) : (
                                                      <Link className="secret__toggle__show">
                                                        <RemoveRedEyeOutlinedIcon
                                                          style={{
                                                            color: "#002a5c",
                                                            fontSize: "inherit",
                                                          }}
                                                        />
                                                      </Link>
                                                    )}
                                                  </button>
                                                  <div className="secret__copy d-flex align-items-center">
                                                    <button
                                                      className="secret__copy"
                                                      onClick={() =>
                                                        copyToClipboard(
                                                          credential.consumerKey
                                                        )
                                                      }
                                                      title="Click to copy"
                                                    >
                                                      <ContentCopyOutlinedIcon
                                                        style={{
                                                          color: "#002a5c",
                                                          fontSize: "inherit",
                                                        }}
                                                      />
                                                    </button>
                                                    <span className="copy-message">
                                                      {copyMessage}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="item-property d-flex r m-1">
                                                <div style={{ width: "145px" }}>
                                                  <label>Consumer Secret</label>
                                                </div>
                                                <div className="secret field__item d-flex">
                                                  {showSecrets[
                                                    credential.consumerSecret
                                                  ] ? (
                                                    <div className="secret__value ">
                                                      {
                                                        credential.consumerSecret
                                                      }
                                                    </div>
                                                  ) : (
                                                    <div className="secret__value__hidden">
                                                      {hideKey(
                                                        credential.consumerSecret
                                                      )}
                                                    </div>
                                                  )}
                                                  <br />
                                                  <button
                                                    className="secret__toggle"
                                                    onClick={() =>
                                                      toggleVisibility(
                                                        credential.consumerSecret
                                                      )
                                                    }
                                                  >
                                                    {showKey ? (
                                                      <Link className="secret__toggle__hide">
                                                        <VisibilityOffOutlinedIcon
                                                          style={{
                                                            color: "#002a5c",
                                                            fontSize: "inherit",
                                                          }}
                                                        />
                                                      </Link>
                                                    ) : (
                                                      <Link className="secret__toggle__show">
                                                        <RemoveRedEyeOutlinedIcon
                                                          style={{
                                                            color: "#002a5c",
                                                            fontSize: "inherit",
                                                          }}
                                                        />
                                                      </Link>
                                                    )}
                                                  </button>
                                                  <div className="secret__copy">
                                                    <button
                                                      className="secret__copy"
                                                      onClick={() =>
                                                        copyToClipboard(
                                                          credential.consumerSecret
                                                        )
                                                      }
                                                      title="Click to copy"
                                                    >
                                                      <ContentCopyOutlinedIcon
                                                        style={{
                                                          color: "#002a5c",
                                                          background: "none",
                                                          fontSize: "inherit",
                                                        }}
                                                      />
                                                    </button>

                                                    <span className="copy-message">
                                                      {copyMessage}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

         
                                              <div className="item-property  d-flex m-1">
                                                <div style={{ width: "145px" }}>
                                                  <label> Issued </label>
                                                </div>

                                                {credential.issuedAt
                                                  ? customFormatTDate(
                                                      credential.issuedAt
                                                    )
                                                  : "N/A"}
                                              </div>
                                                
                                              <div className="item-property  d-flex m-1">
                                                <div style={{ width: "145px" }}>
                                                  <label> Expires </label>
                                                </div>
                                                {credential.expiresAt
                                                  ? customFormatDateTimetamp(
                                                      credential.expiresAt
                                                    )
                                                  : "N/A"}
                                              </div>
                                               
                                               
                                              <div className=" d-flex m-1 ">
                                                <div style={{ width: "120px" }}>
                                                  <label> Key Status </label>
                                                </div>
                                                <div>
                                                  <span
                                                    className="badge badge-success"
                                                    style={{
                                                      marginLeft: "10px",
                                                    }}
                                                  >
                                                    {credential.status}
                                                  </span>
                                                </div>
                                              </div>
                                              </div>
                                              {/* API Products */}

                                            
                                            
                                             
                                             
                                              <div
                                                className="item-property"
                                                // style={{
                                                //   border: "1px solid blue",
                                                // }}
                                                style={{
                                                  // border: "1px solid blue",
                                                  //display: "flex",
                                                  //flexDirection: "column",
                                                  // border: "1px solid blue",
                                                  //marginRight: "70px",
                                                  //width: "60%",
                                                }}
                                              >
                                                <div
                                                  className="dropbutton-wrapper"
                                                  // style={{
                                                  //   border: "8px solid blue",
                                                  // }}
                                                >
                                                  <div className="dropbutton-widget">
                                                    <div className="dropbutton">
                                                      <div>
                                                        <button
                                                          className="all-buttons-color text-white button btn btn-sm"
                                                          style={{
                                                            
                                                            

                                                            marginLeft: "450px",
                                                          }}
                                                          onClick={() =>
                                                            handleRemovekey(
                                                              teamName,
                                                              appDetailsData.name,
                                                              credential.consumerKey
                                                            )
                                                          }
                                                        >
                                                          Delete
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="wrapper--secondary"
                                                  style={
                                                    {
                                                      ///  border: "1px solid red",
                                                      //marginLeft: "45px",
                                                    }
                                                  }
                                                >
                                                  <label
                                                    style={{
                                                      marginLeft: "32px",
                                                    }}
                                                  >
                                                    Products
                                                  </label>
                                                  {credential &&
                                                  credential.apiProducts &&
                                                  credential.apiProducts
                                                    .length > 0 ? (
                                                    <div>
                                                      {credential.apiProducts.map(
                                                        (
                                                          product,
                                                          productIndex
                                                        ) => (
                                                          <div
                                                            className="api-product-list-row clearfix"
                                                            key={productIndex}
                                                          >
                                                            <div className="api-product-list-row clearfix">
                                                              <span className="api-product-name"  style={{
                                                                marginLeft:
                                                                  "30px",
                                                              }}
                                                              >
                                                                {
                                                                  product.apiproduct
                                                                }
                                                              </span>
                                                              <span
                                                                className="badge badge-success"
                                                                style={{
                                                                  backgroundColor:
                                                                    "#C5C5C5",
                                                                  marginLeft:
                                                                    "320px",
                                                                }}
                                                              >
                                                                {product.status
                                                                  ? "Enabled"
                                                                  : "Disabled"}
                                                              </span>
                                                            </div>
                                                          </div>
                                                        )
                                                      )}
                                                    </div>
                                                  ) : (
                                                    <p
                                                      style={{
                                                        marginLeft: "32px",
                                                      }}
                                                    >
                                                      No API products found for
                                                      this credential.
                                                    </p>
                                                  )}
                                                </div>
                                              </div>




                                            
                                         
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            </div>
                                          </fieldset>
                                        );
                                      }
                                    }
                                  )
                                ) : (
                                  <p style={{ marginLeft: "32px" }}>
                                    No credentials found for this app.
                                  </p>
                                )}
                              </div>
                            </details>
                          </div>

                          <div className="card apigee-entity--app__details">
                            <h4 className="card-header bg-white">
                              Custom Attributes
                            </h4>

                            <div className="card-body">
                              <fieldset className="app-custom-attribute">
                                <div className="fieldset-wrapper" />
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ViewApp;
