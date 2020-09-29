const basedatos = require('./basedatos');
var cookieParser = require('cookie-parser');

module.exports = (app) => {
  app.use('/basedatos', basedatos);
  app.use(cookieParser());


};
