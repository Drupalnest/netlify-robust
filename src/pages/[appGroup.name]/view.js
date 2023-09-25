// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const View = () => {
//   const teamDetails = useSelector((state) => state.teamDetails);
//   // console.log("wouiefvre", teamDetails);
//   const [name, setName] = useState(teamDetails.name);
//   useEffect(() => {}, []);

//   return (
//     <div>
//       <div class="page__content-above">
//         <div class="container-fluid px-0">
//           <div class="contextual-region block block--pagetitle bg-lighter py-4">
//             <div class="container">
//               <h1 class="js-quickedit-page-title page__title mb-0">
//                 <div
//                   data-quickedit-field-id="team/zuf6/displayName/und/full"
//                   class="field field--inline d-sm-flex align-items-sm-center team__displayname"
//                 >
//                   <div class="field__label">Team name</div>
//                   <div class="field__item">{name}</div>
//                 </div>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default View;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Buttons from "../../components/Buttons/Buttons";
import { fetchTeamDetails } from "../../redux/store";
import { useLocation } from "@reach/router";

const View = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const teamDetails = useSelector((state) => state.teamDetails);
  console.log("view", teamDetails);

  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);

  //   const teamname = searchParams.get("teamname") || "defaultTeamName";

  //   console.log("teamNameNew", teamname);

  //   console.log("Current URL:", location.href);
  // console.log("Query Parameters:", searchParams.toString());

  // console.log("Before dispatch: teamname =", teamname);
  // dispatch(fetchTeamDetails(teamname))
  //   .then(() => {
  //     console.log("Team details fetched successfully");
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching team details:", error);
  //     setLoading(false);
  //   });
  // console.log("After dispatch",teamname);

  // useEffect(() => {
  //   setLoading(true);

  //   dispatch(fetchTeamDetails(teamname))
  //     .then(() => {
  //       console.log("Team details fetched successfully");
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching team details:", error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [dispatch, teamname]);

  const isFetching = teamDetails ? teamDetails.loading : true; // Handle null value

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
      <div style={{ marginTop: "120px" }}>
        <Buttons />
        <div className="page__content-above">
          <div className="container-fluid px-0">
            <div className="contextual-region block block--pagetitle bg-lighter py-4">
              <div className="container">
                <h1 className="js-quickedit-page-title page__title mb-0">
                  <div
                    data-quickedit-field-id="team/zuf6/displayName/und/full"
                    className="field field--inline d-sm-flex align-items-sm-center team__displayname"
                  >
                    <h3 className="field__label">Appgroup name :</h3>
                    <div
                      className="field__item"
                      style={{
                        // background: "none",
                        // border: "none",
                        // cursor: "pointer",
                        // fontWeight: 600,
                        // fontSize: "26px",
                         // Adding the font family
                      }}
                    >
                     <h3> &nbsp; {teamDetails.name}</h3> 
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
