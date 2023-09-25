import React from 'react';

const tokentoke = () => {
  const config = {
    apiKey: process.env.BEARER_TOKEN
  };

  alert(config.apiKey);

  return <div>tokentoke</div>;
}

export default tokentoke;
