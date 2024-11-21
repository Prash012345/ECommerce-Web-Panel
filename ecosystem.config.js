module.exports = {
  apps: [
    {
      name: "backend",
      script: "server.js",
      cwd: "C:/MERN Projects/Vijya-Strore/backend",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "admin",
      script: "node_modules/react-scripts/bin/react-scripts.js",
      args: "start",
      cwd: "C:/MERN Projects/Vijya-Strore/admin",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    },
    {
      name: "client",
      script: "node_modules/react-scripts/bin/react-scripts.js",
      args: "start",
      cwd: "C:/MERN Projects/Vijya-Strore/client",
      env: {
        PORT: 3001,
        NODE_ENV: "production"
      }
    }
  ]
};
