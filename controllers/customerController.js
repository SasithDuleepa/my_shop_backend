const { Customer } = require("../models");
const { Op } = require("sequelize");

const AddCustomer = async (req, res) => {
  const { customer_name, nic, contact, status } = req.body;
  console.log(req.body);
  const customer = await Customer.create({
    customer_name,
    nic,
    contact,
    status,
  });
  res.status(201).json(customer);
};

const UpdateCustomer = async (req, res) => {
  const { id } = req.params;
  const { customer_name, nic, contact, status } = req.body;
  const customer = await Customer.findOne({ where: { customer_id: id } });
  customer.customer_name = customer_name;
  customer.nic = nic;
  customer.contact = contact;
  customer.status = status;
  await customer.save();
  res.status(200).json(customer);
};

const DeleteCustomer = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findOne({ where: { customer_id: id } });
  await customer.destroy();
  res.status(200).json(customer);
};
const GetAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  res.status(200).json(customers);
};
const GetCustomer = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findOne({ where: { customer_id: id } });
  res.status(200).json(customer);
};
const CustomerSearch = async (req, res) => {
  const { search } = req.params;
  const customers = await Customer.findAll({
    where: {
      [Op.or]: [{ customer_name: { [Op.like]: `%${search}%` } }],
      // [Op.or]: [{ nic: { [Op.like]: `%${search}%` } }],
      // [Op.or]: [{ contact: { [Op.like]: `%${search}%` } }],
    },
  });
  res.status(200).json(customers);
};

module.exports = {
  AddCustomer,
  UpdateCustomer,
  DeleteCustomer,
  GetAllCustomers,
  GetCustomer,
  CustomerSearch,
};
