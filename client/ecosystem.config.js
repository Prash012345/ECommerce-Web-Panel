module.exports = {
  apps: [
    {
      name: "client",
      script: "node_modules/react-scripts/bin/react-scripts.js",
      args: "start",
      env: {
        PORT: 3001,
        NODE_ENV: "production"
      }
    }
  ]
};
