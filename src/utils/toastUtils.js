
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToastWithOptions = (message, options = {}) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000, 
    ...options, 
  });
};
