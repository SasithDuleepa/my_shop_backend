const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ItemBatch = sequelize.define(
    "Item_batches",
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      batch_id: {
        type: DataTypes.STRING,
        unique: true,
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
        type: DataTypes.DATE,
        allowNull: false,
      },
      exp_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      }, // 🟢 enables createdAt and updatedAt
    },
    {
      timestamps: true,
    }
  );

  return ItemBatch;
};
