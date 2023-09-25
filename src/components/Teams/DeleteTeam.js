// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTeam } from "../../redux/store";
// import { Link, navigate } from "gatsby";
// import Layout from "../Layout";
// import Buttons from "../Buttons/Buttons";

// const DeleteTeam = () => {
//   const [appGroupName, setappGroupName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading,setloading]=useState(false)
//   const dispatch = useDispatch();

//   const teamDetails = useSelector((state) => state.teamDetails);
//   console.log("delete", teamDetails);

//   const isFetching = teamDetails.loading;
//   // console.log("appGroupName",appGroupView.name)

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!appGroupName) {
//       setErrorMessage("Company name is required");
//       return;
//     }

//     try {
//       await dispatch(deleteTeam(appGroupName));

//       setappGroupName("");
//       setErrorMessage("");
//       alert("Appgroup deleted successfully");
//       navigate("/");
//     } catch (error) {
//       setErrorMessage(`Error deleting appgroup: ${error.message}`);
//     }
//   };

//   if (!isFetching && teamDetails.length === 0) {
//     return <p style={{ margin: "auto", textAlign: "center", marginTop: "50vh", transform: "translateY(-50%)" }}>Loading appgroups...</p>;
//   }

//   return (
//     <Layout>
//     <div>
//     <Buttons/>
//       <div className="page">
//         <div className="page__content-above">
//           <div className="container-fluid px-0">
//             <div className="contextual-region block block--pagetitle bg-lighter py-4">
//               <div className="container">
//                 <h1 className="js-quickedit-page-title page__title mb-0">
//                   Are you sure you want to delete the
//                   <em  >{teamDetails.name}</em> appgroup?
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="dialog-off-canvas-main-canvas">
//           <div className="container">
//             <form
//               className="team-delete-form team-confirm-form confirmation"
//               onSubmit={handleFormSubmit}
//             >
//               <strong>
//                 All appgroup, credentials, and appgroup membership information will be
//                 deleted.
//               </strong>
//               This action cannot be undone.
//               <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-verification-code js-form-item-verification-code form-group">
//                 <label className="js-form-required form-required">
//                   Type "<em  >{teamDetails.name}</em>" to
//                   proceed
//                   <i className="fas fa-asterisk text-danger form-required__indicator" />
//                 </label>
//                 <input
//                   type="text"
//                   size={60}
//                   maxLength={128}
//                   className="required form-control"
//                   required="required"
//                   aria-required="true"
//                   id="companyName"
//                   value={appGroupName}
//                   onChange={(e) => setappGroupName(e.target.value)}
//                 />
//               </div>
//               <div className="form-actions js-form-wrapper form-wrapper">
//                 <button
//                   type="submit"
//                   className="button button--primary js-form-submit form-submit btn btn-primary"
//                 >
//                   Delete Appgroup
//                 </button>
//                 <Link to="/" className="button">
//                   Cancel
//                 </Link>
//               </div>
//             </form>
//             {errorMessage && (
//               <div className="error-message">{errorMessage}</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//     </Layout>
//   );
// };

// export default DeleteTeam;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeam } from "../../redux/store";
import { Link, navigate } from "gatsby";
import Layout from "../Layout";
import Buttons from "../Buttons/Buttons";

const DeleteTeam = () => {
  const [appGroupName, setAppGroupName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const teamDetails = useSelector((state) => state.teamDetails);
  const isFetching = teamDetails ? teamDetails.loading : true; // Handle null value

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!appGroupName) {
      setErrorMessage("Appgroup name is required");
      return;
    }

    try {
      setLoading(true);
      await dispatch(deleteTeam(appGroupName));
      setLoading(false);

      setAppGroupName("");
      setErrorMessage("");
      alert("Appgroup deleted successfully");
      navigate("/");
    } catch (error) {
      setLoading(false);
      setErrorMessage(`Error deleting appgroup: ${error.message}`);
    }
  };

  if (!teamDetails || (teamDetails && isFetching)) {
    return (
      <Layout>
        <div>
          <Buttons />
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div className="container">
                    <h1 className="js-quickedit-page-title page__title mb-0">
                      Loading appgroups...
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
      <div>
        <Buttons />
        <div className="page">
          <div className="page__content-above">
            <div className="container-fluid px-0">
              <div className="contextual-region block block--pagetitle bg-lighter py-4">
                <div className="container">
                  <h1 className="js-quickedit-page-title page__title mb-0">
                    Are you sure you want to delete the
                    <em  >{teamDetails.name}</em>{" "}
                    appgroup?
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="dialog-off-canvas-main-canvas">
            <div className="container">
              <form
                className="team-delete-form team-confirm-form confirmation"
                onSubmit={handleFormSubmit}
              >
                <strong>
                  All appgroup, credentials, and appgroup membership information
                  will be deleted.
                </strong>
                This action cannot be undone.
                <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-verification-code js-form-item-verification-code form-group">
                  <label className="js-form-required form-required">
                    Type "<em  >{teamDetails.name}</em>"
                    to proceed
                    <i className="fas fa-asterisk text-danger form-required__indicator" />
                  </label>
                  <input
                    type="text"
                    size={60}
                    maxLength={128}
                    className="required form-control"
                    required="required"
                    aria-required="true"
                    id="companyName"
                    value={appGroupName}
                    onChange={(e) => setAppGroupName(e.target.value)}
                  />
                </div>
                <div className="form-actions js-form-wrapper form-wrapper">
                  <button
                    type="submit"
                    className="button button--primary js-form-submit form-submit btn btn-primary"
                  >
                    Delete Appgroup
                  </button>
                  <Link to="/" className="button">
                    Cancel
                  </Link>
                </div>
              </form>
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeleteTeam;
