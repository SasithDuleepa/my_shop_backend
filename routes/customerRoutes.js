const express = require("express");

const {
  AddCustomer,
  GetAllCustomers,
  GetCustomer,
  UpdateCustomer,
  DeleteCustomer,
  CustomerSearch,
} = require("../controllers/customerController");

const router = express.Router();

router.post("/", AddCustomer);
router.get("/", GetAllCustomers);
router.get("/:id", GetCustomer);
router.put("/:id", UpdateCustomer);
router.delete("/:id", DeleteCustomer);
router.get("/search/:search", CustomerSearch);

module.exports = router;
