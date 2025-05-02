const { Op } = require("sequelize");

const { Item } = require("../models");

const AddItem = async (req, res) => {
  const { item_name, sku } = req.body;
  const item = await Item.create({ item_name, sku });
  res.status(201).json(item);
};

const UpdateItem = async (req, res) => {
  const { id } = req.params;
  const { item_name, sku } = req.body;
  const item = await Item.update(
    { item_name, sku },
    { where: { item_id: id } }
  );
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.status(200).json(item);
};
const DeleteItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.destroy({ where: { item_id: id } });
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.status(200).json({ message: "Item deleted successfully" });
};

const GetAllItems = async (req, res) => {
  const items = await Item.findAll();
  res.status(200).json(items);
};

const GetItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findOne({ where: { item_id: id } });

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const ItemSearch = async (req, res) => {
  const { search } = req.params;
  const items = await Item.findAll({
    where: {
      [Op.or]: [{ item_name: { [Op.like]: `%${search}%` } }],
    },
  });
  res.status(200).json(items);
};

module.exports = {
  AddItem,
  UpdateItem,
  DeleteItem,
  GetAllItems,
  GetItem,
  ItemSearch,
};
