module.exports = async function() {
  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken: process.env.BEARER_TOKEN }),
  };
};
