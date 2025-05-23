const { DataTypes } = require("sequelize");

//bill model
module.exports = (sequelize, Sequelize) => {
  const Bill = sequelize.define("bill", {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bill_id: {
      type: DataTypes.STRING,
      unique: true,
    },
    bill_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bill_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    bill_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    bill_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    bill_due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bill_paid_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  return Bill;
};
