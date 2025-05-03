// models/index.js
const { Sequelize } = require("sequelize");
const sequelize = require("../config/db").sequelize;

const Item = require("./item")(sequelize);
const ItemBatch = require("./itemBatch")(sequelize);
// const Sale = require("./Sale")(sequelize);
// const SaleItem = require("./SaleItem")(sequelize);

// Define relationships
Item.hasMany(ItemBatch, { foreignKey: "item_id", sourceKey: "item_id" });
ItemBatch.belongsTo(Item, { foreignKey: "item_id", targetKey: "item_id" });

// Sale.hasMany(SaleItem);
// SaleItem.belongsTo(Sale);

// Item.hasMany(SaleItem);
// SaleItem.belongsTo(Item);

// ItemBatch.hasMany(SaleItem);
// SaleItem.belongsTo(ItemBatch);

module.exports = {
  sequelize,
  Item,
  ItemBatch,
  //   Sale,
  //   SaleItem
};
