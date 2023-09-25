

const newExpirationDate = () => {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    return expiration;
  };
  
  const tokenExpired = () => {
    const now = Date.now();
    const expirationDate = localStorage.getItem("expirationDate");
    const expDate = new Date(expirationDate);
  
    if (now > expDate.getTime()) {
      return true; // token expired
    }
  
    return false; // valid token
  };
  
  const getValidTokenFromServer = async (refreshToken) => {
    try {
      const request = await fetch("http://localhost:8000/getValidToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      });
  
      const data = await request.json();
      console.log("Got new token from server:", data.accessToken);
      return data;
    } catch (error) {
      throw new Error("Issue getting new token: " + error.message);
    }
  };
  
  export const getToken = async () => {
    if (tokenExpired()) {
      const refreshToken = localStorage.getItem("refreshToken");
      const tokenData = await getValidTokenFromServer(refreshToken);
      localStorage.setItem("accessToken", tokenData.accessToken);
      localStorage.setItem("expirationDate", newExpirationDate());
      return tokenData.accessToken;
    } else {
      console.log("Token not expired");
      return localStorage.getItem("accessToken");
    }
  };
  