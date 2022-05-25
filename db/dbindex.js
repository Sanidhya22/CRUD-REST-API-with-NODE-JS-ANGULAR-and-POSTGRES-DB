const dbConfig = require("./dbconfig");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
try {
  sequelize.authenticate();
  console.log("Connection Sucessfull");
} catch (error) {
  console.error(error);
}
sequelize
  .sync()
  .then(() => {
    console.log("Sync Done");
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = sequelize;
