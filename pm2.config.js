module.exports = {
  apps : [
    {
      name: "d3-react-colorbar",
      script: "./src/server.js",
      watch: true,
      instance_var: "INSTANCE_ID",
      env: {
        "PORT": 8008,
      }
    }
  ]
};
