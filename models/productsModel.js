import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const Product = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
});

export default Product;
