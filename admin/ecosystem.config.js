module.exports = {
  apps: [
    {
      name: "admin",
      script: "node_modules/react-scripts/bin/react-scripts.js",
      args: "start",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ]
};
