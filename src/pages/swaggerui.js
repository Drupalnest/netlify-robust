// import React, { useEffect } from "react";
// import SwaggerUIReact from "swagger-ui-react";
// //import 'swagger-ui-react/swagger-ui.css'; // CSS for swagger-ui-react

// const SwaggerPage = () => {
//   // useEffect(() => {
//   //   const ui = SwaggerUI({
//   //     url: "https://petstore.swagger.io/v2/swagger.json",
//   //     dom_id: '#swagger-ui',
//   //     deepLinking: true,
//   //   });
//   // }, []);

//   // useEffect(() => {
//   //   const script = document.createElement('script');
//   //   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.1/swagger-ui.js';
//   //   script.async = true;

//   //   script.onload = () => {
//   //     const ui = window.SwaggerUI({
//   //       url: "https://petstore.swagger.io/v2/swagger.json",
//   //       dom_id: '#swagger-ui',
//   //       deepLinking: true,
//   //     });
//   //   };

//   //   document.head.appendChild(script);

//   //   return () => {
//   //     document.head.removeChild(script);
//   //   };
//   // }, []);

//   return (
//     <div>
//       <div id="swagger-ui"></div>
//       <SwaggerUIReact url="https://petstore.swagger.io/v2/swagger.json" />

//     </div>
//   );
// };

// export default SwaggerPage;

// import React, { Component } from "react";
// import SwaggerEditor, { plugins } from "swagger-editor";
// import "swagger-editor/dist/swagger-editor.css";
// import "./swagger.css";
// //import Button from '@material-ui/core/Button';

// class SwaggerEditorComponent extends Component {
//   componentDidMount() {
//     this.initSwaggerEditor();
//   }

//   initSwaggerEditor = () => {
//     window.editor = SwaggerEditor({
//       dom_id: "#swagger-editor",
//       layout: "EditorLayout",
//       plugins: Object.values(plugins),
//       swagger2GeneratorUrl: "https://generator.swagger.io/api/swagger.json",
//       oas3GeneratorUrl: "https://generator3.swagger.io/openapi.json",
//       swagger2ConverterUrl: "https://converter.swagger.io/api/convert",
//     });
//   };

//   logContent = () => {
//     const content = window.localStorage.getItem("swagger-editor-content");
//     console.log(content);
//   };

//   render() {
//     return (
//       <div>
//         <button variant="contained" color="primary" onClick={this.logContent}>
//           Save Content
//         </button>
//         <div id="swagger-editor"></div>
//       </div>
//     );
//   }
// }

// export default SwaggerEditorComponent;

// import React from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
//import Header from "../components/Header/Header";

// const SwaggerExample = () => {
//   return (
//     <div>
//<Header/>
//       <SwaggerUI url={"https://petstore.swagger.io/v2/swagger.json"} />
//     </div>
//   );
// };

// export default SwaggerExample;

// import React from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
// import "./swagger.css";
// import logo from '../images/logo-main.png'
// import Header from "../components/Header/Header";

// function SwaggerExample() {
//   return (
//     <div>

//     <Header/>
//     <div id="App" >
//       {/* <div id="logo" style={{marginTop:"130px"}}>
//         <a href="https://robustapihub.io/">
//           <img src={logo} alt="Robust Api" />
//         </a>
//       </div> */}
//       <div>
//       <SwaggerUI url={"https://petstore.swagger.io/v2/swagger.json"} />
//       </div>
//     </div>
//     </div>
//   );
// }

// export default SwaggerExample;

// import React from 'react';
// import SwaggerUI from 'swagger-ui-react';
// import 'swagger-ui-react/swagger-ui.css';

// const SwaggerComponent = () => {
//   return <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />;
// };

// export default SwaggerComponent;

// import React from 'react';

// const SwaggerEditor = () => {
//   return (
//     <iframe
//       src={`node_modules/swagger-editor-dist/index.html?url=${window.location.href}/swagger.json`}
//       title="Swagger Editor"
//       frameBorder="0"
//       style={{ width: '100%', height: '100vh' }}
//     />
//   );
// };

// export default SwaggerEditor;

// import React from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
// import Header from "../components/Header/Header";
// import openapiOn from "./openapi_On.yaml";
// import openapiJson from "./openapi.json";

// const SwaggerComponent = () => {
//   console.log("openAi", openapiOn);
//   console.log("openAiTodo", openapiJson);

//   const apiSpec = {
//     openapi: "3.0.0",
//     info: {
//       title: "Robust API - OpenAPI 3.0",
//       // description:
//       //   "This is a sample Robust API Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!\nYou can now help us improve the API whether it's by making changes to the definition itself or to the code.\nThat way, with time, we can improve the API in general, and expose some of the new features in OAS3.\n\n_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_\n\nSome useful links:\n- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
//       // termsOfService: "http://swagger.io/terms/",
//      // contact: {
//       //  email: "apiteam@swagger.io",
//       //},
//       license: {
//         name: "Apache 2.0",
//         url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//       },
//       version: "1.0.11",
//     },
//     externalDocs: {
//       description: "Find out more about Swagger",
//       url: "http://swagger.io",
//     },
//     servers: [
//       {
//         url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//       },
//     ],
//     tags: [
//       {
//         name: "Apigee",
//         description: "the Apigee Management API",
//         externalDocs: {
//           description: "Find out more",
//           url: "http://swagger.io",
//         },
//       },
//       // {
//       //   name: "appgroups",
//       //   description: "Access to appgroups",
//       //   externalDocs: {
//       //     description: "Find out more about our store",
//       //     url: "http://swagger.io",
//       //   },
//       // },
//       // {
//       //   name: "user",
//       //   description: "Operations about user",
//       // },
//     ],

//     paths: {

//       // "/pets": {
//       //   put: {
//       //     tags: ["pet"],
//       //     summary: "Update an existing pet",
//       //     description: "Update an existing pet by Id",
//       //     operationId: "updatePet",
//       //     requestBody: {
//       //       description: "Update an existent pet in the store",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Pet",
//       //           },
//       //         },
//       //         "application/xml": {
//       //           schema: {
//       //             $ref: "#/components/schemas/jytyftr",
//       //           },
//       //         },
//       //         "application/x-www-form-urlencoded": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Pet",
//       //           },
//       //         },
//       //       },
//       //       required: true,
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "Successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Pet",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Pet",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid ID supplied",
//       //       },
//       //       404: {
//       //         description: "Pet not found",
//       //       },
//       //       405: {
//       //         description: "Validation exception",
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         petstore_auth: ["write:pets", "read:pets"],
//       //       },
//       //     ],
//       //   },

//       //   post: {
//       //     tags: ["pet"],
//       //     summary: "Add a new pet to the store",
//       //     description: "Add a new pet to the store",
//       //     operationId: "addPet",
//       //     requestBody: {
//       //       description: "Create a new pet in the store",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Pet",
//       //           },
//       //         },
//       //         "application/xml": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Pet",
//       //           },
//       //         },
//       //         "application/x-www-form-urlencoded": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Pet",
//       //           },
//       //         },
//       //       },
//       //       required: true,
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "Successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Pet",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Pet",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       405: {
//       //         description: "Invalid input",
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         petstore_auth: ["write:pets", "read:pets"],
//       //       },
//       //     ],
//       //   },
//       // },
//       // "/pet/findByStatus": {
//       //   get: {
//       //     tags: ["pet"],
//       //     summary: "Finds Pets by status",
//       //     description:
//       //       "Multiple status values can be provided with comma separated strings",
//       //     operationId: "findPetsByStatus",
//       //     parameters: [
//       //       {
//       //         name: "status",
//       //         in: "query",
//       //         description:
//       //           "Status values that need to be considered for filter",
//       //         required: false,
//       //         explode: true,
//       //         schema: {
//       //           type: "string",
//       //           default: "available",
//       //           enum: ["available", "pending", "sold"],
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "array",
//       //               items: {
//       //                 $ref: "#/components/schemas/Pet",
//       //               },
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               type: "array",
//       //               items: {
//       //                 $ref: "#/components/schemas/Pet",
//       //               },
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid status value",
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         petstore_auth: ["write:pets", "read:pets"],
//       //       },
//       //     ],
//       //   },
//       // },
//       // "/pet/findByTags": {
//       //   get: {
//       //     tags: ["pet"],
//       //     summary: "Finds Pets by tags",
//       //     description:
//       //       "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
//       //     operationId: "findPetsByTags",
//       //     parameters: [
//       //       {
//       //         name: "tags",
//       //         in: "query",
//       //         description: "Tags to filter by",
//       //         required: false,
//       //         explode: true,
//       //         schema: {
//       //           type: "array",
//       //           items: {
//       //             type: "string",
//       //           },
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "array",
//       //               items: {
//       //                 $ref: "#/components/schemas/Pet",
//       //               },
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               type: "array",
//       //               items: {
//       //                 $ref: "#/components/schemas/Pet",
//       //               },
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid tag value",
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         petstore_auth: ["write:pets", "read:pets"],
//       //       },
//       //     ],
//       //   },
//       // },
//       // "/pet/{petId}": {
//       //   get: {
//       //     tags: ["pet"],
//       //     summary: "Find pet by ID",
//       //     description: "Returns a single pet",
//       //     operationId: "getPetById",
//       //     parameters: [
//       //       {
//       //         name: "petId",
//       //         in: "path",
//       //         description: "ID of pet to return",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //           format: "int64",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Pet",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Pet",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid ID supplied",
//       //       },
//       //       404: {
//       //         description: "Pet not found",
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         api_key: [],
//       //       },
//       //       {
//       //         petstore_auth: ["write:pets", "read:pets"],
//       //       },
//       //     ],
//       //   },
//       //   post: {
//       //     tags: ["pet"],
//       //     summary: "Updates a pet in the store with form data",
//       //     description: "",
//       //     operationId: "updatePetWithForm",
//       //     parameters: [
//       //       {
//       //         name: "petId",
//       //         in: "path",
//       //         description: "ID of pet that needs to be updated",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //           format: "int64",
//       //         },
//       //       },
//       //       {
//       //         name: "name",
//       //         in: "query",
//       //         description: "Name of pet that needs to be updated",
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //       {
//       //         name: "status",
//       //         in: "query",
//       //         description: "Status of pet that needs to be updated",
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       405: {
//       //         description: "Invalid input",
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         petstore_auth: ["write:pets", "read:pets"],
//       //       },
//       //     ],
//       //   },
//       //   delete: {
//       //     tags: ["pet"],
//       //     summary: "Deletes a pet",
//       //     description: "delete a pet",
//       //     operationId: "deletePet",
//       //     parameters: [
//       //       {
//       //         name: "api_key",
//       //         in: "header",
//       //         description: "",
//       //         required: false,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //       {
//       //         name: "petId",
//       //         in: "path",
//       //         description: "Pet id to delete",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //           format: "int64",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       400: {
//       //         description: "Invalid pet value",
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         petstore_auth: ["write:pets", "read:pets"],
//       //       },
//       //     ],
//       //   },
//       // },

//       // "/pet/{petId}/uploadImage": {
//       //   post: {
//       //     tags: ["pet"],
//       //     summary: "uploads an image",
//       //     description: "",
//       //     operationId: "uploadFile",
//       //     parameters: [
//       //       {
//       //         name: "petId",
//       //         in: "path",
//       //         description: "ID of pet to update",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //           format: "int64",
//       //         },
//       //       },
//       //       {
//       //         name: "additionalMetadata",
//       //         in: "query",
//       //         description: "Additional Metadata",
//       //         required: false,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     requestBody: {
//       //       content: {
//       //         "application/octet-stream": {
//       //           schema: {
//       //             type: "string",
//       //             format: "binary",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/ApiResponse",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         petstore_auth: ["write:pets", "read:pets"],
//       //       },
//       //     ],
//       //   },
//       // },
//       // "/store/inventory": {
//       //   get: {
//       //     tags: ["store"],
//       //     summary: "Returns pet inventories by status",
//       //     description: "Returns a map of status codes to quantities",
//       //     operationId: "getInventory",
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "object",
//       //               additionalProperties: {
//       //                 type: "integer",
//       //                 format: "int32",
//       //               },
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         api_key: [],
//       //       },
//       //     ],
//       //   },
//       // },
//       // "/store/order": {
//       //   post: {
//       //     tags: ["store"],
//       //     summary: "Place an order for a pet",
//       //     description: "Place a new order in the store",
//       //     operationId: "placeOrder",
//       //     requestBody: {
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/dfdggtrgert",
//       //           },
//       //         },
//       //         "application/xml": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Order",
//       //           },
//       //         },
//       //         "application/x-www-form-urlencoded": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Order",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Order",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       405: {
//       //         description: "Invalid input",
//       //       },
//       //     },
//       //   },
//       // },
//       // "/store/order/{orderId}": {
//       //   get: {
//       //     tags: ["store"],
//       //     summary: "Find purchase order by ID",
//       //     description:
//       //       "For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.",
//       //     operationId: "getOrderById",
//       //     parameters: [
//       //       {
//       //         name: "orderId",
//       //         in: "path",
//       //         description: "ID of order that needs to be fetched",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //           format: "int64",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Order",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Order",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid ID supplied",
//       //       },
//       //       404: {
//       //         description: "Order not found",
//       //       },
//       //     },
//       //   },
//       //   delete: {
//       //     tags: ["store"],
//       //     summary: "Delete purchase order by ID",
//       //     description:
//       //       "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
//       //     operationId: "deleteOrder",
//       //     parameters: [
//       //       {
//       //         name: "orderId",
//       //         in: "path",
//       //         description: "ID of the order that needs to be deleted",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //           format: "int64",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       400: {
//       //         description: "Invalid ID supplied",
//       //       },
//       //       404: {
//       //         description: "Order not found",
//       //       },
//       //     },
//       //   },
//       // },

//       // "/user": {
//       //   post: {
//       //     tags: ["user"],
//       //     summary: "Create user",
//       //     description: "This can only be done by the logged in user.",
//       //     operationId: "createUser",
//       //     requestBody: {
//       //       description: "Created user object",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //         "application/xml": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //         "application/x-www-form-urlencoded": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       default: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       // },
//       // "/user/createWithList": {
//       //   post: {
//       //     tags: ["user"],
//       //     summary: "Creates list of users with given input array",
//       //     description: "Creates list of users with given input array",
//       //     operationId: "createUsersWithListInput",
//       //     requestBody: {
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             type: "array",
//       //             items: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "Successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       default: {
//       //         description: "successful operation",
//       //       },
//       //     },
//       //   },
//       // },
//       // "/user/login": {
//       //   get: {
//       //     tags: ["user"],
//       //     summary: "Logs user into the system",
//       //     description: "",
//       //     operationId: "loginUser",
//       //     parameters: [
//       //       {
//       //         name: "username",
//       //         in: "query",
//       //         description: "The user name for login",
//       //         required: false,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //       {
//       //         name: "password",
//       //         in: "query",
//       //         description: "The password for login in clear text",
//       //         required: false,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         headers: {
//       //           "X-Rate-Limit": {
//       //             description: "calls per hour allowed by the user",
//       //             schema: {
//       //               type: "integer",
//       //               format: "int32",
//       //             },
//       //           },
//       //           "X-Expires-After": {
//       //             description: "date in UTC when token expires",
//       //             schema: {
//       //               type: "string",
//       //               format: "date-time",
//       //             },
//       //           },
//       //         },
//       //         content: {
//       //           "application/xml": {
//       //             schema: {
//       //               type: "string",
//       //             },
//       //           },
//       //           "application/json": {
//       //             schema: {
//       //               type: "string",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid username/password supplied",
//       //       },
//       //     },
//       //   },
//       // },
//       // "/user/logout": {
//       //   get: {
//       //     tags: ["user"],
//       //     summary: "Logs out current logged in user session",
//       //     description: "",
//       //     operationId: "logoutUser",
//       //     parameters: [],
//       //     responses: {
//       //       default: {
//       //         description: "successful operation",
//       //       },
//       //     },
//       //   },
//       // },
//       // "/user/{username}": {
//       //   get: {
//       //     tags: ["user"],
//       //     summary: "Get user by user name",
//       //     description: "",
//       //     operationId: "getUserByName",
//       //     parameters: [
//       //       {
//       //         name: "username",
//       //         in: "path",
//       //         description:
//       //           "The name that needs to be fetched. Use user1 for testing. ",
//       //         required: true,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid username supplied",
//       //       },
//       //       404: {
//       //         description: "User not found",
//       //       },
//       //     },
//       //   },
//       //   put: {
//       //     tags: ["user"],
//       //     summary: "Update user",
//       //     description: "This can only be done by the logged in user.",
//       //     operationId: "updateUser",
//       //     parameters: [
//       //       {
//       //         name: "username",
//       //         in: "path",
//       //         description: "name that need to be deleted",
//       //         required: true,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     requestBody: {
//       //       description: "Update an existent user in the store",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //         "application/xml": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //         "application/x-www-form-urlencoded": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       default: {
//       //         description: "successful operation",
//       //       },
//       //     },
//       //   },
//       //   delete: {
//       //     tags: ["user"],
//       //     summary: "Delete user",
//       //     description: "This can only be done by the logged in user.",
//       //     operationId: "deleteUser",
//       //     parameters: [
//       //       {
//       //         name: "username",
//       //         in: "path",
//       //         description: "The name that needs to be deleted",
//       //         required: true,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       400: {
//       //         description: "Invalid username supplied",
//       //       },
//       //       404: {
//       //         description: "User not found",
//       //       },
//       //     },
//       //   },
//       // },

//     },

//     components: {
//       schemas: {
//         Order: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//               format: "int64",
//               example: 10,
//             },
//             petId: {
//               type: "integer",
//               format: "int64",
//               example: 198772,
//             },
//             quantity: {
//               type: "integer",
//               format: "int32",
//               example: 7,
//             },
//             shipDate: {
//               type: "string",
//               format: "date-time",
//             },
//             status: {
//               type: "string",
//               description: "Order Status",
//               example: "approved",
//               enum: ["placed", "approved", "delivered"],
//             },
//             complete: {
//               type: "boolean",
//             },
//           },
//           xml: {
//             name: "order",
//           },
//         },
//         // Customer: {
//         //   type: "object",
//         //   properties: {
//         //     id: {
//         //       type: "integer",
//         //       format: "int64",
//         //       example: 100000,
//         //     },
//         //     username: {
//         //       type: "string",
//         //       example: "fehguy",
//         //     },
//         //     address: {
//         //       type: "array",
//         //       xml: {
//         //         name: "addresses",
//         //         wrapped: true,
//         //       },
//         //       items: {
//         //         $ref: "#/components/schemas/Address",
//         //       },
//         //     },
//         //   },
//         //   xml: {
//         //     name: "customer",
//         //   },
//         // },
//         // Address: {
//         //   type: "object",
//         //   properties: {
//         //     street: {
//         //       type: "string",
//         //       example: "437 Lytton",
//         //     },
//         //     city: {
//         //       type: "string",
//         //       example: "Palo Alto",
//         //     },
//         //     state: {
//         //       type: "string",
//         //       example: "CA",
//         //     },
//         //     zip: {
//         //       type: "string",
//         //       example: "94301",
//         //     },
//         //   },
//         //   xml: {
//         //     name: "address",
//         //   },
//         // },
//         // Category: {
//         //   type: "object",
//         //   properties: {
//         //     id: {
//         //       type: "integer",
//         //       format: "int64",
//         //       example: 1,
//         //     },
//         //     name: {
//         //       type: "string",
//         //       example: "Dogs",
//         //     },
//         //   },
//         //   xml: {
//         //     name: "category",
//         //   },
//         // },
//         // User: {
//         //   type: "object",
//         //   properties: {
//         //     id: {
//         //       type: "integer",
//         //       format: "int64",
//         //       example: 10,
//         //     },
//         //     username: {
//         //       type: "string",
//         //       example: "theUser",
//         //     },
//         //     firstName: {
//         //       type: "string",
//         //       example: "John",
//         //     },
//         //     lastName: {
//         //       type: "string",
//         //       example: "James",
//         //     },
//         //     email: {
//         //       type: "string",
//         //       example: "john@email.com",
//         //     },
//         //     password: {
//         //       type: "string",
//         //       example: "12345",
//         //     },
//         //     phone: {
//         //       type: "string",
//         //       example: "12345",
//         //     },
//         //     userStatus: {
//         //       type: "integer",
//         //       description: "User Status",
//         //       format: "int32",
//         //       example: 1,
//         //     },
//         //   },
//         //   xml: {
//         //     name: "user",
//         //   },
//         // },
//         // Tag: {
//         //   type: "object",
//         //   properties: {
//         //     id: {
//         //       type: "integer",
//         //       format: "int64",
//         //     },
//         //     name: {
//         //       type: "string",
//         //     },
//         //   },
//         //   xml: {
//         //     name: "tag",
//         //   },
//         // },
//         // Pet: {
//         //   required: ["name", "photoUrls"],
//         //   type: "object",
//         //   properties: {
//         //     id: {
//         //       type: "integer",
//         //       format: "int64",
//         //       example: 10,
//         //     },
//         //     name: {
//         //       type: "string",
//         //       example: "doggie",
//         //     },
//         //     category: {
//         //       $ref: "#/components/schemas/Category",
//         //     },
//         //     photoUrls: {
//         //       type: "array",
//         //       xml: {
//         //         wrapped: true,
//         //       },
//         //       items: {
//         //         type: "string",
//         //         xml: {
//         //           name: "photoUrl",
//         //         },
//         //       },
//         //     },
//         //     tags: {
//         //       type: "array",
//         //       xml: {
//         //         wrapped: true,
//         //       },
//         //       items: {
//         //         $ref: "#/components/schemas/Tag",
//         //       },
//         //     },
//         //     status: {
//         //       type: "string",
//         //       description: "pet status in the store",
//         //       enum: ["available", "pending", "sold"],
//         //     },
//         //   },
//         //   xml: {
//         //     name: "pet",
//         //   },
//         // },
//         // ApiResponse: {
//         //   type: "object",
//         //   properties: {
//         //     code: {
//         //       type: "integer",
//         //       format: "int32",
//         //     },
//         //     type: {
//         //       type: "string",
//         //     },
//         //     message: {
//         //       type: "string",
//         //     },
//         //   },
//         //   xml: {
//         //     name: "##default",
//         //   },
//         // },
//       },
//       requestBodies: {
//         Pet: {
//           description: "Pet object that needs to be added to the store",
//           content: {
//             "application/json": {
//               schema: {
//                 $ref: "#/components/schemas/Pet",
//               },
//             },
//             "application/xml": {
//               schema: {
//                 $ref: "#/components/schemas/Pet",
//               },
//             },
//           },
//         },
//         UserArray: {
//           description: "List of user object",
//           content: {
//             "application/json": {
//               schema: {
//                 type: "array",
//                 items: {
//                   $ref: "#/components/schemas/User",
//                 },
//               },
//             },
//           },
//         },
//       },
//       securitySchemes: {
//         petstore_auth: {
//           type: "oauth2",
//           flows: {
//             implicit: {
//               authorizationUrl: "https://petstore3.swagger.io/oauth/authorize",
//               scopes: {
//                 "write:pets": "modify pets in your account",
//                 "read:pets": "read your pets",
//               },
//             },
//           },
//         },
//         api_key: {
//           type: "apiKey",
//           name: "api_key",
//           in: "header",
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ marginTop: "150px" }}>
//         <SwaggerUI spec={apiSpec} />
//       </div>
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
// import Header from "../components/Header/Header";
// import openapiOn from "./openapi_On.yaml";
// import openapiJson from "./openapi.json";

// const SwaggerComponent = () => {
//   console.log("openAi", openapiOn);
//   console.log("openAiTodo", openapiJson);

//   const apiSpec = {
//     openapi: "3.0.0",
//     info: {
//       title: "Robust API - OpenAPI 3.0",

//       license: {
//         name: "Apache 2.0",
//         url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//       },
//       version: "1.0.11",
//     },
//     externalDocs: {
//       description: "Find out more about Swagger",
//       url: "http://swagger.io",
//     },
//     servers: [
//       {
//         url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//       },
//     ],
//     tags: [
//       {
//         name: "Apigee",
//         description: "the Apigee Management API",
//         externalDocs: {
//           description: "Find out more",
//           url: "http://swagger.io",
//         },
//       },
//     ],

//     paths: {},

//     components: {
//       schemas: {
//         Order: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//               format: "int64",
//               example: 10,
//             },
//             petId: {
//               type: "integer",
//               format: "int64",
//               example: 198772,
//             },
//             quantity: {
//               type: "integer",
//               format: "int32",
//               example: 7,
//             },
//             shipDate: {
//               type: "string",
//               format: "date-time",
//             },
//             status: {
//               type: "string",
//               description: "Order Status",
//               example: "approved",
//               enum: ["placed", "approved", "delivered"],
//             },
//             complete: {
//               type: "boolean",
//             },
//           },
//           xml: {
//             name: "order",
//           },
//         },
//       },
//       requestBodies: {
//         Pet: {
//           description: "Pet object that needs to be added to the store",
//           content: {
//             "application/json": {
//               schema: {
//                 $ref: "#/components/schemas/Pet",
//               },
//             },
//             "application/xml": {
//               schema: {
//                 $ref: "#/components/schemas/Pet",
//               },
//             },
//           },
//         },
//         UserArray: {
//           description: "List of user object",
//           content: {
//             "application/json": {
//               schema: {
//                 type: "array",
//                 items: {
//                   $ref: "#/components/schemas/User",
//                 },
//               },
//             },
//           },
//         },
//       },
//       securitySchemes: {
//         petstore_auth: {
//           type: "oauth2",
//           flows: {
//             implicit: {
//               authorizationUrl: "https://petstore3.swagger.io/oauth/authorize",
//               scopes: {
//                 "write:pets": "modify pets in your account",
//                 "read:pets": "read your pets",
//               },
//             },
//           },
//         },
//         api_key: {
//           type: "apiKey",
//           name: "api_key",
//           in: "header",
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ marginTop: "150px" }}>
//         <SwaggerUI spec={apiSpec} />
//       </div>
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
// import Header from "../components/Header/Header";
// import openapiOn from "./openapi_On.yaml";
// import openapiJson from "./openapi.json";

// const SwaggerComponent = () => {
//   console.log("openAi", openapiOn);
//   console.log("openAiTodo", openapiJson);

//   const apiSpec = {
//     openapi: "3.0.0",
//     info: {
//       title: "Robust API - OpenAPI 3.0",

//       license: {
//         name: "Apache 2.0",
//         url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//       },
//       version: "1.0.11",
//     },
//     externalDocs: {
//       description: "Find out more about Swagger",
//       url: "http://swagger.io",
//     },
//     servers: [
//       {
//         url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//       },
//     ],
//     tags: [
//       {
//         name: "Apigee",
//         description: "the Apigee Management API",
//         externalDocs: {
//           description: "Find out more",
//           url: "http://swagger.io",
//         },
//       },
//     ],

//     paths: {
//       "/appgroups": {
//         get: {
//           summary: "Get a list of app groups",
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object", // Define the response schema
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           summary: "Create a new app group",
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup", // Reference to the request body schema
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object", // Define the response schema
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           summary: "Update an existing app group",
//           parameters: [
//             {
//               name: "id",
//               in: "path",
//               description: "ID of the app group to update",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup", // Reference to the request body schema
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object", // Define the response schema
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           summary: "Delete an app group",
//           parameters: [
//             {
//               name: "id",
//               in: "path",
//               description: "ID of the app group to delete",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },
//     },

//     components: {
//       schemas: {
//         Order: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//               format: "int64",
//               example: 10,
//             },
//             petId: {
//               type: "integer",
//               format: "int64",
//               example: 198772,
//             },
//             quantity: {
//               type: "integer",
//               format: "int32",
//               example: 7,
//             },
//             shipDate: {
//               type: "string",
//               format: "date-time",
//             },
//             status: {
//               type: "string",
//               description: "Order Status",
//               example: "approved",
//               enum: ["placed", "approved", "delivered"],
//             },
//             complete: {
//               type: "boolean",
//             },
//           },
//           xml: {
//             name: "order",
//           },
//         },
//       },
//       requestBodies: {
//         Pet: {
//           description: "Pet object that needs to be added to the store",
//           content: {
//             "application/json": {
//               schema: {
//                 $ref: "#/components/schemas/Pet",
//               },
//             },
//             "application/xml": {
//               schema: {
//                 $ref: "#/components/schemas/Pet",
//               },
//             },
//           },
//         },
//         UserArray: {
//           description: "List of user object",
//           content: {
//             "application/json": {
//               schema: {
//                 type: "array",
//                 items: {
//                   $ref: "#/components/schemas/User",
//                 },
//               },
//             },
//           },
//         },
//       },
//       securitySchemes: {
//         petstore_auth: {
//           type: "oauth2",
//           flows: {
//             implicit: {
//               authorizationUrl: "https://petstore3.swagger.io/oauth/authorize",
//               scopes: {
//                 "write:pets": "modify pets in your account",
//                 "read:pets": "read your pets",
//               },
//             },
//           },
//         },
//         api_key: {
//           type: "apiKey",
//           name: "api_key",
//           in: "header",
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ marginTop: "150px" }}>
//         <SwaggerUI spec={apiSpec} />
//       </div>
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
// import Header from "../components/Header/Header";

// const SwaggerComponent = () => {
//   const apiSpec = {
//     openapi: "3.0.0", // Specify the OpenAPI version here
//     info: {
//       title: "Robust API - OpenAPI 3.0",
//       license: {
//         name: "Apache 2.0",
//         url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//       },
//       version: "1.0.11",
//     },
//     tags: [
//       {
//         name: "Apigee",
//         description: "the Apigee Management API",
//         externalDocs: {
//           description: "Find out more",
//           url: "http://swagger.io",
//         },
//       },
//     ],
//     paths: {
//       "/appgroups": {
//         get: {
//           summary: "Get a list of app groups",
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           summary: "Create a new app group",
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           summary: "Update an existing app group",
//           parameters: [
//             {
//               name: "id",
//               in: "path",
//               description: "ID of the app group to update",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           summary: "Delete an app group",
//           parameters: [
//             {
//               name: "id",
//               in: "path",
//               description: "ID of the app group to delete",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },
//       // "/apiproducts": {
//       //   get: {
//       //     summary: "Get a list of API products",
//       //     responses: {
//       //       200: {
//       //         description: "Successful response",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "object",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   post: {
//       //     summary: "Create a new API product",
//       //     requestBody: {
//       //       description: "API product object",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/APIProduct",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       201: {
//       //         description: "Successful response",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "object",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   put: {
//       //     summary: "Update an existing API product",
//       //     parameters: [
//       //       {
//       //         name: "id",
//       //         in: "path",
//       //         description: "ID of the API product to update",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //         },
//       //       },
//       //     ],
//       //     requestBody: {
//       //       description: "Updated API product object",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/APIProduct",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "Successful response",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "object",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   delete: {
//       //     summary: "Delete an API product",
//       //     parameters: [
//       //       {
//       //         name: "id",
//       //         in: "path",
//       //         description: "ID of the API product to delete",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       204: {
//       //         description: "Successful response",
//       //       },
//       //     },
//       //   },
//       // },
//     },
//     components: {
//       schemas: {
//         AppGroup: {
//           type: "object",
//           properties: {
//             name: { type: "string" },
//             displayName: { type: "string" },
//             status: { type: "string" },
//             attributes: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   name: { type: "string" },
//                   value: { type: "string" },
//                 },
//               },
//             },
//             createdAt: { type: "string" },
//             lastModifiedAt: { type: "string" },
//           },
//         },
//         APIProduct: {
//           type: "object",
//           properties: {
//             // Define properties of APIProduct
//           },
//         },
//       },
//     },

//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ marginTop: "150px" }}>
//         <SwaggerUI spec={apiSpec} />
//       </div>
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React, { useState, useEffect } from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
// import Header from "../components/Header/Header";

// const SwaggerComponent = () => {
//   const [token, setToken] = useState(""); // State to hold the bearer token

//   useEffect(() => {
//     // Assuming you have a function to retrieve the bearer token
//     const fetchToken = async () => {
//       try {
//         const response = await fetch(
//           "https://robustapihub.netlify.app/.netlify/functions/a",
//           {
//             method: "POST",
//             // Add any required headers for retrieving the token
//           }
//         );
//         const data = await response.json();
//         setToken(data.access_token);
//       } catch (error) {
//         console.error("Error fetching token:", error);
//       }
//     };

//     fetchToken();
//   }, []);

//   const apiSpec = {
//     // ... (previous code remains the same)
//     paths: {
//       "/appgroups": {
//         get: {
//           summary: "Get a list of app groups",
//           parameters: [
//             {
//               name: "filter", // Name of the parameter
//               in: "query", // Location of the parameter (query, path, header, etc.)
//               description: "Filter app groups by a specific criterion", // Description of the parameter
//               required: false, // Set to true if this parameter is required
//               schema: {
//                 type: "string", // Type of the parameter (string, integer, etc.)
//               },
//             },
//           ],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                     properties: {
//                       // Define properties of the response object
//                       // For example:
//                       name: { type: "string" },
//                       id: { type: "integer" },
//                       // Add more properties as needed
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//         // ... (other methods remain the same)
//       },
//       // ... (other paths remain the same)
//     },
//     // ... (rest of the code remains the same)
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ marginTop: "150px" }}>
//         <SwaggerUI
//           spec={apiSpec}
//           requestInterceptor={(req) => {
//             // Add authorization header with the bearer token to each request
//             req.headers["Authorization"] = `Bearer ${token}`;
//             return req;
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React, { useState, useEffect } from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
// import Header from "../components/Header/Header";

// const SwaggerComponent = () => {
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     // Assuming you have a function to retrieve the bearer token
//     const fetchToken = async () => {
//       try {
//         const response = await fetch(
//           "https://robustapihub.netlify.app/.netlify/functions/a",
//           {
//             method: "POST",
//             // Add any required headers for retrieving the token
//           }
//         );
//         const data = await response.json();

//         setToken(data.access_token);
//         console.log(`Bearer Token token : ${token}`)
//       } catch (error) {
//         console.error("Error fetching token:", error);
//       }
//     };

//     fetchToken();
//   }, []);

//   console.log(`Bearer Token: ${token}`);

//   const apiSpec = {
//     openapi: "3.0.0",
//     info: {
//       title: "Robust Api - OpenAPI 3.0",
//       description: "  This service is responsible for Compute Service API \n ",
//       termsOfService: "http://swagger.io/terms/",
//       contact: {
//         email: "apiteam@swagger.io",
//       },
//       license: {
//         name: "Apache 2.0",
//         url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//       },
//       version: "1.0.11",
//     },
//     externalDocs: {
//       description: "Find out more about Swagger",
//       url: "http://swagger.io",
//     },
//     servers: [
//       {
//         url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//       },
//     ],

//     // tags: [
//     //   {
//     //     name: "appgroups",
//     //     description: "Everything about your appGroups",
//     //     externalDocs: {
//     //       description: "Find out more",
//     //       url: "http://swagger.io",
//     //     },
//     //   },
//     //   {
//     //     name: "members",
//     //     description: "Access to Petstore orders",
//     //     externalDocs: {
//     //       description: "Find out more about our store",
//     //       url: "http://swagger.io",
//     //     },
//     //   },
//     //   {
//     //     name: "appgroups_apps",
//     //     description: "Operations about user",
//     //   },
//     // ],

//     paths: {
//       "/appgroups": {
//         get: {
//           tags: ["appgroups"], // Tag for GET operation
//           summary: "Get a list of app groups",
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },

//         get: {
//           tags: ["appgroups"], // Tag for GET operation
//           summary: "Get a list of app groups",
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           tags: ["appgroups"], // Tag for POST operation
//           summary: "Create a new app group",
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           tags: ["appgroups"], // Tag for PUT operation
//           summary: "Update an existing app group",
//           parameters: [
//             {
//               name: "id",
//               in: "path",
//               description: "ID of the app group to update",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           tags: ["appgroups"], // Tag for DELETE operation
//           parameters: [
//             {
//               name: "id",
//               in: "path",
//               description: "ID of the app group to delete",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },

//       "/members/{memberId}": {
//         get: {
//           tags: ["members"], // Updated tag to "members"
//           summary: "Get app groups for a specific member",
//           operationId: "getAppGroupsForMember",
//           parameters: [
//             {
//               name: "memberId",
//               in: "path",
//               description: "ID of the member",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           tags: ["members"], // Updated tag to "members"
//           summary: "Create a new app group for a specific member",
//           operationId: "createAppGroupForMember",
//           parameters: [
//             {
//               name: "memberId",
//               in: "path",
//               description: "ID of the member",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           tags: ["members"], // Updated tag to "members"
//           summary: "Update an existing app group for a specific member",
//           operationId: "updateAppGroupForMember",
//           parameters: [
//             {
//               name: "memberId",
//               in: "path",
//               description: "ID of the member",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           tags: ["members"], // Updated tag to "members"
//           summary: "Delete an app group for a specific member",
//           operationId: "deleteAppGroupForMember",
//           parameters: [
//             {
//               name: "memberId",
//               in: "path",
//               description: "ID of the member",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },
//       // ... (other paths remain the same)

//       "/appgroups_app/{appId}": {
//         get: {
//           tags: ["appgroups_app"], // Updated tag to "appgroups_app"
//           summary: "Get app groups for a specific app",
//           operationId: "getAppGroupsForApp",
//           parameters: [
//             {
//               name: "appId",
//               in: "path",
//               description: "ID of the app",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           tags: ["appgroups_app"], // Updated tag to "appgroups_app"
//           summary: "Create a new app group for a specific app",
//           operationId: "createAppGroupForApp",
//           parameters: [
//             {
//               name: "appId",
//               in: "path",
//               description: "ID of the app",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           tags: ["appgroups_app"], // Updated tag to "appgroups_app"
//           summary: "Update an existing app group for a specific app",
//           operationId: "updateAppGroupForApp",
//           parameters: [
//             {
//               name: "appId",
//               in: "path",
//               description: "ID of the app",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           tags: ["appgroups_app"], // Updated tag to "appgroups_app"
//           summary: "Delete an app group for a specific app",
//           operationId: "deleteAppGroupForApp",
//           parameters: [
//             {
//               name: "appId",
//               in: "path",
//               description: "ID of the app",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },

//       // "/store/inventory": {
//       //   get: {
//       //     tags: ["store"],
//       //     summary: "Returns pet inventories by status",
//       //     description: "Returns a map of status codes to quantities",
//       //     operationId: "getInventory",
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "object",
//       //               additionalProperties: {
//       //                 type: "integer",
//       //                 format: "int32",
//       //               },
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //     security: [
//       //       {
//       //         api_key: [],
//       //       },
//       //     ],
//       //   },
//       // },
//       // "/store/order": {
//       //   post: {
//       //     tags: ["store"],
//       //     summary: "Place an order for a pet",
//       //     description: "Place a new order in the store",
//       //     operationId: "placeOrder",
//       //     requestBody: {
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/dfdggtrgert",
//       //           },
//       //         },
//       //         "application/xml": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Order",
//       //           },
//       //         },
//       //         "application/x-www-form-urlencoded": {
//       //           schema: {
//       //             $ref: "#/components/schemas/Order",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Order",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       405: {
//       //         description: "Invalid input",
//       //       },
//       //     },
//       //   },
//       // },
//       // "/store/order/{orderId}": {
//       //   get: {
//       //     tags: ["store"],
//       //     summary: "Find purchase order by ID",
//       //     description:
//       //       "For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.",
//       //     operationId: "getOrderById",
//       //     parameters: [
//       //       {
//       //         name: "orderId",
//       //         in: "path",
//       //         description: "ID of order that needs to be fetched",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //           format: "int64",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Order",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/Order",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid ID supplied",
//       //       },
//       //       404: {
//       //         description: "Order not found",
//       //       },
//       //     },
//       //   },
//       //   delete: {
//       //     tags: ["store"],
//       //     summary: "Delete purchase order by ID",
//       //     description:
//       //       "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
//       //     operationId: "deleteOrder",
//       //     parameters: [
//       //       {
//       //         name: "orderId",
//       //         in: "path",
//       //         description: "ID of the order that needs to be deleted",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //           format: "int64",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       400: {
//       //         description: "Invalid ID supplied",
//       //       },
//       //       404: {
//       //         description: "Order not found",
//       //       },
//       //     },
//       //   },
//       // },

//       // "/user": {
//       //   post: {
//       //     tags: ["user"],
//       //     summary: "Create user",
//       //     description: "This can only be done by the logged in user.",
//       //     operationId: "createUser",
//       //     requestBody: {
//       //       description: "Created user object",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //         "application/xml": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //         "application/x-www-form-urlencoded": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       default: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       // },
//       // "/user/createWithList": {
//       //   post: {
//       //     tags: ["user"],
//       //     summary: "Creates list of users with given input array",
//       //     description: "Creates list of users with given input array",
//       //     operationId: "createUsersWithListInput",
//       //     requestBody: {
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             type: "array",
//       //             items: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "Successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       default: {
//       //         description: "successful operation",
//       //       },
//       //     },
//       //   },
//       // },
//       // "/user/login": {
//       //   get: {
//       //     tags: ["user"],
//       //     summary: "Logs user into the system",
//       //     description: "",
//       //     operationId: "loginUser",
//       //     parameters: [
//       //       {
//       //         name: "username",
//       //         in: "query",
//       //         description: "The user name for login",
//       //         required: false,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //       {
//       //         name: "password",
//       //         in: "query",
//       //         description: "The password for login in clear text",
//       //         required: false,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         headers: {
//       //           "X-Rate-Limit": {
//       //             description: "calls per hour allowed by the user",
//       //             schema: {
//       //               type: "integer",
//       //               format: "int32",
//       //             },
//       //           },
//       //           "X-Expires-After": {
//       //             description: "date in UTC when token expires",
//       //             schema: {
//       //               type: "string",
//       //               format: "date-time",
//       //             },
//       //           },
//       //         },
//       //         content: {
//       //           "application/xml": {
//       //             schema: {
//       //               type: "string",
//       //             },
//       //           },
//       //           "application/json": {
//       //             schema: {
//       //               type: "string",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid username/password supplied",
//       //       },
//       //     },
//       //   },
//       // },
//       // "/user/logout": {
//       //   get: {
//       //     tags: ["user"],
//       //     summary: "Logs out current logged in user session",
//       //     description: "",
//       //     operationId: "logoutUser",
//       //     parameters: [],
//       //     responses: {
//       //       default: {
//       //         description: "successful operation",
//       //       },
//       //     },
//       //   },
//       // },
//       // "/user/{username}": {
//       //   get: {
//       //     tags: ["user"],
//       //     summary: "Get user by user name",
//       //     description: "",
//       //     operationId: "getUserByName",
//       //     parameters: [
//       //       {
//       //         name: "username",
//       //         in: "path",
//       //         description:
//       //           "The name that needs to be fetched. Use user1 for testing. ",
//       //         required: true,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "successful operation",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //           "application/xml": {
//       //             schema: {
//       //               $ref: "#/components/schemas/User",
//       //             },
//       //           },
//       //         },
//       //       },
//       //       400: {
//       //         description: "Invalid username supplied",
//       //       },
//       //       404: {
//       //         description: "User not found",
//       //       },
//       //     },
//       //   },
//       //   put: {
//       //     tags: ["user"],
//       //     summary: "Update user",
//       //     description: "This can only be done by the logged in user.",
//       //     operationId: "updateUser",
//       //     parameters: [
//       //       {
//       //         name: "username",
//       //         in: "path",
//       //         description: "name that need to be deleted",
//       //         required: true,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     requestBody: {
//       //       description: "Update an existent user in the store",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //         "application/xml": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //         "application/x-www-form-urlencoded": {
//       //           schema: {
//       //             $ref: "#/components/schemas/User",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       default: {
//       //         description: "successful operation",
//       //       },
//       //     },
//       //   },
//       //   delete: {
//       //     tags: ["user"],
//       //     summary: "Delete user",
//       //     description: "This can only be done by the logged in user.",
//       //     operationId: "deleteUser",
//       //     parameters: [
//       //       {
//       //         name: "username",
//       //         in: "path",
//       //         description: "The name that needs to be deleted",
//       //         required: true,
//       //         schema: {
//       //           type: "string",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       400: {
//       //         description: "Invalid username supplied",
//       //       },
//       //       404: {
//       //         description: "User not found",
//       //       },
//       //     },
//       //   },
//       // },
//     },

//     components: {
//       schemas: {
//         Order: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//               format: "int64",
//               example: 10,
//             },
//             petId: {
//               type: "integer",
//               format: "int64",
//               example: 198772,
//             },
//             quantity: {
//               type: "integer",
//               format: "int32",
//               example: 7,
//             },
//             shipDate: {
//               type: "string",
//               format: "date-time",
//             },
//             status: {
//               type: "string",
//               description: "Order Status",
//               example: "approved",
//               enum: ["placed", "approved", "delivered"],
//             },
//             complete: {
//               type: "boolean",
//             },
//           },
//           xml: {
//             name: "order",
//           },
//         },

//         AppGroup: {
//           type: "object",
//           properties: {
//             appGroups: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   name: {
//                     type: "string",
//                     //example: "aaaa",
//                   },
//                   displayName: {
//                     type: "string",
//                     //example: "aaaa bb",
//                   },
//                   status: {
//                     type: "string",
//                     example: "active",
//                   },
//                   attributes: {
//                     type: "array",
//                     items: {
//                       type: "object",
//                       properties: {
//                         name: {
//                           type: "string",
//                         },
//                         value: {
//                           type: "string",
//                         },
//                       },
//                     },
//                   },
//                   createdAt: {
//                     type: "string",
//                     example: "1698308576720",
//                   },
//                   lastModifiedAt: {
//                     type: "string",
//                     example: "1698308626616",
//                   },
//                 },
//               },
//             },
//           },
//           xml: {
//             name: "appGroup",
//           },
//         },

//         Customer: {
//           type: "object",
//           properties: {
//             id: {
//               type: "integer",
//               format: "int64",
//               example: 100000,
//             },
//             username: {
//               type: "string",
//               example: "fehguy",
//             },
//             address: {
//               type: "array",
//               xml: {
//                 name: "addresses",
//                 wrapped: true,
//               },
//               items: {
//                 $ref: "#/components/schemas/Address",
//               },
//             },
//           },
//           xml: {
//             name: "customer",
//           },
//         },

//         ApiResponse: {
//           type: "object",
//           properties: {
//             code: {
//               type: "integer",
//               format: "int32",
//             },
//             type: {
//               type: "string",
//             },
//             message: {
//               type: "string",
//             },
//           },
//           xml: {
//             name: "##default",
//           },
//         },
//       },
//       requestBodies: {
//         Pet: {
//           description: "Pet object that needs to be added to the store",
//           content: {
//             "application/json": {
//               schema: {
//                 $ref: "#/components/schemas/Pet",
//               },
//             },
//             "application/xml": {
//               schema: {
//                 $ref: "#/components/schemas/Pet",
//               },
//             },
//           },
//         },
//         UserArray: {
//           description: "List of user object",
//           content: {
//             "application/json": {
//               schema: {
//                 type: "array",
//                 items: {
//                   $ref: "#/components/schemas/User",
//                 },
//               },
//             },
//           },
//         },
//       },
//       securitySchemes: {
//         petstore_auth: {
//           type: "oauth2",
//           flows: {
//             implicit: {
//               authorizationUrl: "https://petstore3.swagger.io/oauth/authorize",
//               scopes: {
//                 "write:pets": "modify pets in your account",
//                 "read:pets": "read your pets",
//               },
//             },
//           },
//         },
//         api_key: {
//           type: "apiKey",
//           name: "api_key",
//           in: "header",
//         },
//       },
//     },
//   };

//   return (
//     <div>
//   <Header />
//   <div>{token}</div>
//   <div style={{ marginTop: "150px" }}>
//     <SwaggerUI
//       spec={apiSpec}
//       requestInterceptor={(req) => {
//         const accessToken = "ya29.c.c0AY_VpZgFwSBk0Q9vB5MLDjgwDPo_FkUR6aqYsOVTjam33KrOL4u31mvBAvj9oPH1uIhbTcnTkRJ0kGFO0rfdvZ4seK6NOAQXiRRbH_Oz1-XUgWJc8YPQR3t_ki-FpKGZ4dLtl5flJlHq3oRENTwIRJ4GLr9jkRsmrw_PSsIY7xF-BBzpJIHkRB9pDQwXRLixNJNRjmdIDVGmZgw05CNNcf37ikLoEjflivNF6khbxiP1NjZZgLUUwYudoK6Ar2aIfVGh0yk3CVf29Law7icH1APw-i1rcK-EWpbmaCj7R6y6WUD3dzMdO3Ox1smqX4vp9w6eJ2HBX1iPqi8QfhZ6nott0vc4E7Nmsq0V8HenvTPibjYXd8VEvhwTQAH387A8vMtF7VMm7aUz2gZ0eg7VM9WOJxk1neIIfQUJk6W2h9w_fea1ldlUxaua5110hzwB05FVtB3ok_Uaawjm0Jy5i27UFw6f6sQM72nkUMki9elO8q-nQt9ko3pdXz1vuvvz-SIp1cMv2bheWnhlgq8z9SRtRySu4duUO21BXS-lymB8R5gBm5v-i4BZQoxm7jS2B00Br0pI5ZQjnqVgIda78ofbg89pQ1x-0OizfIhUmOwa6Q9V2Y55-hkrq8hnmgkS8uXp7glvOcO6Uz8j0Z81mfQix2iImkecwYnZ1r_8tMjYIYgdfc_anc8x-b9lbkBZ_qbgV_uJS60diR6xsfiIgQmcIr3Ufdv4eqIiYeeojQpijUd1i02dIat4u8jJithRSsp0X2Zt1UcBV9FZd8FteWi84irncMsZXMVW77mofifRfbBfboSmFs3IBW_suvO9hJZ9m3hk-4F9cSBbfrVBkf9oFkbq5dUU_dqlpbv_dmXh7St4nBqgt1JjbB3sOdMOkzBmirztJX1RcZZ179p_oIgysy4r-i9uMW4fOfYZumu1d0FZ3jtWrUwvwQq-_4MtkOR2wRd1lb8fegy4ogxjgpgJvoMFmWOcpvtgJMnvfaZdh8I-okk5hm1"; // Replace with your actual access token

//         // Add authorization header with the bearer token to each request
//         req.headers["Authorization"] = `Bearer ${accessToken}`;
//         return req;
//       }}
//     />
//   </div>
// </div>

//   );
// };

// export default SwaggerComponent;

// import React, { useState, useEffect } from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";
// import Header from "../components/Header/Header";

// const SwaggerComponent = () => {
// const [token, setToken] = useState("");

// const fetchToken = async () => {
//   try {
//     const response = await fetch(
//       "https://robustapihub.netlify.app/.netlify/functions/a",
//       {
//         method: "GET",
//       }
//     );
//     const data = await response.json();

//     setToken(data.accessToken);
//     console.log(data.accessToken); // Add this line
//   } catch (error) {
//     console.error("Error fetching token:", error);
//   }
// };
// useEffect(() => {
//   fetchToken();
// }, []);
// console.log(`Bearer Token: ${token}`);

//   const apiSpec = {
//     openapi: "3.0.0",
//     info: {
//       title: "Robust Api - OpenAPI 3.0",
//       description: "  This service is responsible for robust API \n ",
//       termsOfService: "http://swagger.io/terms/",
//       contact: {
//         email: "apiteam@swagger.io",
//       },
//       license: {
//         name: "Apache 2.0",
//         url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//       },
//       version: "1.0.11",
//     },
//     externalDocs: {
//       description: "Find out more about Swagger",
//       url: "http://swagger.io",
//     },
//     servers: [
//       {
//         url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//         // Add authorization header with the bearer token to each request
//       },
//     ],

//     paths: {
//       "/appgroups": {
//         "get": {
//           "tags": ["appgroups"],
//           "summary": "Get a list of app groups",
//           "responses": {
//             "200": {
//               "description": "Successful response",
//               "content": {
//                 "application/json": {
//                   "schema": {
//                     "$ref": "#/components/schemas/AppGroupResponse"
//                   },
//                   "example": {
//                     "appGroups": [
//                       {
//                         "name": "string",
//                         "displayName": "string",
//                         "status": "string",
//                         "attributes": [
//                           {
//                             "name": "string",
//                             "value": "string"
//                           }
//                         ],
//                         "createdAt": "1698308576720",
//                         "lastModifiedAt": "1698308626616"
//                       }
//                     ]
//                   }
//                 }
//               }
//             }
//           }
//         }
//       },

//       "/appgroups/{appgroupName}": {
//       get: {
//           tags: ["appgroups"],
//           summary: "Get details of appgroups",
//           parameters: [
//             {
//               name: "appgroupName",
//               in: "path",
//               description: "ID of the app group",
//               required: true,
//               schema: {
//                 type: "string"
//               }
//             }
//           ],

//           requestBody: {
//             description: "Get appgroup object",
//             content: {
//               "application/json": {
//                 "schema": {
//                   "$ref": "#/components/schemas/AppGroup"
//                 }
//               }
//             }
//           },
//           responses: {
//             200: {
//               "description": "Successful response",
//               "content": {
//                 "application/json": {
//                   "schema": {
//                     "type": "object"
//                   }
//                 }
//               }
//             }
//           }
//         },

//         post: {
//           tags: ["appgroups"],
//           summary: "Create a new app group",
//           parameters: [
//             {
//               name: "appgroupName",
//               in: "path",
//               description: "ID of the app group",
//               required: true,
//               schema: {
//                 type: "string"
//               }
//             }
//           ],
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 "schema": {
//                   "$ref": "#/components/schemas/AppGroup"
//                 }
//               }
//             }
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   "schema": {
//                     "type": "object"
//                   }
//                 }
//               }
//             }
//           }
//         },

//         put: {
//           tags: ["appgroups"],
//           summary: "Update an existing app group",
//           parameters: [
//             {
//               name: "appgroupName",
//               in: "path",
//               description: "ID of the app group",
//               required: true,
//               schema: {
//                 type: "string"
//               }
//             }
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 "schema": {
//                   "$ref": "#/components/schemas/AppGroup"
//                 }
//               }
//             }
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object"
//                   }
//                 }
//               }
//             }
//           }
//         },
//         delete: {
//           tags: ["appgroups"],
//           summary: "Delete an app group",
//           parameter: [
//             {
//               name: "appgroupName",
//               in: "path",
//               description: "ID of the app group",
//               required: true,
//               schema: {
//                 type: "integer"
//               }
//             }
//           ],
//           responses: {
//             204: {
//               description: "Successful response"
//             }
//           }
//         }
//       },

//       "/members/{memberId}": {
//         get: {
//           tags: ["members"], // Updated tag to "members"
//           summary: "Get app groups for a specific member",
//           operationId: "getAppGroupsForMember",
//           parameters: [
//             {
//               name: "memberId",
//               in: "path",
//               description: "ID of the member",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           tags: ["members"], // Updated tag to "members"
//           summary: "Create a new app group for a specific member",
//           operationId: "createAppGroupForMember",
//           parameters: [
//             {
//               name: "memberId",
//               in: "path",
//               description: "ID of the member",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           tags: ["members"], // Updated tag to "members"
//           summary: "Update an existing app group for a specific member",
//           operationId: "updateAppGroupForMember",
//           parameters: [
//             {
//               name: "memberId",
//               in: "path",
//               description: "ID of the member",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           tags: ["members"],
//           summary: "Delete an app group for a specific member",
//           operationId: "deleteAppGroupForMember",
//           parameters: [
//             {
//               name: "memberId",
//               in: "path",
//               description: "ID of the member",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },

//       "/appgroups_app/{appId}": {
//         get: {
//           tags: ["appgroups_apps"],
//           summary: "Get app groups for a specific app",
//           operationId: "getAppGroupsForApp",
//           parameters: [
//             {
//               name: "appId",
//               in: "path",
//               description: "ID of the app",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           tags: ["appgroups_apps"], // Updated tag to "appgroups_app"
//           summary: "Create a new app group for a specific app",
//           operationId: "createAppGroupForApp",
//           parameters: [
//             {
//               name: "appId",
//               in: "path",
//               description: "ID of the app",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           tags: ["appgroups_apps"],
//           summary: "Update an existing app group for a specific app",
//           operationId: "updateAppGroupForApp",
//           parameters: [
//             {
//               name: "appId",
//               in: "path",
//               description: "ID of the app",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           tags: ["appgroups_apps"],
//           summary: "Delete an app group for a specific app",
//           operationId: "deleteAppGroupForApp",
//           parameters: [
//             {
//               name: "appId",
//               in: "path",
//               description: "ID of the app",
//               required: true,
//               schema: {
//                 type: "integer",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },

//       // "/user/login": {
//       //   get: {
//       //     tags: ["appgroups_apps"],
//       //     summary: "Get app groups for a specific app",
//       //     operationId: "getAppGroupsForApp",
//       //     parameters: [
//       //       {
//       //         name: "appId",
//       //         in: "path",
//       //         description: "ID of the app",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       200: {
//       //         description: "Successful response",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "object",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   post: {
//       //     tags: ["appgroups_apps"], // Updated tag to "appgroups_app"
//       //     summary: "Create a new app group for a specific app",
//       //     operationId: "createAppGroupForApp",
//       //     parameters: [
//       //       {
//       //         name: "appId",
//       //         in: "path",
//       //         description: "ID of the app",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //         },
//       //       },
//       //     ],
//       //     requestBody: {
//       //       description: "App group object",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/AppGroup",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       201: {
//       //         description: "Successful response",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "object",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   put: {
//       //     tags: ["appgroups_apps"],
//       //     summary: "Update an existing app group for a specific app",
//       //     operationId: "updateAppGroupForApp",
//       //     parameters: [
//       //       {
//       //         name: "appId",
//       //         in: "path",
//       //         description: "ID of the app",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //         },
//       //       },
//       //     ],
//       //     requestBody: {
//       //       description: "Updated app group object",
//       //       content: {
//       //         "application/json": {
//       //           schema: {
//       //             $ref: "#/components/schemas/AppGroup",
//       //           },
//       //         },
//       //       },
//       //     },
//       //     responses: {
//       //       200: {
//       //         description: "Successful response",
//       //         content: {
//       //           "application/json": {
//       //             schema: {
//       //               type: "object",
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   delete: {
//       //     tags: ["appgroups_apps"],
//       //     summary: "Delete an app group for a specific app",
//       //     operationId: "deleteAppGroupForApp",
//       //     parameters: [
//       //       {
//       //         name: "appId",
//       //         in: "path",
//       //         description: "ID of the app",
//       //         required: true,
//       //         schema: {
//       //           type: "integer",
//       //         },
//       //       },
//       //     ],
//       //     responses: {
//       //       204: {
//       //         description: "Successful response",
//       //       },
//       //     },
//       //   },
//       // },
//     },

//     "securityDefinitions": {

//       "api_key": {
//             "type": "apiKey",
//             "name": "api_key",
//             "in": "header"
//       },
//       "petstore_auth": {
//             "type": "bearer",
//             "authorizationUrl": "https://robustapihub.netlify.app/.netlify/functions/a",
//             "flow": "implicit",
//             "scopes": {
//                   "read:appgroups": "read your appgroups",
//                   "write:appgroups": "modify appgroups in your account"
//             }
//       }

// },

//     components: {
//       schemas: {
//         AppGroup: {
//           type: "object",
//           properties: {
//             appGroups: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   name: {
//                     type: "string",
//                     //example: "aaaa",
//                   },
//                   displayName: {
//                     type: "string",
//                     //example: "aaaa bb",
//                   },
//                   status: {
//                     type: "string",
//                     //example: "active",
//                   },
//                   attributes: {
//                     type: "array",
//                     items: {
//                       type: "object",
//                       properties: {
//                         name: {
//                           type: "string",
//                         },
//                         value: {
//                           type: "string",
//                         },
//                       },
//                     },
//                   },
//                   createdAt: {
//                     type: "string",
//                     example: "1698308576720",
//                   },
//                   lastModifiedAt: {
//                     type: "string",
//                     example: "1698308626616",
//                   },
//                 },
//               },
//             },
//           },
//           xml: {
//             name: "appGroup",
//           },
//         },
//         Member: {
//           type: "object",
//           properties: {
//             memberId: {
//               type: "integer",
//             },
//             memberName: {
//               type: "string",
//               example: "John Doe",
//             },
//             memberStatus: {
//               type: "string",
//               example: "active",
//             },
//           },
//           xml: {
//             name: "member",
//           },
//         },

//         AppGroupsApp: {
//           type: "object",
//           properties: {
//             appId: {
//               type: "integer",
//             },
//             appName: {
//               type: "string",
//               example: "My App",
//             },
//             appStatus: {
//               type: "string",
//               example: "active",
//             },
//           },
//           xml: {
//             name: "appGroupApp",
//           },
//         },

//         // ApiResponse: {
//         //   type: "object",
//         //   properties: {
//         //     code: {
//         //       type: "integer",
//         //       format: "int32",
//         //     },
//         //     type: {
//         //       type: "string",
//         //     },
//         //     message: {
//         //       type: "string",
//         //     },
//         //   },
//         //   xml: {
//         //     name: "##default",
//         //   },
//         // },
//       },

//       requestBodies: {
//         AppGroup: {
//           description: "Pet object that needs to be added to the store",
//           content: {
//             "application/json": {
//               schema: {
//                 $ref: "#/components/schemas/AppGroup",
//               },
//             },
//             "application/xml": {
//               schema: {
//                 $ref: "#/components/schemas/AppGroup",
//               },
//             },
//           },
//         },
//         UserArray: {
//           description: "List of user object",
//           content: {
//             "application/json": {
//               schema: {
//                 type: "array",
//                 items: {
//                   $ref: "#/components/schemas/User",
//                 },
//               },
//             },
//           },
//         },
//       },

//       securitySchemes: {
//         custom_oauth: {
//           type: "oauth2",
//           flows: {
//             password: {
//               tokenUrl:
//                 "https://robustapihub.netlify.app/.netlify/functions/a",
//               scopes: {
//                 "write:pets": "modify pets in your account",
//                 "read:pets": "read your pets",
//               },
//             },
//           },
//         },
//       },

//       security: [
//         {
//           custom_oauth: ["write:pets", "read:pets"],
//         },
//       ],
//     },
//   };

// const apiSpec={

//     "openapi": "3.0.0",
//     "info": {
//       "title": "Robust Api - OpenAPI 3.0",
//       "description": "This service is responsible for Compute Service API",
//       "termsOfService": "http://swagger.io/terms/",
//       "contact": {
//         "email": "apiteam@swagger.io"
//       },
//       "license": {
//         "name": "Apache 2.0",
//         "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
//       },
//       "version": "1.0.11"
//     },
//     "externalDocs": {
//       "description": "Find out more about Swagger",
//       "url": "http://swagger.io"
//     },
//     "servers": [
//       {
//         "url": "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815"
//       }
//     ],
//     "paths": {
//       "/appgroups": {
//         "get": {
//           "tags": ["appgroups"],
//           "summary": "Get a list of app groups",
//           "responses": {
//             "200": {
//               "description": "Successful response",
//               "content": {
//                 "application/json": {
//                   "schema": {
//                     "$ref": "#/components/schemas/AppGroupResponse"
//                   },
//                   "example": {
//                     "appGroups": [
//                       {
//                         "name": "string",
//                         "displayName": "string",
//                         "status": "string",
//                         "attributes": [
//                           {
//                             "name": "string",
//                             "value": "string"
//                           }
//                         ],
//                         "createdAt": "1698308576720",
//                         "lastModifiedAt": "1698308626616"
//                       }
//                     ]
//                   }
//                 }
//               }
//             }
//           }
//         }
//       },
//       "/appgroups/{appgroupName}": {
//         "get": {
//           "tags": ["appgroups"],
//           "summary": "Get details of appgroups",
//           "parameters": [
//             {
//               "name": "appgroupName",
//               "in": "path",
//               "description": "ID of the app group",
//               "required": true,
//               "schema": {
//                 "type": "string"
//               }
//             }
//           ],
//           "responses": {
//             "200": {
//               "description": "Successful response",
//               "content": {
//                 "application/json": {
//                   "schema": {
//                     "$ref": "#/components/schemas/AppGroup"
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "components": {
//       "schemas": {
//         "AppGroup": {
//           "type": "object",
//           "properties": {
//             "name": {
//               "type": "string",
//               "example": "string"
//             },
//             "displayName": {
//               "type": "string",
//               "example": "string"
//             },
//             "status": {
//               "type": "string",
//               "example": "string"
//             },
//             "attributes": {
//               "type": "array",
//               "items": {
//                 "type": "object",
//                 "properties": {
//                   "name": {
//                     "type": "string",
//                     "example": "string"
//                   },
//                   "value": {
//                     "type": "string",
//                     "example": "string"
//                   }
//                 }
//               }
//             },
//             "createdAt": {
//               "type": "string",
//               "example": "1698308576720"
//             },
//             "lastModifiedAt": {
//               "type": "string",
//               "example": "1698308626616"
//             }
//           }
//         },
//         "AppGroupResponse": {
//           "type": "object",
//           "properties": {
//             "appGroups": {
//               "type": "array",
//               "items": {
//                 "$ref": "#/components/schemas/AppGroup"
//               }
//             }
//           }
//         }
//       }
//     }

// }

//   const apiSpec = {
//     openapi: "3.0.0",
//     info: {
//       title: "Robust Api - OpenAPI 3.0",
//       description: "This service is responsible for Compute Service API",
//       termsOfService: "http://swagger.io/terms/",
//       contact: {
//         email: "apiteam@swagger.io",
//       },
//       license: {
//         name: "Apache 2.0",
//         url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//       },
//       version: "1.0.11",
//     },
//     externalDocs: {
//       description: "Find out more about Swagger",
//       url: "http://swagger.io",
//     },
//     servers: [
//       {
//         url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//       },
//     ],
//     paths: {

//       "/appgroups": {
//         get: {
//           tags: ["All Appgroups"],
//           summary: "Get a list of app groups",
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/AppGroupResponse",
//                   },
//                   example: {
//                     appGroups: [
//                       {
//                         name: "string",
//                         displayName: "string",
//                         status: "string",
//                         attributes: [
//                           {
//                             name: "string",
//                             value: "string",
//                           },
//                         ],
//                         createdAt: "1698308576720",
//                         lastModifiedAt: "1698308626616",
//                       },
//                     ],
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },

//       "/appgroups/{appgroupName}": {
//         get: {
//           tags: ["appgroups"],
//           summary: "Get details of appgroups",
//           parameters: [
//             {
//               name: "appgroupName",
//               in: "path",
//               description: "Name of the appgroup",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//           ],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/AppGroup",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           tags: ["appgroups"],
//           summary: "Create a new app group",
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/AppGroup",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           tags: ["appgroups"],
//           summary: "Update an existing appgroup",
//           parameters: [
//             {
//               name: "appgroupName",
//               in: "path",
//               description: "ID of the app group",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/AppGroup",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           tags: ["appgroups"],
//           summary: "Delete an appgroup",
//           parameters: [
//             {
//               name: "appgroupName",
//               in: "path",
//               description: "ID of the app group",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },

//       "/appgroups/{appgroupName}/apps": {
//         get: {
//           tags: ["All appgroups apps"],
//           summary: "Get details of all appgroups apps",
//           parameters: [
//             {
//               name: "appgroupName",
//               in: "path",
//               description: "Name of the appgroup apps",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//           ],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/AppGroup",
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },

//       "/appgroups/{appgroupName}/apps/{appgroupAppsName}": {
//         get: {
//           tags: ["appgroups apps"],
//           summary: "Get details of appgroups apps",
//           parameters: [
//             {
//               name: "appgroup name",
//               in: "path",
//               description: "Name of the appgroup",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//             {
//               name: "appgroup app name",
//               in: "path",
//               description: "Name of the appgroup app",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//           ],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/AppGroup",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         post: {
//           tags: ["appgroups apps"],
//           summary: "Create a new appgroup apps",
//           requestBody: {
//             description: "App group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/AppGroup",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         put: {
//           tags: ["appgroups apps"],
//           summary: "Update an existing appgroup apps",
//           parameters: [
//             {
//               name: "appgroup name",
//               in: "path",
//               description: "Name of the appgroup",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//             {
//               name: "appgroup app name",
//               in: "path",
//               description: "Name of the appgroup app",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//           ],
//           requestBody: {
//             description: "Updated app group object",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroup",
//                 },
//               },
//             },
//           },
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/AppGroup",
//                   },
//                 },
//               },
//             },
//           },
//         },
//         delete: {
//           tags: ["appgroups apps"],
//           summary: "Delete an appgroup apps",
//           parameters: [
//             {
//               name: "appgroup name",
//               in: "path",
//               description: "Name of the appgroup",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//             {
//               name: "appgroup app name",
//               in: "path",
//               description: "Name of the appgroup app",
//               required: true,
//               schema: {
//                 type: "string",
//               },
//             },
//           ],
//           responses: {
//             204: {
//               description: "Successful response",
//             },
//           },
//         },
//       },

//       "/apiproducts": {
//         get: {
//           summary: "Get a list of API products",
//           tags: ["API Products"],
//           responses: {
//             200: {
//               description: "Successful response",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/APIProductResponse",
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },

//     components: {
//       schemas: {
//         AppGroup: {
//           type: "object",
//           properties: {
//             name: {
//               type: "string",
//               example: "string",
//             },
//             displayName: {
//               type: "string",
//               example: "string",
//             },
//             status: {
//               type: "string",
//               example: "string",
//             },
//             attributes: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   name: {
//                     type: "string",
//                     example: "string",
//                   },
//                   value: {
//                     type: "string",
//                     example: "string",
//                   },
//                 },
//               },
//             },
//             createdAt: {
//               type: "string",
//               example: "1698308576720",
//             },
//             lastModifiedAt: {
//               type: "string",
//               example: "1698308626616",
//             },
//           },
//         },

//         AppGroupResponse: {
//           type: "object",
//           properties: {
//             appGroups: {
//               type: "array",
//               items: {
//                 $ref: "#/components/schemas/AppGroup",
//               },
//             },
//           },
//         },
//         APIProductResponse: {
//           type: "object",
//           properties: {
//             apiProduct: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   name: {
//                     type: "string",
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   };

//   const [token, setToken] = useState("");

//   useEffect(() => {
//     fetch("https://robustapihub.netlify.app/.netlify/functions/a")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Bearer Token:", data.token);
//         setToken(data.token);
//       })
//       .catch((error) => {
//         console.error("Error fetching Bearer token:", error);
//       });
//   }, []);

//   const requestInterceptor = (req) => {
//     // Set Authorization header with Bearer token
//     req.headers["Authorization"] = `Bearer ${token}`;
//     return req;
//   };

//   return (
//     <div>
//       <Header />
//       {/* <div>{token}</div> */}
//       <div style={{ marginTop: "150px" }}>
//         <SwaggerUI spec={apiSpec} requestInterceptor={requestInterceptor} />
//       </div>
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React, { useState, useEffect } from 'react';
// import SwaggerUI from 'swagger-ui-react';
// import 'swagger-ui-react/swagger-ui.css';

// const apiSpec = {
//   openapi: "3.0.0",
//   info: {
//     title: "Robust Api - OpenAPI 3.0",
//     description: "This service is responsible for Compute Service API",
//     termsOfService: "http://swagger.io/terms/",
//     contact: {
//       email: "apiteam@swagger.io",
//     },
//     license: {
//       name: "Apache 2.0",
//       url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//     },
//     version: "1.0.11",
//   },
//   externalDocs: {
//     description: "Find out more about Swagger",
//     url: "http://swagger.io",
//   },
//   servers: [
//     {
//       url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//     },
//   ],
//   paths: {
//     "/appgroups": {
//       get: {
//         tags: ["All Appgroups"],
//         summary: "Get a list of app groups",
//         responses: {
//           200: {
//             description: "Successful response",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroupResponse",
//                 },
//                 example: {
//                   appGroups: [
//                     {
//                       name: "string",
//                       displayName: "string",
//                       status: "string",
//                       attributes: [
//                         {
//                           name: "string",
//                           value: "string",
//                         },
//                       ],
//                       createdAt: "1698308576720",
//                       lastModifiedAt: "1698308626616",
//                     },
//                   ],
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   components: {
//     schemas: {
//       AppGroup: {
//         type: "object",
//         properties: {
//           name: {
//             type: "string",
//             example: "string",
//           },
//           displayName: {
//             type: "string",
//             example: "string",
//           },
//           status: {
//             type: "string",
//             example: "string",
//           },
//           attributes: {
//             type: "array",
//             items: {
//               type: "object",
//               properties: {
//                 name: {
//                   type: "string",
//                   example: "string",
//                 },
//                 value: {
//                   type: "string",
//                   example: "string",
//                 },
//               },
//             },
//           },
//           createdAt: {
//             type: "string",
//             example: "1698308576720",
//           },
//           lastModifiedAt: {
//             type: "string",
//             example: "1698308626616",
//           },
//         },
//       },

//       AppGroupResponse: {
//         type: "object",
//         properties: {
//           appGroups: {
//             type: "array",
//             items: {
//               $ref: "#/components/schemas/AppGroup",
//             },
//           },
//         },
//       },
//       APIProductResponse: {
//         type: "object",
//         properties: {
//           apiProduct: {
//             type: "array",
//             items: {
//               type: "object",
//               properties: {
//                 name: {
//                   type: "string",
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

// const useBearerToken = () => {
//   const [token, setToken] = useState('');

//   const fetchToken = async () => {
//     try {
//       const response = await fetch(
//         'https://robustapihub.netlify.app/.netlify/functions/a'
//       );
//       const data = await response.json();
//       const fetchedToken = data;
//       console.log("fetchedToken",fetchedToken)
//       setToken(fetchedToken);
//     } catch (error) {
//       console.error('Error fetching Bearer token:', error);
//     }
//   };

//   useEffect(() => {
//     const tokenRefreshInterval = setInterval(fetchToken, 15 * 60 * 1000); // 15 minutes
//     fetchToken(); // Fetch token immediately
//     return () => clearInterval(tokenRefreshInterval);
//   }, []);

//   return { fetchToken, getToken: () => token };
// };

// const SwaggerComponent = () => {
//   const { getToken } = useBearerToken();

//   return (
//     <div>

//       <SwaggerUI
//         spec={apiSpec}
//         requestInterceptor={async (req) => {
//           try {
//             const token = await getToken();
//             console.log('Bearer Token for Request:', token);
//             req.headers['Authorization'] = `Bearer ${token}`;
//           } catch (error) {
//             console.error('Error getting Bearer token for request:', error);
//           }
//           return req;
//         }}
//         presets={[SwaggerUI.presets.apis]}
//         auth={{
//           apiKey: {
//             name: 'Authorization',
//             value: '', // Empty string; the actual value will be set dynamically in the interceptor
//             type: 'header',
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React, { useEffect, useState } from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";

// const apiSpec = {
//   openapi: "3.0.0",
//   info: {
//     title: "Robust Api - OpenAPI 3.0",
//     description: "This service is responsible for Compute Service API",
//     termsOfService: "http://swagger.io/terms/",
//     contact: {
//       email: "apiteam@swagger.io",
//     },
//     license: {
//       name: "Apache 2.0",
//       url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//     },
//     version: "1.0.11",
//   },
//   externalDocs: {
//     description: "Find out more about Swagger",
//     url: "http://swagger.io",
//   },
//   servers: [
//     {
//       url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//     },
//   ],
//   paths: {
//     "/appgroups": {
//       get: {
//         tags: ["All Appgroups"],
//         summary: "Get a list of app groups",
//         responses: {
//           200: {
//             description: "Successful response",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroupResponse",
//                 },
//                 example: {
//                   appGroups: [
//                     {
//                       name: "string",
//                       displayName: "string",
//                       status: "string",
//                       attributes: [
//                         {
//                           name: "string",
//                           value: "string",
//                         },
//                       ],
//                       createdAt: "1698308576720",
//                       lastModifiedAt: "1698308626616",
//                     },
//                   ],
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   components: {
//     schemas: {
//       AppGroup: {
//         type: "object",
//         properties: {
//           name: {
//             type: "string",
//             example: "string",
//           },
//           displayName: {
//             type: "string",
//             example: "string",
//           },
//           status: {
//             type: "string",
//             example: "string",
//           },
//           attributes: {
//             type: "array",
//             items: {
//               type: "object",
//               properties: {
//                 name: {
//                   type: "string",
//                   example: "string",
//                 },
//                 value: {
//                   type: "string",
//                   example: "string",
//                 },
//               },
//             },
//           },
//           createdAt: {
//             type: "string",
//             example: "1698308576720",
//           },
//           lastModifiedAt: {
//             type: "string",
//             example: "1698308626616",
//           },
//         },
//       },

//       AppGroupResponse: {
//         type: "object",
//         properties: {
//           appGroups: {
//             type: "array",
//             items: {
//               $ref: "#/components/schemas/AppGroup",
//             },
//           },
//         },
//       },
//       APIProductResponse: {
//         type: "object",
//         properties: {
//           apiProduct: {
//             type: "array",
//             items: {
//               type: "object",
//               properties: {
//                 name: {
//                   type: "string",
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

// const SwaggerComponent = () => {
//   const [manualToken, setManualToken] = useState(
//     "ya29.c.c0AY_VpZgtWZAMLC-m1FPyYxcult_MWmvG-QQMsTzrMYLbxMKKmahGVZJL3y2oypBwfstlRvSxq5hAb4RaHsIjr_ztrlsLi2tCLZhZDzFx9wHOnLaMRF4ayOSaZHUupIx8jfCUoqq54-HQm-snhGahsL2lYQyh0ULhzBCoczrx4LQTUjfHLrktnnvnMxT0VNlXVrBLuVu7R2TUjN55SOWxnE10w0f63qEeILHBMPth6R01UgdNn4qdNPg85uCDaDJ-Hh9jsUm2dAn3EYphGy4YxxnIjcqyFte4BgPfU44xc4I56qU5igkq1oprfGxmhNrFm82LQl78HSiMXa78H2AHM0SPl05aWYiQt2jJzMlVXDIuC19yPnSeLUgE384CrWRMl57XhYxqWo48w9uXpbgr7O0QZv1v-uc1r8eX7pXgvIVII6xt76wYb4BWx0cW-jrfayercdktsta6Wjb26physSRXvZjiedQYnzkj39xqUnbUcYOtMf7t6c35hY5emB5w6z42yJmwMhe78plUdR-_YjXZzQxpOS5q0-g01z0vocOoVBty05bWeWcebljdYUV_RS066XMiIbiQ6Izwe9Jp7XrO5vjX64X0b4V4XW3yI1rjUJW9losJlz5qvIs54lo1l3jRJnnsjcU8JYmoXf3xs4snIOMmlIh-Fx54Sc4Q6ey3Zmfydzcp65U2_I25QtwX4zsJQmyomQ6mpUlt5-VBhwaYzWe98MBwMUM25sgwm-vz8gf-s8W4yYF7RxsQax2MOtXXVU97xwmZU2bSkmy-0vgS7sxyvwjZm-cm20_6farnS4rYpguBrad8te0bs_wt1Icu4pF_RUW13jcoV-f_5ahraOw21RSkfz_ySYMIfqdSovr9744Ye5FFOwm59vtM7QtYUMieWB50Fedmh260sVfg1YIiiQOmdc8eJ8-QW_gkugWnBoXvU_pismie-Oem-7pcFFddXeXlkb7bUVoIib2Xk1ogJFmnvfWvZX5hOfF3WW3-1Ws8cJ3"
//   );

//   // const [manualToken, setManualToken] = useState('');

//   return (
//     <div>
//       {/* Swagger UI component with dynamic requestInterceptor */}
//       <SwaggerUI
//         spec={apiSpec}
//         requestInterceptor={(req) => {
//           try {
//             // Set the manually provided token
//             const token = manualToken;
//             console.log("Bearer Token for Request:", token);
//             req.headers["Authorization"] = `Bearer ${token}`;
//           } catch (error) {
//             console.error("Error setting Bearer token for request:", error);
//           }
//           return req;
//         }}
//         presets={[SwaggerUI.presets.apis]}
//         auth={{
//           apiKey: {
//             name: "Authorization",
//             value: "", // Set the manually provided token
//             type: "header",
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React, { useEffect, useState } from "react";
// import SwaggerUI from "swagger-ui-react";
// import "swagger-ui-react/swagger-ui.css";

// const apiSpec = {
//   openapi: "3.0.0",
//   info: {
//     title: "Robust Api - OpenAPI 3.0",
//     description: "This service is responsible for Compute Service API",
//     termsOfService: "http://swagger.io/terms/",
//     contact: {
//       email: "apiteam@swagger.io",
//     },
//     license: {
//       name: "Apache 2.0",
//       url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//     },
//     version: "1.0.11",
//   },
//   externalDocs: {
//     description: "Find out more about Swagger",
//     url: "http://swagger.io",
//   },
//   servers: [
//     {
//       url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//     },
//   ],
//   paths: {
//     "/appgroups": {
//       get: {
//         tags: ["All Appgroups"],
//         summary: "Get a list of app groups",
//         responses: {
//           200: {
//             description: "Successful response",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroupResponse",
//                 },
//                 example: {
//                   appGroups: [
//                     {
//                       name: "string",
//                       displayName: "string",
//                       status: "string",
//                       attributes: [
//                         {
//                           name: "string",
//                           value: "string",
//                         },
//                       ],
//                       createdAt: "1698308576720",
//                       lastModifiedAt: "1698308626616",
//                     },
//                   ],
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   components: {
//     schemas: {
//       AppGroup: {
//         type: "object",
//         properties: {
//           name: {
//             type: "string",
//             example: "string",
//           },
//           displayName: {
//             type: "string",
//             example: "string",
//           },
//           status: {
//             type: "string",
//             example: "string",
//           },
//           attributes: {
//             type: "array",
//             items: {
//               type: "object",
//               properties: {
//                 name: {
//                   type: "string",
//                   example: "string",
//                 },
//                 value: {
//                   type: "string",
//                   example: "string",
//                 },
//               },
//             },
//           },
//           createdAt: {
//             type: "string",
//             example: "1698308576720",
//           },
//           lastModifiedAt: {
//             type: "string",
//             example: "1698308626616",
//           },
//         },
//       },

//       AppGroupResponse: {
//         type: "object",
//         properties: {
//           appGroups: {
//             type: "array",
//             items: {
//               $ref: "#/components/schemas/AppGroup",
//             },
//           },
//         },
//       },
//       APIProductResponse: {
//         type: "object",
//         properties: {
//           apiProduct: {
//             type: "array",
//             items: {
//               type: "object",
//               properties: {
//                 name: {
//                   type: "string",
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

// const SwaggerComponent = () => {
//   const [manualToken, setManualToken] = useState(
//     ""
//   );

//   const fetchToken = async () => {
//     try {
//       const response = await fetch('https://robustapihub.netlify.app/.netlify/functions/a');
//       const data = await response.json();
//       console.log('Token Fetch Response:', data);

//       const fetchedToken = data;
//       console.log('Fetched Token:', fetchedToken);

//       setManualToken(fetchedToken);
//     } catch (error) {
//       console.error('Error fetching Bearer token:', error);
//     }
//   };

//   useEffect(() => {
//     const tokenRefreshInterval = setInterval(fetchToken, 50 * 60 * 1000); // 50 minutes
//     fetchToken(); // Fetch token immediately
//     return () => clearInterval(tokenRefreshInterval);
//   }, []);

//   // const [manualToken, setManualToken] = useState('');

//   return (
//     <div>
//       {/* Swagger UI component with dynamic requestInterceptor */}
//       <SwaggerUI
//         spec={apiSpec}
//         requestInterceptor={(req) => {
//           try {
//             // Set the manually provided token
//             const token = manualToken;
//             console.log("Bearer Token for Request:", token);
//             req.headers["Authorization"] = `Bearer ${token}`;
//           } catch (error) {
//             console.error("Error setting Bearer token for request:", error);
//           }
//           return req;
//         }}
//         presets={[SwaggerUI.presets.apis]}
//         auth={{
//           apiKey: {
//             name: "Authorization",
//             value: "", // Set the manually provided token
//             type: "header",
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default SwaggerComponent;

// import React, { useState, useEffect } from 'react';
// import SwaggerUI from 'swagger-ui-react';
// import 'swagger-ui-react/swagger-ui.css';

// const apiSpec = {
//   openapi: "3.0.0",
//   info: {
//     title: "Robust Api - OpenAPI 3.0",
//     description: "This service is responsible for Compute Service API",
//     termsOfService: "http://swagger.io/terms/",
//     contact: {
//       email: "apiteam@swagger.io",
//     },
//     license: {
//       name: "Apache 2.0",
//       url: "http://www.apache.org/licenses/LICENSE-2.0.html",
//     },
//     version: "1.0.11",
//   },
//   externalDocs: {
//     description: "Find out more about Swagger",
//     url: "http://swagger.io",
//   },
//   servers: [
//     {
//       url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
//     },
//   ],
//   paths: {
//     "/appgroups": {
//       get: {
//         tags: ["All Appgroups"],
//         summary: "Get a list of app groups",
//         responses: {
//           200: {
//             description: "Successful response",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/AppGroupResponse",
//                 },
//                 example: {
//                   appGroups: [
//                     {
//                       name: "string",
//                       displayName: "string",
//                       status: "string",
//                       attributes: [
//                         {
//                           name: "string",
//                           value: "string",
//                         },
//                       ],
//                       createdAt: "1698308576720",
//                       lastModifiedAt: "1698308626616",
//                     },
//                   ],
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   components: {
//     schemas: {
//       AppGroup: {
//         type: "object",
//         properties: {
//           name: {
//             type: "string",
//             example: "string",
//           },
//           displayName: {
//             type: "string",
//             example: "string",
//           },
//           status: {
//             type: "string",
//             example: "string",
//           },
//           attributes: {
//             type: "array",
//             items: {
//               type: "object",
//               properties: {
//                 name: {
//                   type: "string",
//                   example: "string",
//                 },
//                 value: {
//                   type: "string",
//                   example: "string",
//                 },
//               },
//             },
//           },
//           createdAt: {
//             type: "string",
//             example: "1698308576720",
//           },
//           lastModifiedAt: {
//             type: "string",
//             example: "1698308626616",
//           },
//         },
//       },

//       AppGroupResponse: {
//         type: "object",
//         properties: {
//           appGroups: {
//             type: "array",
//             items: {
//               $ref: "#/components/schemas/AppGroup",
//             },
//           },
//         },
//       },
//       APIProductResponse: {
//         type: "object",
//         properties: {
//           apiProduct: {
//             type: "array",
//             items: {
//               type: "object",
//               properties: {
//                 name: {
//                   type: "string",
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

// const SwaggerComponent = () => {

//   const [manualToken, setManualToken] = useState('');

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const response = await fetch('https://robustapihub.netlify.app/.netlify/functions/a');
//         const { accessToken } = await response.json();
//         setManualToken(accessToken);
//         console.log("data", accessToken);
//       } catch (error) {
//         console.error('Error fetching Bearer token:', error);
//       }
//     };

//     fetchToken(); // Fetch token immediately

//     const tokenRefreshInterval = setInterval(fetchToken, 1 * 60 * 1000); // Refresh token every minute
//     return () => clearInterval(tokenRefreshInterval);
//   }, []);

//   console.log("manualToken", manualToken);
//   const abc=manualToken

//   return (
//     <div>
//       <SwaggerUI
//           spec={apiSpec}
//           requestInterceptor={(req) => {
//           const token = manualToken;
//           console.log('Bearer Token for Request:', token);
//           req.headers['Authorization'] = `Bearer ${token}`;
//           return req;
//         }}
//         presets={[SwaggerUI.presets.apis]}
//         auth={{
//           apiKey: {
//             name: 'Authorization',
//             value: '',
//             type: 'header',
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default SwaggerComponent;

import React, { useState, useEffect } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const apiSpec = {
  openapi: "3.0.0",
  info: {
    title: "Robust Api - OpenAPI 3.0",
    description: "This service is responsible for Compute Service API",
    termsOfService: "http://swagger.io/terms/",
    contact: {
      email: "apiteam@swagger.io",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    version: "1.0.11",
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
  servers: [
    {
      url: "https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815",
    },
  ],
  paths: {
    "/appgroups": {
      get: {
        tags: ["All Appgroups"],
        summary: "Get a list of app groups",
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AppGroupResponse",
                },
               
              },
            },
          },
        },
      },
    },

    "/appgroups/{appgroupName}": {
      get: {
        tags: ["appgroups"],
        summary: "Get details of appgroups",
        parameters: [
          {
            name: "appgroupName",
            in: "path",
            description: "Name of the appgroup",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AppGroup",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["appgroups"],
        summary: "Create a new app group",
        requestBody: {
          description: "Name of the appgroup",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AppGroup",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AppGroup",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["appgroups"],
        summary: "Update an existing appgroup",
        parameters: [
          {
            name: "appgroupName",
            in: "path",
            description: "Name of the appgroup",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          description: "Updated app group object",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AppGroup",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AppGroup",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["appgroups"],
        summary: "Delete an appgroup",
        parameters: [
          {
            name: "appgroupName",
            in: "path",
            description: "Name of the appgroup",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Successful response",
          },
        },
      },
    },

    "/appgroups/{appgroupName}/apps": {
      get: {
        tags: ["Appgroup apps"],
        summary: "Get details of appgroup apps",
        parameters: [
          {
            name: "appgroupName",
            in: "path",
            description: "Name of the appgroup apps",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AppGroupApps",
                },
              },
            },
          },
        },
      },
    },

    "/appgroups/{appgroupName}/apps/{appgroupAppsName}": {
      get: {
        tags: ["appgroups apps"],
        summary: "Get details of appgroups apps",
        parameters: [
          {
            name: "appgroupName",
            in: "path",
            description: "Name of the appgroup",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "appgroupAppsName",
            in: "path",
            description: "Name of the appgroup app",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AppGroup",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["appgroups apps"],
        summary: "Create a new appgroup apps",
        requestBody: {
          description: "Name of the appgroup",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AppGroup",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AppGroup",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["appgroups apps"],
        summary: "Update an existing appgroup apps",
        parameters: [
          {
            name: "appgroup name",
            in: "path",
            description: "Name of the appgroup",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "appgroup app name",
            in: "path",
            description: "Name of the appgroup app",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          description: "Updated app group object",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AppGroup",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AppGroup",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["appgroups apps"],
        summary: "Delete an appgroup apps",
        parameters: [
          {
            name: "appgroup name",
            in: "path",
            description: "Name of the appgroup",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "appgroup app name",
            in: "path",
            description: "Name of the appgroup app",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "Successful response",
          },
        },
      },
    },

    "/apiproducts": {
      get: {
        summary: "Get a list of API products",
        tags: ["API Products"],
        responses: {
          200: {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/APIProductResponse",
                },
              },
            },
          },
        },
      },
    },
  },

  components: {
    schemas: {
      AppGroup: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "string",
          },
          displayName: {
            type: "string",
            example: "string",
          },
          status: {
            type: "string",
            example: "string",
          },
          attributes: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  example: "string",
                },
                value: {
                  type: "string",
                  example: "string",
                },
              },
            },
          },
          createdAt: {
            type: "string",
            example: "1698308576720",
          },
          lastModifiedAt: {
            type: "string",
            example: "1698308626616",
          },
        },
      },

      AppGroupApps: {
        type: "object",
        properties: {
          appGroupApps: {
            type: "array",
            items: {
              type: "object",
              properties: {
                appId: {
                  type: "string"
                },
                attributes: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string"
                      },
                      value: {
                        type: "string"
                      }
                    },
                    required: ["name", "value"]
                  }
                },
                createdAt: {
                  type: "string"
                },
                credentials: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      apiProducts: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            apiproduct: {
                              type: "string"
                            },
                            status: {
                              type: "string"
                            }
                          },
                          required: ["apiproduct", "status"]
                        }
                      },
                      consumerKey: {
                        type: "string"
                      },
                      consumerSecret: {
                        type: "string"
                      },
                      expiresAt: {
                        type: "string"
                      },
                      issuedAt: {
                        type: "string"
                      },
                      status: {
                        type: "string"
                      }
                    },
                    required: ["apiProducts", "consumerKey", "consumerSecret", "expiresAt", "issuedAt", "status"]
                  }
                },
                lastModifiedAt: {
                  type: "string"
                },
                name: {
                  type: "string"
                },
                status: {
                  type: "string"
                },
                appGroup: {
                  type: "string"
                }
              },
              required: ["appId", "attributes", "createdAt", "credentials", "lastModifiedAt", "name", "status", "appGroup"]
            }
          }
        }
      },

      AppGroupResponse: {
        type: "object",
        properties: {
          appGroups: {
            type: "array",
            items: {
              $ref: "#/components/schemas/AppGroup",
            },
          },
        },
      },
      APIProductResponse: {
        type: "object",
        properties: {
          apiProduct: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  
                },
              },
            },
          },
        },
      },
    },
  },
};

const SwaggerComponent = () => {
  return (
    <div>
      <SwaggerUI
        spec={apiSpec}
        requestInterceptor={async (req) => {
          try {
            const tokenResponse = await fetch(
              "https://robustapihub.netlify.app/.netlify/functions/a"
            );
            const { accessToken } = await tokenResponse.json();
            console.log("Bearer Token for Request:", accessToken);
            req.headers["Authorization"] = `Bearer ${accessToken}`;
          } catch (error) {
            console.error("Error getting Bearer token for request:", error);
          }
          return req;
        }}
        presets={[SwaggerUI.presets.apis]}
        auth={{
          apiKey: {
            name: "Authorization",
            value: "",
            type: "header",
          },
        }}
      />
    </div>
  );
};

export default SwaggerComponent;
