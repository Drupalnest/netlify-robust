import React, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const InternetAlert = () => {
  useEffect(() => {
    const handleOnlineStatus = () => {
      if (!navigator.onLine) {
        toast.error("No internet connection detected. Please check your connection.");
      }
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return <div></div>;
};

export default InternetAlert;


















// import React, { useEffect, useState } from "react";


// const InternetAlert = () => {
//   const [connectionStatus, setConnectionStatus] = useState("online");
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const handleConnectionChange = () => {
//       const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

//       if (connection && connection.effectiveType === "slow-2g") {
//         setConnectionStatus("slow");
//       } else if (connection && connection.effectiveType === "4g") {
//         setConnectionStatus("online");
//       } else {
//         setConnectionStatus("offline");
//       }

//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 3000);
//     };

//     window.addEventListener("online", handleConnectionChange);
//     window.addEventListener("offline", handleConnectionChange);
//     window.addEventListener("change", handleConnectionChange);

//     return () => {
//       window.removeEventListener("online", handleConnectionChange);
//       window.removeEventListener("offline", handleConnectionChange);
//       window.removeEventListener("change", handleConnectionChange);
//     };
//   }, []);

//   const renderAlert = () => {
//     if (showPopup) {
//       let message = "";
//       let className = "";

//       if (connectionStatus === "slow") {
//         message = "Your internet connection is slow.";
//         className = "alert-warning";
//       } else if (connectionStatus === "online") {
//         message = "You are online!";
//         className = "alert-success";
//       } else if (connectionStatus === "offline") {
//         message = "You are offline.";
//         className = "alert-danger";
//       }

//       return (
//         <div className={`alert ${className} text-center mx-auto`} role="alert">
//           {message}
//         </div>
//       );
//     }

//     return null;
//   };

//   return <div>{renderAlert()}</div>;
// };

// export default InternetAlert;
