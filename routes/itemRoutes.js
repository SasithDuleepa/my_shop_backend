const express = require("express");

const {
  AddItem,
  UpdateItem,
  DeleteItem,
  GetAllItems,
  GetItem,
  ItemSearch,
} = require("../controllers/ItemController");

const router = express.Router();

router.post("/", AddItem);
router.put("/:id", UpdateItem);
router.delete("/:id", DeleteItem);
router.get("/", GetAllItems);
router.get("/:id", GetItem);
router.get("/search/:search", ItemSearch);
module.exports = router;
