import React, { useState, useEffect } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ErrorToast = ({ message }) => {
  const [close, setClose] = useState(false);

  const toggle = () => setClose(close);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClose(true);
    }, 100);

    const closeTimeout = setTimeout(() => {
      toggle();
    }, 4000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(closeTimeout);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: '4rem', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
    <Toast isOpen={close} fade={false} onClose={toggle}>
      <ToastHeader toggle={toggle} className="bg-danger text-white">
        Error
      </ToastHeader>
      <ToastBody>
        {message}
      </ToastBody>
    </Toast>
  </div>
  
  );
};

export default ErrorToast;
