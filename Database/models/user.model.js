import { DataTypes } from "sequelize";
import sequelize from "../config.js";
import ROLES from "../roles.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    role: {
      type: DataTypes.ENUM(ROLES.ADMIN, ROLES.USER),
      defaultValue: ROLES.USER,
    },
    code: {
      type: DataTypes.STRING,
      
    },
  },
  {
    timestamps: true,
  }
);

export default User;
