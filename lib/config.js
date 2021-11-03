module.exports = (root) => {
  'use strict';

  const fs = require('fs');
  const cfg = {
      dev       : process.env.NODE_ENV === 'development',
      portHttp: process.env.PORTHTTP || 3000,
      saveWait  : 5000,
      listMax   : 20,
      dbConn    : 'mongodb://root:mysecret@collab_db:27017',
      dbName    : 'codeoperate'
    };
  return cfg;
}
