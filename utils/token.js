// utils/token.js
const getToken = () => {
    return process.env.BEARER_TOKEN || ''; // Provide a default value if needed
  };
  
  export default getToken;
  