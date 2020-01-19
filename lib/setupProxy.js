"use strict";

var proxy = require('http-proxy-middleware'); // const host = 'alpha-app-portal-cn4.eniot.io';


var host = 'beta-app-portal-cn4.eniot.io'; // const host = 'app-portal-ppe1.envisioniot.com/';

module.exports = function (app) {
  app.use(proxy('/app-portal/web/v1/mock/', {
    target: 'http://beta-yapi-cn2.eniot.io/mock/8/',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: {
      '^/app-portal/web/v1/mock/': '/app-portal/web/v1/'
    }
  }));
  app.use('/app-portal/', proxy({
    target: "https://".concat(host),
    logLevel: 'debug',
    secure: false,
    changeOrigin: true,
    cookiePathRewrite: '/',
    cookieDomainRewrite: {
      '*': 'localhost'
    },
    pathRewrite: {
      '^/app-portal/': '/app-portal/'
    }
  }));
};

module.exports.host = host;