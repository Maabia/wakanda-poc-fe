const enviroment = require("./src/environments/environment");

module.exports = {
  "/video-wakanda/app/v1/video/*": {
      "target": environment.apiUrl,
      source: false,
      logLevel: "debug",
      changeOrigin: true
  }
}
