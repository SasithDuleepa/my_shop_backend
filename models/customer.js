const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Customer = sequelize.define(
    "customers",
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customer_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );

  Customer.afterCreate(async (customer, options) => {
    customer.customer_id = `customer-${customer._id}`;
    await customer.save({ transaction: options.transaction });
  });

  return Customer;
};
