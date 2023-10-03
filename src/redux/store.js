// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import axios from "axios";

// import { composeWithDevTools } from "redux-devtools-extension";
// import Cookies from "js-cookie";
// import getBeareraccessaccessToken from "../components/Auth/Bearer";






// // Use the functions in your Gatsby components or pages

 

// console.log("hrfhf:");


// // Actions
// const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
// const DELETE_TEAM_SUCCESS = "DELETE_TEAM_SUCCESS";

// const FETCH_APPS_SUCCESS = "FETCH_APPS_SUCCESS";
// const FETCH_APPS_FAILURE = "FETCH_APPS_FAILURE";
// const FETCH_APPS_LOADING = "FETCH_APPS_LOADING";
// const FETCH_TEAMS_LOADING = "FETCH_TEAMS_LOADING";
// const FETCH_TEAMS_ERROR = "FETCH_TEAMS_ERROR";

// const UPDATE_TEAM_DISPLAY_NAME_SUCCESS = "UPDATE_TEAM_DISPLAY_NAME_SUCCESS";
// const UPDATE_TEAM_DISPLAY_NAME_FAILURE = "UPDATE_TEAM_DISPLAY_NAME_FAILURE";
// const ADD_APP_SUCCESS = "ADD_APP_SUCCESS";
// const ADD_APP_FAILURE = "ADD_APP_FAILURE";
// const UPDATE_APP_DETAILS = "UPDATE_APP_DETAILS";

// const FETCH_TEAM_DETAILS_SUCCESS = "FETCH_TEAM_DETAILS_SUCCESS";

// const FETCH_APP_DETAILS_SUCCESS = "FETCH_APP_DETAILS_SUCCESS";
// const FETCH_APP_DETAILS_FAILURE = "FETCH_APP_DETAILS_FAILURE";

// const FETCH_API_PRODUCTS_SUCCESS = "FETCH_API_PRODUCTS_SUCCESS ";
// const FETCH_API_PRODUCTS_FAILURE = "FETCH_API_PRODUCTS_FAILURE";
// const SELECT_TEAM = "SELECT_TEAM";


// const accessaccessToken=Cookies.get('accessaccessToken');
// console.log('accessaccessToken',accessaccessToken);




// const axiosInstance = axios.create({
//   baseURL: "https://apigee.googleapis.com/v1/organizations/apt-subset-398000",
//   headers: {
//     Authorization: `Bearer ${accessaccessToken}`,
//     "Content-Type": "application/json",
//   },
// });






// const teamsUpdateDisplayNameReducer = (state = null, action) => {
//   switch (action.type) {
//     case UPDATE_TEAM_DISPLAY_NAME_SUCCESS:
//       return { ...state, isSuccess: true };
//     case UPDATE_TEAM_DISPLAY_NAME_FAILURE:
//       return { ...state, isSuccess: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const addAppReducer = (state = null, action) => {
//   switch (action.type) {
//     case ADD_APP_SUCCESS:
//       return { ...state, isSuccess: true, app: action.payload };
//     case ADD_APP_FAILURE:
//       return { ...state, isSuccess: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// // Axios instance with base URL and bearer accessaccessToken

// // const axiosInstance = axios.create({

// //   baseURL: "https://apigee.googleapis.com/v1/organizations/apt-subset-398000",
// //   headers: {
// //     Authorization: `Bearer ${accessaccessToken}`,
// //     "Content-Type": "application/json",
// //   },
// // });

// // // Async action to fetch the teams list
// // export const fetchTeams = () => async (dispatch) => {
// //   try {
// //     const response = await axiosInstance.get("/appgroups");
// //     dispatch({ type: FETCH_TEAMS_SUCCESS, payload: response.data });
// //     console.log("response data",response.data )
// //   } catch (error) {
// //     console.error("Error fetching teams:", error);
// //   }
// // };
// // // Reducers
// // const teamsReducer = (state = [], action) => {
// //   switch (action.type) {
// //     case FETCH_TEAMS_SUCCESS:
// //       return action.payload;
// //     case DELETE_TEAM_SUCCESS:
// //       return state.filter((team) => team.appGroupName !== action.payload);
// //     default:
// //       return state;
// //   }
// // };

// export const fetchTeams = () => async (dispatch) => {
//   try {
//     dispatch({ type: FETCH_TEAMS_LOADING }); // Dispatch loading action
//     const response = await axiosInstance.get("/appgroups");
//     dispatch({ type: FETCH_TEAMS_SUCCESS, payload: response.data });
//   } catch (error) {
//     console.error("Error fetching teams:", error);
//   }
// };

// const initialStateTeams = {
//   isFetching: false,
//   data: [],
//   error: null,
// };

// const teamsReducer = (state = initialStateTeams, action) => {
//   switch (action.type) {
//     case FETCH_TEAMS_LOADING:
//       return { ...state, isFetching: true, error: null };
//     case FETCH_TEAMS_SUCCESS:
//       return { ...state, isFetching: false, data: action.payload, error: null };
//     case FETCH_TEAMS_ERROR:
//       return { ...state, isFetching: false, error: action.error };
//     default:
//       return state;
//   }
// };

// // const teamsReducer = (state = { loading: false, data: [] }, action) => {
// //   switch (action.type) {
// //     case FETCH_TEAMS_LOADING:
// //       return { ...state, loading: true };
// //     case FETCH_TEAMS_SUCCESS:
// //       return { ...state, loading: false, data: action.payload };
// //     case DELETE_TEAM_SUCCESS:
// //       return {
// //         ...state,
// //         data: state.data.filter((team) => team !== action.payload)
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // Async action to fetch the teams list
// export const apiProducts = () => async (dispatch) => {
//   try {
//     const response = await axiosInstance.get("/apiproducts");
//     dispatch({ type: FETCH_API_PRODUCTS_SUCCESS, payload: response.data });
//   } catch (error) {
//     console.error("Error fetching teams:", error);
//   }
// };
// // Reducers
// const apiProductsReducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_API_PRODUCTS_SUCCESS:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// // Async action to fetch team details
// export const fetchTeamDetails = (teamname) => async (dispatch) => {
//   try {
//     const response = await axiosInstance.get(`/appgroups/${teamname}`);
//     dispatch({ type: FETCH_TEAM_DETAILS_SUCCESS, payload: response.data });
//   } catch (error) {
//     if (error.response) {
//       console.error("Error fetching team details:", error.response.data);
//     } else if (error.request) {
//       console.error("Error making the request:", error.request);
//     } else {
//       console.error("Error:", error.message);
//     }
//   }
// };

// const teamDetailsReducer = (state = null, action) => {
//   switch (action.type) {
//     case FETCH_TEAM_DETAILS_SUCCESS:
//       return action.payload;
//     default:
//       return state;
//   }
// };




// export const fetchAppDetails = (teamName, appName) => async (dispatch) => {
//   try {
//     const accessaccessToken = accessaccessToken;
//     const response = await axios.get(
//       `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}`,
//       { headers: { Authorization: `Bearer ${accessaccessToken}` } }
//     );

//     dispatch({
//       type: FETCH_APP_DETAILS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: FETCH_APP_DETAILS_FAILURE,
//       error: "Error fetching app details",
//     });
//   }
// };

// const initialStateappdetals = { appDetailsData: null, error: null };

// const appDetailsData = (state = initialStateappdetals, action) => {
//   switch (action.type) {
//     case FETCH_APP_DETAILS_SUCCESS:
//       return { ...state, appDetailsData: action.payload, error: null };
//     case FETCH_APP_DETAILS_FAILURE:
//       return { ...state, appDetailsData: null, error: action.error };
//     default:
//       return state;
//   }
// };

// export const fetchApps = (appgroupname) => async (dispatch) => {
//   try {
//     const accessaccessToken = accessaccessToken;
//     const response = await axios.get(
//       `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupname}/apps`,
//       { headers: { Authorization: `Bearer ${accessaccessToken}` } }
//     );

//     dispatch({
//       type: FETCH_APPS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({ type: FETCH_APPS_FAILURE, error: "Error fetching app details" });
//   }
// };

// const initialStateApps = { appsData: null, error: null };

// const appsData = (state = initialStateApps, action) => {
//   switch (action.type) {
//     case FETCH_APPS_SUCCESS:
//       return { ...state, appsData: action.payload, error: null };
//     case FETCH_APPS_FAILURE:
//       return { ...state, appsData: null, error: action.error };
//     default:
//       return state;
//   }
// };




// // export const fetchAppDetails = (teamName, appName) => async (dispatch) => {
// //   try {
// //     const accessToken = accessToken;
// //     const response = await axios.get(
// //       `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}`,
// //       { headers: { Authorization: `Bearer ${accessToken}` } }
// //     );

// //     dispatch({
// //       type: FETCH_APP_DETAILS_SUCCESS,
// //       payload: response.data,
// //     });
// //   } catch (error) {
// //     dispatch({
// //       type: FETCH_APP_DETAILS_FAILURE,
// //       error: "Error fetching app details",
// //     });
// //   }
// // };

// // const initialStateappdetals = { appDetailsData: null, error: null };

// // const appDetailsData = (state = initialStateappdetals, action) => {
// //   switch (action.type) {
// //     case FETCH_APP_DETAILS_SUCCESS:
// //       return { ...state, appDetailsData: action.payload, error: null };
// //     case FETCH_APP_DETAILS_FAILURE:
// //       return { ...state, appDetailsData: null, error: action.error };
// //     default:
// //       return state;
// //   }
// // };



// // export const fetchAppDetails = (teamName, appName) => async (dispatch) => {
// //   try {
// //     const accessToken = accessToken;
// //     const response = await axios.get(
// //       `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}`,
// //       { headers: { Authorization: `Bearer ${accessToken}` } }
// //     );

// //     dispatch({
// //       type: FETCH_APP_DETAILS_SUCCESS,
// //       payload: response.data,
// //     });
// //   } catch (error) {
// //     dispatch({
// //       type: FETCH_APP_DETAILS_FAILURE,
// //       error: "Error fetching app details",
// //     });
// //   }
// // };

// // const initialStateappdetals = { appDetailsData: null, error: null };

// // const appDetailsData = (state = initialStateappdetals, action) => {
// //   switch (action.type) {
// //     case FETCH_APP_DETAILS_SUCCESS:
// //       return { ...state, appDetailsData: action.payload, error: null };
// //     case FETCH_APP_DETAILS_FAILURE:
// //       return { ...state, appDetailsData: null, error: action.error };
// //     default:
// //       return state;
// //   }
// // };





// // export const fetchApps = (appgroupname) => async (dispatch) => {
// //   try {
// //     dispatch({ type: FETCH_APPS_LOADING });

// //     const accessaccessToken = accessaccessToken;
// //     const response = await axios.get(
// //       `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupname}/apps`,
// //       { headers: { Authorization: `Bearer ${accessaccessToken}` } }
// //     );

// //     dispatch({
// //       type: FETCH_APPS_SUCCESS,
// //       payload: response.data,
// //     });
// //   } catch (error) {
// //     dispatch({ type: FETCH_APPS_FAILURE, error: "Error fetching app details" });
// //   }
// // };

// // const initialStateApps = { appsData: null, error: null, loading: false };

// // export const appsData = (state = initialStateApps, action) => {
// //   switch (action.type) {
// //     case FETCH_APPS_SUCCESS:
// //       return {
// //         ...state,
// //         appsData: action.payload,
// //         error: null,
// //         loading: false,
// //       };
// //     case FETCH_APPS_FAILURE:
// //       return { ...state, appsData: null, error: action.error, loading: false };
// //     case FETCH_APPS_LOADING:
// //       return { ...state, loading: true };
// //     default:
// //       return state;
// //   }
// // };




// // Action Creators
// const updateTeamDisplayNameSuccess = () => ({
//   type: UPDATE_TEAM_DISPLAY_NAME_SUCCESS,
// });

// const updateTeamDisplayNameFailure = (errorMessage) => ({
//   type: UPDATE_TEAM_DISPLAY_NAME_FAILURE,
//   payload: errorMessage,
// });

// export const updateTeamDisplayName =
//   (teamName, displayName, attributes) => (dispatch) => {
//     const apiEndpoint = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}`;
//     const updatedCompanyData = {
//       displayName: displayName,
//       attributes: attributes,
//     };

//     const accessaccessToken = accessaccessToken; // Make sure you have your accessaccessToken properly configured.
//     const config = {
//       headers: {
//         Authorization: `Bearer ${accessaccessToken}`,
//       },
//     };

//     axios
//       .put(apiEndpoint, updatedCompanyData, config)
//       .then((response) => {
//         dispatch(updateTeamDisplayNameSuccess());
//       })
//       .catch((error) => {
//         dispatch(updateTeamDisplayNameFailure("Error updating company name."));
//         console.error(error);
//       });
//   };

// const addAppSuccess = (app) => ({
//   type: ADD_APP_SUCCESS,
//   payload: app,
// });

// const addAppFailure = (error) => ({
//   type: ADD_APP_FAILURE,
//   payload: error,
// });

// export const addApp = (teamName, appData) => {
//   return async (dispatch) => {
//     try {
//       const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps`;
//       const accessaccessToken = accessaccessToken;
//       const axiosConfig = {
//         headers: {
//           Authorization: `Bearer ${accessaccessToken}`,
//           "Content-Type": "application/json",
//         },
//       };

//       const response = await axios.post(apiUrl, appData, axiosConfig);
//       dispatch(addAppSuccess(response.data));
//     } catch (error) {
//       dispatch(addAppFailure(error));
//     }
//   };
// };

// // Action to delete a team
// export const deleteTeamSuccess = (appGroupName) => ({
//   type: DELETE_TEAM_SUCCESS,
//   payload: appGroupName,
// });

// export const deleteTeam = (appGroupName) => {
//   return (dispatch) => {
//     const apiBaseUrl =
//       "https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups";
//     const accessaccessToken = accessaccessToken;

//     const axiosConfig = {
//       headers: {
//         Authorization: `Bearer ${accessaccessToken}`,
//         "Content-Type": "application/json",
//       },
//     };

//     const apiUrl = `${apiBaseUrl}/${appGroupName}`;

//     axios
//       .delete(apiUrl, axiosConfig)
//       .then((response) => {
//         dispatch(deleteTeamSuccess(appGroupName));
//       })
//       .catch((error) => {
//         console.error("Error deleting team:", error);
//       });
//   };
// };

// // Assuming you have set up the action types, import them here
// // const UPDATE_APP_DETAILS = 'UPDATE_APP_DETAILS';

// // Action creator to update app details
// export const updateAppDetails = (appDetails) => {
//   return {
//     type: UPDATE_APP_DETAILS,
//     payload: appDetails,
//   };
// };
// const initialState = {
//   selectedAttributes: [],
//   appDetails: null,
// };

// export const appdetailReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_APP_DETAILS:
//       return {
//         ...state,
//         appDetails: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const persistConfig = {
//   key: "root",
//   storage,
// };

// export const DELETE_TEAM_APP_SUCCESS = "DELETE_TEAM_SUCCESS";

// export const deleteTeamAppSuccess = (teamName, appName) => ({
//   type: DELETE_TEAM_APP_SUCCESS,
//   payload: { teamName, appName },
// });

// export const deleteTeamApp = (teamName, appName) => {
//   return (dispatch) => {
//     const apiBaseUrl =
//       "https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups";
//     const accessaccessToken = accessaccessToken;

//     const axiosConfig = {
//       headers: {
//         Authorization: `Bearer ${accessaccessToken}`,
//         "Content-Type": "application/json",
//       },
//     };

//     const apiUrl = `${apiBaseUrl}/${teamName}/apps/${appName}`;

//     axios
//       .delete(apiUrl, axiosConfig)
//       .then((response) => {
//         dispatch(deleteTeamAppSuccess(teamName, appName));
//       })
//       .catch((error) => {
//         console.error("Error deleting team:", error);
//         // Handle the error appropriately (e.g., dispatch an error action)
//       });
//   };
// };

// // Action types
// const UPDATE_SELECTED_ATTRIBUTES = "UPDATE_SELECTED_ATTRIBUTES";

// // Action creators
// export const updateSelectedAttributes = (attribute) => ({
//   type: UPDATE_SELECTED_ATTRIBUTES,
//   payload: attribute,
// });

// // Reducer
// const attributeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_SELECTED_ATTRIBUTES:
//       // Check if the attribute is already selected, if not add it, otherwise remove it
//       const updatedSelectedAttributes = state.selectedAttributes.includes(
//         action.payload
//       )
//         ? state.selectedAttributes.filter((attr) => attr !== action.payload)
//         : [...state.selectedAttributes, action.payload];

//       return {
//         ...state,
//         selectedAttributes: updatedSelectedAttributes,
//       };
//     default:
//       return state;
//   }
// };

// // Create and export the Redux store

// export const setDeveloper = (developer) => ({
//   type: "SET_DEVELOPER",
//   payload: developer,
// });

// const initialStatee = {
//   developer: "",
// };

// const memberreducer = (state = initialStatee, action) => {
//   switch (action.type) {
//     case "SET_DEVELOPER":
//       return {
//         ...state,
//         developer: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   teams: teamsReducer,
//   teamDetails: teamDetailsReducer,
//   teamsUpdateDisplayName: teamsUpdateDisplayNameReducer,
//   addApp: addAppReducer,
//   app: appdetailReducer,
//   products: attributeReducer,
//   // updateAppDetails:updateAppDetails,
//   appDetailsData: appDetailsData,
//   apiProducts: apiProductsReducer,
//   //selectedTeam: selectedTeamReducer,
//   appsData: appsData,
//   memberName: memberreducer,
//   //accessaccessTokenReducer: accessaccessTokenReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(
//   persistedReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk)
//     // other store enhancers if any
//   )
// );
// export const persistor = persistStore(store);

// // export const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// // https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}
// //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}

// //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumer_key}/apiproducts/${apiproduct_name}
// //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}

// //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/{company_name}/apps/{app_name}/keys/{consumer_key}

// //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-evalcompanies/{company_name}/apps/{app_name}/keys/create

// //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/create
// //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}

// //https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups






import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import { composeWithDevTools } from "redux-devtools-extension";
import Cookies from "js-cookie";



// Actions
const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";
const DELETE_TEAM_SUCCESS = "DELETE_TEAM_SUCCESS";

const FETCH_APPS_SUCCESS = "FETCH_APPS_SUCCESS";
const FETCH_APPS_FAILURE = "FETCH_APPS_FAILURE";
const FETCH_APPS_LOADING = "FETCH_APPS_LOADING";
const FETCH_TEAMS_LOADING = "FETCH_TEAMS_LOADING";
const FETCH_TEAMS_ERROR = "FETCH_TEAMS_ERROR";

const UPDATE_TEAM_DISPLAY_NAME_SUCCESS = "UPDATE_TEAM_DISPLAY_NAME_SUCCESS";
const UPDATE_TEAM_DISPLAY_NAME_FAILURE = "UPDATE_TEAM_DISPLAY_NAME_FAILURE";
const ADD_APP_SUCCESS = "ADD_APP_SUCCESS";
const ADD_APP_FAILURE = "ADD_APP_FAILURE";
const UPDATE_APP_DETAILS = "UPDATE_APP_DETAILS";

const FETCH_TEAM_DETAILS_SUCCESS = "FETCH_TEAM_DETAILS_SUCCESS";

const FETCH_APP_DETAILS_SUCCESS = "FETCH_APP_DETAILS_SUCCESS";
const FETCH_APP_DETAILS_FAILURE = "FETCH_APP_DETAILS_FAILURE";

const FETCH_API_PRODUCTS_SUCCESS = "FETCH_API_PRODUCTS_SUCCESS ";
const FETCH_API_PRODUCTS_FAILURE = "FETCH_API_PRODUCTS_FAILURE";
const SELECT_TEAM = "SELECT_TEAM";



 const accessToken = Cookies.get("accessToken");
 console.log("accessToken:", accessToken);


const axiosInstance = axios.create({
  
  baseURL: "https://apigee.googleapis.com/v1/organizations/apt-subset-398000",
 
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});

const teamsUpdateDisplayNameReducer = (state = null, action) => {
  switch (action.type) {
    case UPDATE_TEAM_DISPLAY_NAME_SUCCESS:
      return { ...state, isSuccess: true };
    case UPDATE_TEAM_DISPLAY_NAME_FAILURE:
      return { ...state, isSuccess: false, error: action.payload };
    default:
      return state;
  }
};

const addAppReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_APP_SUCCESS:
      return { ...state, isSuccess: true, app: action.payload };
    case ADD_APP_FAILURE:
      return { ...state, isSuccess: false, error: action.payload };
    default:
      return state;
  }
};



export const fetchTeams = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_TEAMS_LOADING }); // Dispatch loading action
    const response = await axiosInstance.get("/appgroups");
    dispatch({ type: FETCH_TEAMS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching teams:", error);
  }
};

const initialStateTeams = {
  isFetching: false,
  data: [],
  error: null,
};

const teamsReducer = (state = initialStateTeams, action) => {
  switch (action.type) {
    case FETCH_TEAMS_LOADING:
      return { ...state, isFetching: true, error: null };
    case FETCH_TEAMS_SUCCESS:
      return { ...state, isFetching: false, data: action.payload, error: null };
    case FETCH_TEAMS_ERROR:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
};


export const apiProducts = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/apiproducts");
    dispatch({ type: FETCH_API_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching teams:", error);
  }
};
// Reducers
const apiProductsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_API_PRODUCTS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

// Async action to fetch team details
export const fetchTeamDetails = (teamname) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/appgroups/${teamname}`);
    dispatch({ type: FETCH_TEAM_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    if (error.response) {
      console.error("Error fetching team details:", error.response.data);
    } else if (error.request) {
      console.error("Error making the request:", error.request);
    } else {
      console.error("Error:", error.message);
    }
  }
};

const teamDetailsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_TEAM_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};



export const fetchApps = (appgroupname) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_APPS_LOADING });

    const response = await axiosInstance.get(
      `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupname}/apps`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    dispatch({
      type: FETCH_APPS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_APPS_FAILURE, error: "Error fetching app details" });
  }
};


const initialStateApps = { appsData: null, error: null, loading: false };
export const appsData = (state = initialStateApps, action) => {
  switch (action.type) {
    case FETCH_APPS_SUCCESS:
      return {
        ...state,
        appsData: action.payload, // Changed from action.appsData to action.payload
        error: null,
        loading: false,
      };
    case FETCH_APPS_FAILURE:
      return { ...state, appsData: null, error: action.error, loading: false };
    case FETCH_APPS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};





export const fetchAppDetails = (teamName, appName) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(
      `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    dispatch({
      type: FETCH_APP_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_APP_DETAILS_FAILURE,
      error: "Error fetching app details",
    });
  }
};


const initialStateappdetails = { appDetailsData: null, error: null };

export const appDetailsData = (state = initialStateappdetails, action) => {
  switch (action.type) {
    case FETCH_APP_DETAILS_SUCCESS:
      return { ...state, appDetailsData: action.payload, error: null };
    case FETCH_APP_DETAILS_FAILURE:
      return { ...state, appDetailsData: null, error: action.error };
    default:
      return state;
  }
};


// Action Creators
const updateTeamDisplayNameSuccess = () => ({
  type: UPDATE_TEAM_DISPLAY_NAME_SUCCESS,
});

const updateTeamDisplayNameFailure = (errorMessage) => ({
  type: UPDATE_TEAM_DISPLAY_NAME_FAILURE,
  payload: errorMessage,
});

export const updateTeamDisplayName =
  (teamName, displayName, attributes) => (dispatch) => {
    const apiEndpoint = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}`;
    const updatedCompanyData = {
      displayName: displayName,
      attributes: attributes,
    };

    const accessToken = accessToken; // Make sure you have your accessToken properly configured.
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios
      .put(apiEndpoint, updatedCompanyData, config)
      .then((response) => {
        dispatch(updateTeamDisplayNameSuccess());
      })
      .catch((error) => {
        dispatch(updateTeamDisplayNameFailure("Error updating company name."));
        console.error(error);
      });
  };

const addAppSuccess = (app) => ({
  type: ADD_APP_SUCCESS,
  payload: app,
});

const addAppFailure = (error) => ({
  type: ADD_APP_FAILURE,
  payload: error,
});

export const addApp = (teamName, appData) => {
  return async (dispatch) => {
    try {
      const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps`;
      const accessToken = accessToken;
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(apiUrl, appData, axiosConfig);
      dispatch(addAppSuccess(response.data));
    } catch (error) {
      dispatch(addAppFailure(error));
    }
  };
};

// Action to delete a team
export const deleteTeamSuccess = (appGroupName) => ({
  type: DELETE_TEAM_SUCCESS,
  payload: appGroupName,
});

export const deleteTeam = (appGroupName) => {
  return (dispatch) => {
    const apiBaseUrl =
      "https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups";
    const accessToken = Cookies.get("accessToken"); // Use the imported Cookies to get the accessToken

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const apiUrl = `${apiBaseUrl}/${appGroupName}`;

    axios
      .delete(apiUrl, axiosConfig)
      .then((response) => {
        dispatch(deleteTeamSuccess(appGroupName));
      })
      .catch((error) => {
        console.error("Error deleting team:", error);
      });
  };
};



// Assuming you have set up the action types, import them here
// const UPDATE_APP_DETAILS = 'UPDATE_APP_DETAILS';

// Action creator to update app details
export const updateAppDetails = (appDetails) => {
  return {
    type: UPDATE_APP_DETAILS,
    payload: appDetails,
  };
};
const initialState = {
  selectedAttributes: [],
  appDetails: null,
};

export const appdetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_APP_DETAILS:
      return {
        ...state,
        appDetails: action.payload,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
};

export const DELETE_TEAM_APP_SUCCESS = "DELETE_TEAM_SUCCESS";

export const deleteTeamAppSuccess = (teamName, appName) => ({
  type: DELETE_TEAM_APP_SUCCESS,
  payload: { teamName, appName },
});

export const deleteTeamApp = (teamName, appName) => {
  return (dispatch) => {
    const apiBaseUrl =
      "https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups";
    const accessToken = Cookies.get("accessToken"); // Use the imported Cookies to get the accessToken

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const apiUrl = `${apiBaseUrl}/${teamName}/apps/${appName}`;

    axios
      .delete(apiUrl, axiosConfig)
      .then((response) => {
        dispatch(deleteTeamAppSuccess(teamName, appName));
      })
      .catch((error) => {
        console.error("Error deleting team:", error);
        // Handle the error appropriately (e.g., dispatch an error action)
      });
  };
};






// Action types
const UPDATE_SELECTED_ATTRIBUTES = "UPDATE_SELECTED_ATTRIBUTES";

// Action creators
export const updateSelectedAttributes = (attribute) => ({
  type: UPDATE_SELECTED_ATTRIBUTES,
  payload: attribute,
});

// Reducer
const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_ATTRIBUTES:
      // Check if the attribute is already selected, if not add it, otherwise remove it
      const updatedSelectedAttributes = state.selectedAttributes.includes(
        action.payload
      )
        ? state.selectedAttributes.filter((attr) => attr !== action.payload)
        : [...state.selectedAttributes, action.payload];

      return {
        ...state,
        selectedAttributes: updatedSelectedAttributes,
      };
    default:
      return state;
  }
};

// Create and export the Redux store

export const setDeveloper = (developer) => ({
  type: "SET_DEVELOPER",
  payload: developer,
});

const initialStatee = {
  developer: "",
};

const memberreducer = (state = initialStatee, action) => {
  switch (action.type) {
    case "SET_DEVELOPER":
      return {
        ...state,
        developer: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  teams: teamsReducer,
  teamDetails: teamDetailsReducer,
  teamsUpdateDisplayName: teamsUpdateDisplayNameReducer,
  addApp: addAppReducer,
  app: appdetailReducer,
  products: attributeReducer,
  // updateAppDetails:updateAppDetails,
  appDetailsData: appDetailsData,
  apiProducts: apiProductsReducer,
  //selectedTeam: selectedTeamReducer,
  appsData: appsData,
  memberName: memberreducer,
 
  //authReducer: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
export const persistor = persistStore(store);

// export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}
//https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}

//https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumer_key}/apiproducts/${apiproduct_name}
//https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}

//https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/{company_name}/apps/{app_name}/keys/{consumer_key}

//https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-evalcompanies/{company_name}/apps/{app_name}/keys/create

//https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/create
//https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}

//https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups