import Cookies from 'js-cookie';
import token from "./token";

const setInitialTokenInCookie = () => {
  const initialToken = token;
  Cookies.set('accessToken', initialToken);
}

export default setInitialTokenInCookie;
