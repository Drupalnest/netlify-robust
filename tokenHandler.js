import Cookies from 'js-cookie';
import token from "./token";

const setInitialTokenInCookie = () => {
  const initialToken = token;
  Cookies.set('token22', initialToken);
}

export default setInitialTokenInCookie;
