const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Item = sequelize.define("Item_batch", {
    batch_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    item_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sell_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    buy_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    manufacture_date: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    exp_date: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    timestamps: true, // 🟢 enables createdAt and updatedAt
  });

  return Item;
};
