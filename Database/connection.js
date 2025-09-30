import sequelize from "./config.js";
import "./associations.js";
import { isColString } from "sequelize/lib/utils";

const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export default connectToDB;
