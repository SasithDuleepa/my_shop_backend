const { ItemBatch } = require("../models");

const AddBatch = async (req, res) => {
  const {
    batch_id,
    item_id,
    sell_price,
    buy_price,
    manufacture_date,
    exp_date,
    quantity,
    batch_truevalue,
  } = req.body;
  try {
    const newBatch = await ItemBatch.create({
      batch_id,
      item_id,
      sell_price,
      buy_price,
      manufacture_date,
      exp_date,
      quantity,
      batch_truevalue,
    });
    res.status(201).json(newBatch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateBatch = async (req, res) => {
  const { id } = req.params;
  const {
    batch_id,
    item_id,
    sell_price,
    buy_price,
    manufacture_date,
    exp_date,
    quantity,
    batch_truevalue,
  } = req.body;
  try {
    const updatedBatch = await ItemBatch.update(
      {
        batch_id,
        item_id,
        sell_price,
        buy_price,
        manufacture_date,
        exp_date,
        quantity,
        batch_truevalue,
      },
      { where: { batch_id: id } }
    );
    if (!updatedBatch) {
      return res.status(404).json({ error: "Batch not found" });
    }
    res.status(200).json(updatedBatch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const DeleteBatch = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBatch = await ItemBatch.destroy({ where: { batch_id: id } });
    if (!deletedBatch) {
      return res.status(404).json({ error: "Batch not found" });
    }
    res.status(200).json({ message: "Batch deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetAllBatches = async (req, res) => {
  try {
    const batches = await ItemBatch.findAll();
    res.status(200).json(batches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetBatch = async (req, res) => {
  const { id } = req.params;
  try {
    const batch = await ItemBatch.findOne({ where: { batch_id: id } });
    if (!batch) {
      return res.status(404).json({ error: "Batch not found" });
    }
    res.status(200).json(batch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetBatchByItem = async (req, res) => {
  const { id } = req.params;
  try {
    const batch = await ItemBatch.findAll({ where: { item_id: id } });
    if (!batch) {
      return res.status(404).json({ error: "Batch not found" });
    }
    res.status(200).json(batch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  AddBatch,
  UpdateBatch,
  DeleteBatch,
  GetAllBatches,
  GetBatch,
  GetBatchByItem,
};
