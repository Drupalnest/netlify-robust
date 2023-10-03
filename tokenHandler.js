import Cookies from 'js-cookie';
import token from "../../token";

const setCookie = (name, value, options = {}) => {
  Cookies.set(name, value, options);
}

const updateTokenInCookie = () => {
  const updateCookie = () => {
    setCookie('tokenn', token);
    setTimeout(updateCookie, 60000); // Call updateCookie again after 1 minute
  }

  // Initially set the cookie
  updateCookie();
}

export default updateTokenInCookie;
