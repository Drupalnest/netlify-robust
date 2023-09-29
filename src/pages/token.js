
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAccessToken } from '../redux/store';

const YourComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccessToken());
  }, [dispatch]);

  return (
   <>
    <h1>sukhfg</h1>
    {fetchAccessToken}
   </>
  );
};

export default YourComponent;
