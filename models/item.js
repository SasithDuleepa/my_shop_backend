const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Item = sequelize.define(
    "Items",
    {
      _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      item_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sku: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // Hook to set item_id after creation
  Item.afterCreate(async (item, options) => {
    item.item_id = `item-${item._id}`;
    await item.save({ transaction: options.transaction });
  });

  return Item;
};
