// // import React from "react";
// // import cover from "../images/images/cover.png";
// // import cover1 from "../images/images/cover1.png";
// // import cover2 from "../images/images/cover2.png";
// // import cover3 from "../images/images/cover3.png";
// // import cover4 from "../images/images/cover4.png";
// // import cover5 from "../images/images/cover5.png";
// // import cover6 from "../images/images/cover6.png";

// // const Startpagee = () => {
// //   const cardData = [
// //     {
// //       title: "Access Token​",
// //       description1: "ROBUSTAPIHUB",
// //       description2: "Create access token for subsequent requests",
// //       image: `${cover}`,
// //     },
// //     {
// //       title: "Transactions​",
// //       description1: "ROBUSTAPIHUB",
// //       description2: "Transfer funds between payer and merchant​",
// //       image: `${cover1}`,
// //     },

// //     {
// //       title: "Risk Management​",
// //       description1: "ROBUSTAPIHUB",
// //       description2: "Fraud and risk management ​",
// //       image: `${cover2}`,
// //     },
// //     {
// //       title: "Payment methods​",
// //       description1: "ROBUSTAPIHUB",
// //       description2: "Secure storage for payment information​",
// //       image: `${cover3}`,
// //     },

// //     {
// //       title: "Deposits​",
// //       description1: "ROBUSTAPIHUB",
// //       description2: "Deposits to bank account",
// //       image: `${cover4}`,
// //     },
// //     {
// //       title: "Disputes​",
// //       description1: "ROBUSTAPIHUB",
// //       description2: "Manage disputes​",
// //       image: `${cover5}`,
// //     },
// //     {
// //       title: "Reports​",
// //       description1: "ROBUSTAPIHUB",
// //       description2: "Manage reports for merchants​",
// //       image: `${cover6}`,
// //     },
// //     {
// //       title: "Global Currency Conversions​",
// //       description1: "ROBUSTAPIHUB",
// //       description2: "Currency conversions and country codes​​",
// //       image: `${cover2}`,
// //     },
// //   ];
// //   return (
// //     <div>
// //       <h2>Available APIs</h2>
// //       <div className="col-md-4 mb-4">
// //         <div className="card">
// //           <img src={cover} className="card-img-top" alt="Card Image" />
// //           <div className="card-body">
// //             <h5 className="card-title">{title}</h5>
// //             <p className="card-text">{description1} </p>
// //             <p className="card-text">{description2} </p>
// //             <a href="#" className="btn btn-primary">
// //               Learn More
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Startpagee;

// import React from "react";
// import cover from "../images/images/cover.png";
// import cover1 from "../images/images/cover1.png";
// import cover2 from "../images/images/cover2.png";
// import cover3 from "../images/images/cover3.png";
// import cover4 from "../images/images/cover4.png";
// import cover5 from "../images/images/cover5.png";
// import cover6 from "../images/images/cover6.png";

// const Startpagee = () => {
//     const cardData = [
//         {
//           title: "Access Token​",
//           description1: "ROBUSTAPIHUB",
//           description2: "Create access token for subsequent requests",
//           image: `${cover}`,
//         },
//         {
//           title: "Transactions​",
//           description1: "ROBUSTAPIHUB",
//           description2: "Transfer funds between payer and merchant​",
//           image: `${cover1}`,
//         },

//         {
//           title: "Risk Management​",
//           description1: "ROBUSTAPIHUB",
//           description2: "Fraud and risk management ​",
//           image: `${cover2}`,
//         },
//         {
//           title: "Payment methods​",
//           description1: "ROBUSTAPIHUB",
//           description2: "Secure storage for payment information​",
//           image: `${cover3}`,
//         },

//         {
//           title: "Deposits​",
//           description1: "ROBUSTAPIHUB",
//           description2: "Deposits to bank account",
//           image: `${cover4}`,
//         },
//         {
//           title: "Disputes​",
//           description1: "ROBUSTAPIHUB",
//           description2: "Manage disputes​",
//           image: `${cover5}`,
//         },
//         {
//           title: "Reports​",
//           description1: "ROBUSTAPIHUB",
//           description2: "Manage reports for merchants​",
//           image: `${cover6}`,
//         },
//         {
//           title: "Global Currency Conversions​",
//           description1: "ROBUSTAPIHUB",
//           description2: "Currency conversions and country codes​​",
//           image: `${cover2}`,
//         },
//       ];
//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">Start Page</h1>
//       <div className="row">
//         {cardData.map((card, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card">
//               <img src={card.image} className="card-img-top" alt="Card Image" />
//               <div className="card-body">
//                 <h5 className="card-title">{card.title}</h5>
//                 <p className="card-text">{card.description1}</p>
//                 <p className="card-text">{card.description2}</p>
//                 <a href="#" className="btn btn-primary">
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Startpagee;

// import React from "react";
// import cover from "../images/images/cover.png";
// import cover1 from "../images/images/cover1.png";
// import cover2 from "../images/images/cover2.png";
// import cover3 from "../images/images/cover3.png";
// import api from "../images/images/api.png";

// const Startpagee = () => {
//   const cardData = [
//     {
//       title: "Access Token​",
//       description1: "ROBUSTAPIHUB",
//       description2: "Create access token for subsequent requests",
//       image: api,
//     },
//     {
//       title: "Transactions​",
//       description1: "ROBUSTAPIHUB",
//       description2: "Transfer funds between payer and merchant​",
//       image: cover1,
//     },
//     {
//       title: "Risk Management​",
//       description1: "ROBUSTAPIHUB",
//       description2: "Fraud and risk management ​",
//       image: cover2,
//     },
//     {
//       title: "Payment methods​",
//       description1: "ROBUSTAPIHUB",
//       description2: "Secure storage for payment information​",
//       image: cover3,
//     },
//   ];

//   return (
//     <div className="container mt-5">
//       <div className="container text-center mt-5 ">
//         <h3>Overview</h3>
//         <p className="pt-5 pb-5 ">
//           Set of APIs enabling payment request services in real-time schemes:
//           includes the ability to retrieve the status of payment requests
//         </p>
//       </div>
//       <div className="container bg mt-5 ">
//         <div className="text-center">
//           <span className="p-5 ">Available APIs</span>
//         </div>

//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
//           {cardData.map((card, index) => (
//             <div key={index} className="col">
//               <div className="card p-1">
//                 <div className="d-flex align-items-center p-0 border border-danger">
//                   <img
//                     src={card.image}
//                     alt=""
//                     className="card-img-top rounded-circle border border-danger mr-2"
//                     style={{ width: "50px" }}
//                   />
//                   <div className="p-0 m-0">
//                     <p className="card-title">{card.title}</p>
//                     <p className="card-title">Abc</p>
//                   </div>
//                   <img
//                     src={card.image}
//                     alt=""
//                     className="card-img-top rounded-circle border border-danger mr-2"
//                     style={{ width: "50px" }}
//                   />
//                 </div>

//                 <div className="card-body d-flex flex-row ">
//                   <p className="border border-danger">{card.description1}</p>
//                   <p className="border border-danger">{card.description2}</p>
//                 </div>
//                 <div className="card-body d-flex flex-row ">
//                   <p>ahdusdcusuih idubfuye wejdfuir iefuer</p>
//                 </div>
//                 <div className="d-flex row">
//                   <div className="card-body d-flex flex-row ">
//                     <p>Api</p>
//                   </div>

//                   <div className="card-body d-flex flex-row ">
//                     <p>Beta | v2</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Startpagee;

import React from "react";
import cover from "../images/images/cover.png";
import cover1 from "../images/images/cover1.png";
import cover2 from "../images/images/cover2.png";
import cover3 from "../images/images/cover3.png";
import api from "../images/images/api.png";
import bookmark from "../images/images/bookmark_svg.svg";
import diagram from "../images/images/diagram.png";
import { Card } from "react-bootstrap";

const Startpagee = () => {
  const cardData = [
    {
      title: "Access Token​",
      description1: "ROBUSTAPIHUB",
      description2: "Create access token for subsequent requests",
      image: api,
    },
    {
      title: "Transactions​",
      description1: "ROBUSTAPIHUB",
      description2: "Transfer funds between payer and merchant​",
      image: api,
    },
    {
      title: "Risk Management​",
      description1: "ROBUSTAPIHUB",
      description2: "Fraud and risk management ​",
      image: api,
    },
    {
      title: "Payment methods​",
      description1: "ROBUSTAPIHUB",
      description2: "Secure storage for payment information​",
      image: api,
    },
  ];

  const keyFeaturesData = [
    {
      title: "SEND PAYMENT REQUEST",
      description: "Initiate a payment request in real-time schemes",
    },
    {
      title: "RETRIEVE A PAYMENT REQUEST STATUS",
      description:
        "Retrieve a status report for a previously initiated payment request",
    },
    {
      title: "LOAD A PAYMENT REQUEST",
      description: "Load a payment request to view its details",
    },
    // Add more features as needed
  ];

  return (
    <div className="container-fluid col-11  p-3 mt-5">
      <div className=" text-center mt-5 ">
        <h1>Overview</h1>
        <p className="pt-5 pb-5 ">
          Set of APIs enabling payment request services in real-time schemes:
          includes the ability to retrieve the status of payment requests
        </p>
      </div>
      <div className="  border border-danger">
        <div className="text-center p-5">
          <h1 className=" ">Available APIs</h1>
        </div>

        <div className="   border border-danger row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {cardData.map((card, index) => (
            <div key={index} className="col  border border-primary rounded  ">
              <div className="card w-100 h-100  p-2">
                <div className="w-100 d-flex  border border-danger">
                  <img
                    src={card.image}
                    alt=""
                    className="rounded-circle border"
                    style={{ width: "50px" }}
                  />
                  <div className="d-flex flex-column justify-content-center border border-danger">
                    <p className="card-title mb-0">{card.title}</p>
                    <p className="card-title mb-0">Abc</p>
                  </div>
                  <img
                    src={bookmark}
                    alt=""
                    className="border border-danger "
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
                <div className="w-100 card-body justify-content-between d-flex flex-row p-1">
                  <p
                    className=" px-1 mb-3"
                    style={{
                      border: "1px solid #dc3545",
                      borderRadius: "15px",
                      marginRight: "10px",
                      fontSize: "13px",
                      fontWeight: "lighter",
                    }}
                  >
                    Fusion Global PAYplus
                  </p>
                  <p
                    className="px-3  mb-3"
                    style={{
                      border: "1px solid #dc3545",
                      borderRadius: "15px",
                      marginRight: "10px",
                      fontSize: "13px",
                      fontWeight: "lighter",
                    }}
                  >
                    Fusin Payments To Go
                  </p>
                </div>
                <div className="mb-4">
                  <p
                    className="small"
                    style={{ fontSize: "0.8rem", fontWeight: 300 }}
                  >
                    Initiate a request for payment in real-time schemes with
                    Request and Response based on ISO20022
                    pain.013.001.05/pain.014.001.05
                  </p>
                </div>

                <div className="w-100 d-flex justify-content-between  border border-danger p-1">
                  <div
                    className="d-flex flex-column me-2"
                    style={{
                      border: "1px solid #dc3545",
                      borderRadius: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    <p className="mb-0 px-3">Api</p>
                  </div>

                  <div className="d-flex flex-column ">
                    <p className="mb-0">Beta | v2</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container-fluid mt-5 col-12 text-center p-5">
          <h1 className="p-5">Key Features</h1>

          <div className="card-deck">
            {keyFeaturesData.map((feature, index) => (
              <div key={index} className="card mb-3  border border-warning">
                <div className="card-body p-5">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container p-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>How It Works</h1>
              <img
                src={diagram}
                alt=""
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startpagee;
