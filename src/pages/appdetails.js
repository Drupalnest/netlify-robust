// import React from 'react';
// import { useSelector } from 'react-redux';

// const AppDetailsPage = () => {
//   const appDetails = useSelector((state) => state.app.appDetails);

//   if (!appDetails) {
//     return <div>Loading...</div>;
//   }

//   // Helper function to format date to a readable string
//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString(); // Use toLocaleString() to format the date and time based on user's locale
//   };

//   return (
//     <div>
//       <h1>App Details</h1>
//       <ul>
//         <li>App Family: {appDetails.appFamily}</li>
//         <li>App ID: {appDetails.appId}</li>
//         <li>Callback URL: {appDetails.callbackUrl || 'Not specified'}</li>
//         <li>Company Name: {appDetails.companyName}</li>
//         <li>Created At: {formatDate(appDetails.createdAt)}</li>
//         <li>Created By: {appDetails.createdBy}</li>
//         <li>Last Modified At: {formatDate(appDetails.lastModifiedAt)}</li>
//         <li>Last Modified By: {appDetails.lastModifiedBy}</li>
//         <li>Name: {appDetails.name}</li>
//         <li>Status: {appDetails.status}</li>
//       </ul>

//       <h2>Credentials</h2>
//       {appDetails.credentials.map((credential, index) => (
//         <div key={index}>
//           <p>Credential {index + 1}:</p>
//           <ul>
//             <li>Consumer Key: {credential.consumerKey}</li>
//             <li>Consumer Secret: {credential.consumerSecret}</li>
//             <li>Expires At: {credential.expiresAt}</li>
//             {/* Add other properties of the credential object if available */}
//           </ul>
//         </div>
//       ))}

//       <h2>Attributes</h2>
//       {appDetails.attributes.length > 0 ? (
//         <ul>
//           {appDetails.attributes.map((attribute, index) => (
//             <li key={index}>{attribute}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No attributes found.</p>
//       )}

//       <h2>Scopes</h2>
//       {appDetails.scopes.length > 0 ? (
//         <ul>
//           {appDetails.scopes.map((scope, index) => (
//             <li key={index}>{scope}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No scopes found.</p>
//       )}
//     </div>
//   );
// };

// export default AppDetailsPage;

import React from 'react';
import { useSelector } from 'react-redux';

const AppDetailsPage = () => {
  const appDetails = useSelector((state) => state.app.appDetails);

  if (!appDetails) {
    return <div>Loading...</div>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div>
      <h1>App Details</h1>
      <ul>
        <li>App Family: {appDetails.appFamily}</li>
        <li>App ID: {appDetails.appId}</li>
        <li>Callback URL: {appDetails.callbackUrl || 'Not specified'}</li>
        <li>Company Name: {appDetails.companyName}</li>
        <li>Created At: {formatDate(appDetails.createdAt)}</li>
        <li>Created By: {appDetails.createdBy}</li>
        <li>Last Modified At: {formatDate(appDetails.lastModifiedAt)}</li>
        <li>Last Modified By: {appDetails.lastModifiedBy}</li>
        <li>Name: {appDetails.name}</li>
        <li>Status: {appDetails.status}</li>
      </ul>

      <h2>Credentials</h2>
      {appDetails.credentials.length > 0 ? (
        <ul>
          {appDetails.credentials.map((credential, index) => (
            <div key={index}>
              <p>Credential {index + 1}:</p>
              <ul>
                <li>Consumer Key: {credential.consumerKey}</li>
                <li>Consumer Secret: {credential.consumerSecret}</li>
                <li>Expires At: {credential.expiresAt === -1 ? 'Never' : formatDate(credential.expiresAt)}</li>
                {/* Add other properties of the credential object if available */}
              </ul>

              <h3>API Products</h3>
              {credential.apiProducts.length > 0 ? (
                <ul>
                  {credential.apiProducts.map((product, productIndex) => (
                    <li key={productIndex}>
                      <p>API Product {productIndex + 1}:</p>
                      <ul>
                        <li>Name: {product.apiproduct}</li>
                        <li>Status: {product.status}</li>
                        {/* Add other properties of the product object if available */}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No API products found for this credential.</p>
              )}
            </div>
          ))}
        </ul>
      ) : (
        <p>No credentials found.</p>
      )}

      {/* Render Attributes and Scopes here, same as before */}
    </div>
  );
};

export default AppDetailsPage;
