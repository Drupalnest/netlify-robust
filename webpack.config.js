module.exports = {
    // ... (existing configuration)
  
    resolve: {
      fallback: {
        fs: false,
        child_process: false,
        path: require.resolve('path-browserify')
      }
    },
  
    // ... (other configuration options)
  };
  