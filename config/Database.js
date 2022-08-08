import { Sequelize } from "sequelize";

const dbConfig = require(config.js);

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

export default db;
