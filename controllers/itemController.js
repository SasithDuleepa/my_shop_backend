const { Op, where } = require("sequelize");

const { Item, ItemBatch } = require("../models");

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

  try {
    const items = await Item.findAll({
      where: {
        item_name: {
          [Op.like]: `%${search}%`,
        },
      },
      include: [
        {
          model: ItemBatch,
          required: false, // 🔁 Make it a LEFT JOIN so items without batches are also shown
          where: {
            batch_id: {
              [Op.like]: `%${search}%`,
            },
          },
        },
      ],
    });

    // If no match in item_name, search in batch_id
    if (items.length === 0) {
      const itemsByBatch = await Item.findAll({
        include: [
          {
            model: ItemBatch,
            where: {
              batch_id: {
                [Op.like]: `%${search}%`,
              },
            },
          },
        ],
      });

      return res.status(200).json(itemsByBatch);
    }

    res.status(200).json(items);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  AddItem,
  UpdateItem,
  DeleteItem,
  GetAllItems,
  GetItem,
  ItemSearch,
};
