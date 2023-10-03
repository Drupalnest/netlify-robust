// withAuth.js

// import React, { useEffect } from "react";
// import { navigate } from "gatsby";

// const withAuth = (Component) => {
//   const WrappedComponent = (props) => {
//     useEffect(() => {
//       const token = localStorage.getItem("userData");
//       if (!token) {
//         navigate("/login");
//       }
//     }, []);

//     return <Component {...props} />;
//   };

//   return WrappedComponent;
// };

// export default withAuth;




import React, { useEffect } from "react";
import { navigate } from "gatsby";

const withAuth = (Component) => {
  const WrappedComponent = (props) => {
    useEffect(() => {
      const userData = localStorage.getItem("logout_token");
      if (!userData) {
        navigate("/login");
      } 
    //   else {
    //     // If userData is found, check if the user is trying to access the login page
    //     const isLoginRoute =  navigate("/login");
    //     if (isLoginRoute) {
    //       navigate("/"); // Redirect to another page (e.g., homepage)
    //     }
    //   }
    }, []);

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withAuth;
