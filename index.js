import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import sequelize from "sequelize";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

(async () => {
  await db.sync();
})();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      sameSite: "none",
      secure,
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "https://main--venerable-jelly-c59b68.netlify.app",
  })
);
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

store.sync();

app.listen(process.env.PORT || 5000, () => {
  console.log("server up and running...");
});
