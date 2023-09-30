
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchAccessToken } from '../redux/store';

// const YourComponent = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAccessToken());
//   }, [dispatch]);

//   return (
//    <>
//     <h1>sukhfg</h1>
//     {fetchAccessToken}
//    </>
//   );
// };

// export default YourComponent;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAccessToken } from '../redux/store'; // Assuming you have actions set up

// const YourFunctionalComponent = () => {
//   const dispatch = useDispatch();
//   const accessToken = useSelector((state) => state.auth.accessToken);

//   useEffect(() => {
//     dispatch(fetchAccessToken('username', 'password'));
//   }, [dispatch]);

//   return <div>{accessToken}</div>;
// };

// export default YourFunctionalComponent;
