// import React from "react";
// import { useSelector } from "react-redux";
// import Layout from "../components/Layout";
// import Header from "../components/Header/Header";

// const UserEvent = () => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("events", events);

//   return (
//     <div>
//       <Header />
//       <div style={{ marginTop: "130px" }}>
//         <h3>User Events</h3>
//         {events.map((event, index) => (
//           <div key={index}>
//             <p>Error: {event.error}</p>
//             <p>Username: {event.username}</p>
//             <p>Password: {event.password}</p>
//             <p>Method: {event.method}</p>
//             <p>API: {event.api}</p>
//             <p>
//               Timestamp:{" "}
//               {event.timestamp instanceof Date
//                 ? event.timestamp.toISOString()
//                 : "Invalid Timestamp"}
//             </p>
//             <p>Page: {event.page}</p>
//             <p>Button: {event.button}</p>
//             <p>
//               username     timestamp Date minutes      Location On the page     actions
//               Activity Log
//             </p>
//             <p>Response Data:</p>
//             <pre>{JSON.stringify(event.responseData, null, 2)}</pre>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserEvent;

// import React from "react";
// import { useSelector } from "react-redux";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
// import Header from "../components/Header/Header";

// const ChartPage = () => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("events", events);
//   const data = [
//     { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
//     { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
//     { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
//     { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
//     { name: "May", uv: 1890, pv: 4800, amt: 2181 },
//     { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
//     { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
//   ];

//   return (
//     <div>
//     <Header />
//       <h1 style={{ marginTop: "130px" }}>Line Chart Example</h1>
//       <LineChart width={600} height={300} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="pv"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       </LineChart>
//       <div>

//         <div >
//           <h3>Activity Log</h3>
//           {events.map((event, index) => (
//             <div key={index}>
//               <p>Error: {event.error}</p>
//               <p>Username: {event.username}</p>
//               <p>Password: {event.password}</p>
//               <p>Method: {event.method}</p>
//               <p>API: {event.api}</p>
//               <p>Timestamp: {new Date(event.timestamp).toISOString()}</p>

//               <p>Page: {event.page}</p>
//               <p>Button: {event.button}</p>
//               <p>Response Data:</p>
//               <pre>{JSON.stringify(event.responseData, null, 2)}</pre>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartPage;

// import React, { useState } from "react";
// import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
// import Header from "../components/Header/Header";
// import { useSelector } from "react-redux";
// import { trackEvent, trackErrorEvent } from "../redux/store";

// const DataTable = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("events", events);

//   const filteredEvents = events.filter((event) => {
//     return event.username?.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);

//     const year = date.getFullYear();
//     const month = date.toLocaleString("default", { month: "long" });
//     const day = String(date.getDate()).padStart(2, "0");
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");

//     return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//   };

//   return (
//     <div style={{ marginTop: "130px" }} className="container table-responsive ">
//       <Header />

//       <div className="input-group mb-4 d-flex ">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by user email"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <MDBContainer >
//         <MDBTable responsive bordered className="text-center">
//           <MDBTableHead>
//             <tr className="border-top table-head-color text-white">
//               <th >Username</th>
//               <th>Timestamp</th>
//               <th>Location</th>
//               <th>Activity</th>
//             </tr>
//           </MDBTableHead>
//           <MDBTableBody  className="table-hover" >
//             {events.map((item, index) => (
//               <tr >
//                 <td>{item.username}</td>
//                 <td>{formatTimestamp(item.timestamp)}</td>
//                 <td>{item.page}</td>

//                 <td>
//                   {item.appgroupName && (
//                     <p>Appgroup Name: {item.appgroupName}</p>
//                   )}
//                   {item.description && <p>Description: {item.description}</p>}
//                   {item.button && <p>Button Name: {item.button}</p>}
//                   {item.adminName && <p>adminName Name: {item.adminName}</p>}
//                   {item.appGroupName && (
//                     <p>appGroupName Name: {item.appGroupName}</p>
//                   )}
//                   {item.admins &&
//                     item.admins
//                       .split(",")
//                       .map((admin, idx) => (
//                         <p key={idx}>Admins Name: {admin.trim()}</p>
//                       ))}
//                 </td>

//               </tr>
//             ))}
//           </MDBTableBody>
//         </MDBTable>
//       </MDBContainer>
//     </div>
//   );
// };

// export default DataTable;

// import React, { useEffect } from "react";
// import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
// import Header from "../components/Header/Header";
// import { useSelector } from "react-redux";
// const fs = require('fs');

// const DataTable = () => {
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("events", events);

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);

//     const year = date.getFullYear();
//     const month = date.toLocaleString("default", { month: "long" });
//     const day = String(date.getDate()).padStart(2, "0");
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     const seconds = String(date.getSeconds()).padStart(2, "0");

//     return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//   };

//   useEffect(() => {
//     const data = events.map((item) => {
//       return {
//         username: item.username,
//         timestamp: formatTimestamp(item.timestamp),
//         location: item.page,
//         activity: item.button,
//       };
//     });

//     const textData = JSON.stringify(data, null, 2);

//     // Create a Blob with the data
//     const blob = new Blob([textData], { type: "text/plain" });

//     // Create a link to download the file
//     const link = document.createElement("a");
//     link.href = window.URL.createObjectURL(blob);
//     link.download = "events.txt";
//     link.click();
//   }, [events]);

//   return (
//     <div style={{ marginTop: "130px" }}>
//       <Header />
//       <MDBContainer>
//         <MDBTable responsive>
//           <MDBTableHead>
//             <tr>
//               <th>Username</th>
//               <th>Timestamp</th>
//               <th>Location</th>
//               <th>Activity</th>
//             </tr>
//           </MDBTableHead>
//           <MDBTableBody>
//             {events.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.username}</td>
//                 <td>{formatTimestamp(item.timestamp)}</td>
//                 <td>{item.page}</td>
//                 <td>{item.button}</td>
//               </tr>
//             ))}
//           </MDBTableBody>
//         </MDBTable>
//       </MDBContainer>
//     </div>
//   );
// };

// export default DataTable;

// import React, { useState } from "react";
// import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
// import Header from "../components/Header/Header";
// import { useSelector } from "react-redux";
// import { trackEvent, trackErrorEvent } from "../redux/store";

// const DataTable = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("events", events);

//   const filteredEvents = events.filter((event) => {
//     return event.username?.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   // const formatTimestamp = (timestamp) => {
//   //   const date = new Date(timestamp);

//   //   const year = date.getFullYear();
//   //   const month = date.toLocaleString("default", { month: "long" });
//   //   const day = String(date.getDate()).padStart(2, "0");
//   //   const hours = String(date.getHours()).padStart(2, "0");
//   //   const minutes = String(date.getMinutes()).padStart(2, "0");
//   //   const seconds = String(date.getSeconds()).padStart(2, "0");

//   //   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//   // };

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);

//     const year = date.getUTCFullYear();
//     const month = date.toLocaleString("default", { month: "short" });
//     const day = String(date.getUTCDate()).padStart(2, "0");
//     const hours = String(date.getUTCHours()).padStart(2, "0");
//     const minutes = String(date.getUTCMinutes()).padStart(2, "0");

//     return `${year}-${month}-${day} ${hours}:${minutes} UTC`;
// };

//   return (
//     <div style={{ marginTop: "130px" }} className="">
//       <Header />

//       <div className="input-group mb-4 d-flex container table-responsive ">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by user email"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <MDBContainer style={{ width: "100%" }}>
//         <MDBTable responsive bordered className="text-center">
//           <MDBTableHead>
//             <tr className="border-top table-head-color text-white">
//               <th style={{ width: "20%" }}>Username</th>
//               <th style={{ width: "20%" }}>Timestamp</th>
//               <th style={{ width: "20%" }}>Location</th>
//               <th style={{ width: "40%" }}>Activity</th>
//             </tr>
//           </MDBTableHead>
//           <MDBTableBody className="table-hover">
//             {events.map((item, index) => (
//               <tr>
//                 <td>{item.username}</td>
//                 <td>{formatTimestamp(item.timestamp)}</td>
//                 <td>{item.page}</td>

//                 <td>
//                   {item.appgroupName && (
//                     <p>Appgroup Name: {item.appgroupName}</p>
//                   )}
//                   {item.description && <p>Description: {item.description}</p>}
//                   {item.button && <p>Button Name: {item.button}</p>}
//                   {item.adminName && <p>adminName Name: {item.adminName}</p>}
//                   {item.appGroupName && (
//                     <p>appGroupName Name: {item.appGroupName}</p>
//                   )}
//                   {item.appName && <p>appName Name: {item.appName}</p>}
//                   {item.admins &&
//                     item.admins
//                       .split(",")
//                       .map((admin, idx) => (
//                         <p key={idx}>Admins Name: {admin.trim()}</p>
//                       ))}

//                   {item.fetchedConsumerKey && (
//                     <p>fetchedConsumerKey Key: {item.fetchedConsumerKey}</p>
//                   )}
//                   {item.consumerKey && <p>Consumer Key: {item.consumerKey}</p>}
//                   {item.consumerSecret && (
//                     <p>consumerSecret Key: {item.consumerSecret}</p>
//                   )}
//                   {item.apiProducts && (
//                     <div>
//                       <p>API Products:</p>
//                       <ul>
//                         {item.apiProducts.map((product, index) => (
//                           <li key={index}>{product}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </MDBTableBody>
//         </MDBTable>
//       </MDBContainer>
//     </div>
//   );
// };

// export default DataTable;

// import React, { useState } from "react";
// import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
// import Header from "../components/Header/Header";
// import { useSelector } from "react-redux";

// const DataTable = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const events = useSelector((state) => state.eventLoginReducer.events);
//   console.log("events", events);

//   const handleStartDateChange = (e) => {
//     const date = e.target.value;
//     setStartDate(date);
//   };

//   const handleEndDateChange = (e) => {
//     const date = e.target.value;
//     setEndDate(date);
//   };

//   const filteredEvents = events.filter((event) => {
//     const eventDate = new Date(event.timestamp);
//     return (
//       event.username?.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       (!startDate || eventDate >= new Date(startDate)) &&
//       (!endDate || eventDate <= new Date(endDate))
//     );
//   });

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);

//     const year = date.getUTCFullYear();
//     const month = date.toLocaleString("default", { month: "short" });
//     const day = String(date.getUTCDate()).padStart(2, "0");
//     const hours = String(date.getUTCHours()).padStart(2, "0");
//     const minutes = String(date.getUTCMinutes()).padStart(2, "0");

//     return `${year}-${month}-${day} ${hours}:${minutes} UTC`;
//   };

//   return (
//     <div style={{ marginTop: "130px" }} className="">
//       <Header />

//       <div className="input-group mb-4 d-flex container table-responsive ">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by user email"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{ color: "#002a5c" }}
//         />

//         <div className="input-group mb-3 d-flex container mt-3 ">
//           <div className="input-group-prepend">
//             <span className="input-group-text text-white all-add-buttons ">
//               From Date
//             </span>
//           </div>

//           <input
//             type="date"
//             className="form-control"
//             style={{ marginRight: "10px" }}
//             value={startDate}
//             onChange={handleStartDateChange}
//           />

//           <div className="input-group-prepend">
//             <span className="input-group-text text-white all-add-buttons">
//               Till Date
//             </span>
//           </div>
//           <input
//             type="date"
//             className="form-control"
//             style={{ marginRight: "10px" }}
//             value={endDate}
//             onChange={handleEndDateChange}
//           />
//         </div>
//       </div>
//       <MDBContainer style={{ width: "100%" }}>
//         <MDBTable responsive bordered className="text-center">
//           <MDBTableHead>
//             <tr className="border-top table-head-color text-white">
//               <th style={{ width: "20%" }}>Username</th>
//               <th style={{ width: "20%" }}>Timestamp</th>
//               <th style={{ width: "20%" }}>Location</th>
//               <th style={{ width: "40%" }}>Activity</th>
//             </tr>
//           </MDBTableHead>
//           <MDBTableBody className="table-hover">
//             {events.map((item, index) => (
//               <tr>
//                 <td>{item.username}</td>
//                 <td>{formatTimestamp(item.timestamp)}</td>
//                 <td>{item.page}</td>

//                 <td>
//                   {item.appgroupName && (
//                     <p>Appgroup Name: {item.appgroupName}</p>
//                   )}
//                   {item.description && <p>Description: {item.description}</p>}
//                   {item.button && <p>Button Name: {item.button}</p>}
//                   {item.adminName && <p>adminName Name: {item.adminName}</p>}
//                   {item.appGroupName && (
//                     <p>appGroupName Name: {item.appGroupName}</p>
//                   )}
//                   {item.appName && <p>appName Name: {item.appName}</p>}
//                   {item.admins &&
//                     item.admins
//                       .split(",")
//                       .map((admin, idx) => (
//                         <p key={idx}>Admins Name: {admin.trim()}</p>
//                       ))}

//                   {item.fetchedConsumerKey && (
//                     <p>fetchedConsumerKey Key: {item.fetchedConsumerKey}</p>
//                   )}
//                   {item.consumerKey && <p>Consumer Key: {item.consumerKey}</p>}
//                   {item.consumerSecret && (
//                     <p>consumerSecret Key: {item.consumerSecret}</p>
//                   )}
//                   {item.apiProducts && (
//                     <div>
//                       <p>API Products:</p>
//                       <ul>
//                         {item.apiProducts.map((product, index) => (
//                           <li key={index}>{product}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </MDBTableBody>
//         </MDBTable>
//       </MDBContainer>
//     </div>
//   );
// };

// export default DataTable;

import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBDatePicker,
} from "mdbreact";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";

const DataTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const events = useSelector((state) => state.eventLoginReducer.events);
  console.log("events", events);

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setStartDate(date);
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    if (!startDate || new Date(date) >= new Date(startDate)) {
      setEndDate(date);
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  const handleStartDateClick = () => {
    document.getElementById("start-date").value = "";
    setStartDate(null);
  };

  const handleEndDateClick = () => {
    document.getElementById("end-date").value = "";
    setEndDate(null);
  };

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.timestamp);
    return (
      event.username?.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!startDate || eventDate >= new Date(startDate)) &&
      (!endDate || eventDate <= new Date(endDate))
    );
  });

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = date.toLocaleString("default", { month: "short" });
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes} UTC`;
  };

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return (
    <Layout>
    <div style={{ marginTop: "130px" }} className="">
      <Header />

      <div className="input-group mb-4 d-flex container table-responsive ">
        <input
          type="text"
          className="form-control"
          placeholder="Search by user email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ color: "#002a5c" }}
        />

        <div className="input-group mb-3 d-flex container mt-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text text-white all-add-buttons start-end-buttons"
              style={{ cursor: "pointer", transition: "color 0.3s" }}
              onClick={handleStartDateClick}
            >
              From Date
            </span>
          </div>
          <input
            id="start-date"
            type="date"
            className="form-control"
            style={{ marginRight: "10px" }}
            value={startDate}
            onChange={handleStartDateChange}
          />
          <div className="input-group-prepend">
            <span
              className="input-group-text text-white all-add-buttons start-end-buttons"
              style={{ cursor: "pointer", transition: "color 0.3s" }}
              onClick={handleEndDateClick}
            >
              Till Date
            </span>
          </div>
          <input
            id="end-date"
            type="date"
            className="form-control"
            style={{ marginRight: "10px" }}
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>

      <div>
        {showAlert && (
          <Alert className="container" variant="warning" dismissible>
            Till Date cannot be earlier than From Date.
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Alert>
        )}
      </div>

      <MDBContainer style={{ width: "100%" }}>
        {filteredEvents.length > 0 ? (
          <MDBTable responsive bordered className="text-center">
            <MDBTableHead>
              <tr className="border-top table-head-color text-white">
                <th style={{ width: "20%" }}>Username</th>
                <th style={{ width: "20%" }}>Timestamp</th>
                <th style={{ width: "20%" }}>operations</th>
                {/* <th style={{ width: "40%" }}>Activity</th> */}
              </tr>
            </MDBTableHead>
            <MDBTableBody className="table-hover">
              {events.map((item, index) => (
                <tr key={index}>
                  <td>{item.username}</td>
                  <td>{formatTimestamp(item.timestamp)}</td>
                  <td>{item.operations}</td>
                  {/* <td>
                    {item.appgroupName && (
                      <p>Appgroup Name: {item.appgroupName}</p>
                    )}
                    {item.EditedAppgroupName && (
                      <p>Edited Appgroup Name: {item.EditedAppgroupName}</p>
                    )}

                    {item.description && <p>Description: {item.description}</p>}
                    {item.button && <p>Button Name: {item.button}</p>}
                    {item.adminEmail && <p>adminEmail : {item.adminEmail}</p>}
                    {item.appGroupName && (
                      <p>appGroupName Name: {item.appGroupName}</p>
                    )}
                    {item.appName && <p>Appgroup App Name: {item.appName}</p>}

                    {item.members &&
                      item.members.split(",").map((member, idx) => (
                        <div key={idx}>
                          <p>Member Name: {member.trim()}</p>
                          {item.roles &&
                            item.roles.map((role, idx) => (
                              <p key={idx}>Role: {role}</p>
                            ))}
                        </div>
                      ))}

                    
                    {item.previousRole && (
                      <div>
                        <p>Previous Role</p>
                        <ul>
                          {item.previousRole.map((attr, idx) => (
                            <li key={idx}>Role:{attr}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.fetchedConsumerKey && (
                      <p>Consumer Key: {item.fetchedConsumerKey}</p>
                    )}
                    {item.consumerKey && (
                      <p>Consumer Key: {item.consumerKey}</p>
                    )}
                    {item.consumerSecret && (
                      <p>consumerSecret Key: {item.consumerSecret}</p>
                    )}

                    {item.selectedApiProduct && (
                      <div>
                        <p>Selected API Products:</p>
                        <ul>
                          {item.selectedApiProduct.map((product, idx) => (
                            <li key={idx}>{product}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.updatedApiProduct && (
                      <div>
                        <p>Updated ApiProduct:</p>
                        <ul>
                          {item.updatedApiProduct.map((attr, idx) => (
                            <li key={idx}>{attr}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </td> */}
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <p>No data found for the particular user.</p>
          </div>
        )}
      </MDBContainer>
    </div>
    </Layout>
  );
};

export default DataTable;
