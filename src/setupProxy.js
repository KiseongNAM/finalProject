const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      ["/writefreeboard", "/writejoin", "/confirmlogin", "/freeboardtitle"],
      {
        target: "http://localhost:8080/",
        changeOrigin: true,
      }
    )
  );
};
