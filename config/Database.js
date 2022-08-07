import { Sequelize } from "sequelize";
const db = new Sequelize(process.env.DATABASE_URL, {
  host: "localhost",
  dialect: "mysql",
});

export default db;
