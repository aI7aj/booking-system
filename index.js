import express from "express";
import connectToDB from "./Database/connection.js";
import { init } from "./src/routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

await connectToDB().then(() => {
  init(express, app);
  console.log("Database connected successfully");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
