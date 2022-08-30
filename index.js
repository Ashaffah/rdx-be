import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import cookieParser from "cookie-parser";
import productRoute from "./routes/product.js";
import cors from "cors";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected");
} catch (error) {
  console.log("Connection Error", error);
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/products", productRoute);
app.listen(5000, () => console.log("server is running at port 5000"));
