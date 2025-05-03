const express = require("express");

const {
  AddBatch,
  UpdateBatch,
  DeleteBatch,
  GetAllBatches,
  GetBatch,
  GetBatchByItem,
} = require("../controllers/batchController");

const router = express.Router();

router.post("/", AddBatch);
router.put("/:id", UpdateBatch);
router.delete("/:id", DeleteBatch);
router.get("/", GetAllBatches);
router.get("/:id", GetBatch);
router.get("/item/:id", GetBatchByItem);

module.exports = router;
