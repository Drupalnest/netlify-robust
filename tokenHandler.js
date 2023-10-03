import Cookies from 'js-cookie';
import token from "./token";

const setInitialTokenInCookie = () => {
    //set token
  const initialToken = token;
  
  Cookies.set('accessToken', initialToken);
}

export default setInitialTokenInCookie;
