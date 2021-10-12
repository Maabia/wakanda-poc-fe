const enviroment = require("./src/environments/environment");

module.exports = {
  "/app/v1/*": {
      "target": environment.apiUrl,
      source: false,
      logLevel: "debug",
      changeOrigin: true
  }
}
