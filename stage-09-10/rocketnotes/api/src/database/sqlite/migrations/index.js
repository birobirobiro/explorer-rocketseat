const sqliteConnection = require("../../../database/sqlite");

const createUsers = require("./createUsers");

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('');

  sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(err => console.error(err));
}

module.exports = migrationsRun;