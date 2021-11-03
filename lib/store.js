// code database storage
/* global cfg */

'use strict';

const
  mongodb = require('mongodb'),
  dbID = mongodb.ObjectID,
  client = new mongodb.MongoClient(
    cfg.dbConn, { useNewUrlParser: true, useUnifiedTopology: true }
  );

// database connection
let db, code;

// connect to database
(async () => {

  try {

    // connect to MongoDB database
    await client.connect();
    db = client.db(cfg.dbName);

    // collections
    code = db.collection('code');

    // add indexes
    await code.createIndexes([
      { key: { created: 1 }},
      { key: { updated: 1 } }
    ]);

  }
  catch (err) {
    console.log('DB error', err);
  }

})();


// most recent records
async function list() {

  try {

    return await code
      .find(
        {},
        { projection: { _id: 1, title: 1, mode: 1, created: 1, updated: 1 } }
      )
      .sort({ updated: -1 })
      .limit(cfg.listMax)
      .toArray();

  }
  catch (err) {
    console.log('DB error', err);
  }

  return false;

}


module.exports = {
  list
};
