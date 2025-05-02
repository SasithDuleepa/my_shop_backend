const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_shop_pos", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connection established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

module.exports = { connectDB, sequelize }; // export both
