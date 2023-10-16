import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import withAuth from "./HOC/withAuth";
import InternetAlert from "./InternetAlert/internetAlert";


const Layout = ({ children }) => {

  
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1 }}>{children}</div>
      <InternetAlert />
      {/* <Footer /> */}
    </div>
  );
};

export default withAuth(Layout);
