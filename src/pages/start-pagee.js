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

import React from "react";
import cover from "../images/images/cover.png";
import cover1 from "../images/images/cover1.png";
import cover2 from "../images/images/cover2.png";
import cover3 from "../images/images/cover3.png";

const Startpagee = () => {
  const cardData = [
    {
      title: "Access Token​",
      description1: "ROBUSTAPIHUB",
      description2: "Create access token for subsequent requests",
      image: cover,
    },
    {
      title: "Transactions​",
      description1: "ROBUSTAPIHUB",
      description2: "Transfer funds between payer and merchant​",
      image: cover1,
    },
    {
      title: "Risk Management​",
      description1: "ROBUSTAPIHUB",
      description2: "Fraud and risk management ​",
      image: cover2,
    },
    {
      title: "Payment methods​",
      description1: "ROBUSTAPIHUB",
      description2: "Secure storage for payment information​",
      image: cover3,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {cardData.map((card, index) => (
          <div key={index} className="col">
            <div className="card">
            <div></div>
              <img src={card.image} alt={card.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description1}</p>
                <p className="card-text">{card.description2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startpagee;
