// src/components/TrackedButton.js
import React from 'react';
import { track } from 'react-tracking';

const TrackedButton = ({ tracking }) => {
  const handleClick = () => {
    tracking.trackEvent({ action: 'Button Clicked' });
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
};

export default track({})(TrackedButton);
