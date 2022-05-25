const Sequelize = require("sequelize");
const sequelize = require("../db/dbindex");
const User = sequelize.define("user", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      login: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      isdeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      }},
      {
        timestamps: false,
      }
    );

module.exports = User;