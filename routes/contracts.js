const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contract = require('../models/Contract');

// @route     GET api/
// @desc      Get all user contracts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const contracts = await Contract.find({ user: req.user.id }).sort({ date: -1 });
    res.json(contracts);
  } catch (err) {
    console.error(err.message);
    res.status(400).send(' Server error ')
  }
})

// @route     POST api/
// @desc      Add a new contract
// @access    Private
router.post('/', [auth, [
  check('name', 'Se necesita un nombre del servicio').not().isEmpty(),
  check('totalAmount', 'Especifique el monto total del contrato').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { user, description, name, totalAmount, insurance } = req.body;
  
  try {
    const newContract = new Contract({
      user,
      name,
      description,
      insurance,
      totalAmount
    });

    const contract = await newContract.save();

    res.json(contract);

  } catch (err) {
    console.error(err.message);
    res.status(400).send(' Server error ')
  }
})

// @route     POST api/
// @desc      Auth user and get token
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { name, totalAmount, currentAmount } = req.body;

  const contractFields = {};

  if(name) contractFields.name = name;
  if(totalAmount) contractFields.totalAmount = totalAmount;
  if(currentAmount) contractFields.currentAmount = currentAmount;

  try {
    let contract = await Contract.findById(req.params.id);

    if(!contract) return res.status(400).json({ msg: 'Contrato no encontrado' });

    if(contract.user.toString() !== req.user.id) {
      return req.status(401).json({ msg: "No autorizado" });
    };

    contract = await Contract.findByIdAndUpdate(req.params.id, { $set: contractFields}, { new: true });

    res.json(contract);
  } catch (err) {
    console.error(err.message);
    res.status(400).send(' Server error ')
  }
})

// @route     POST api/
// @desc      Auth user and get token
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contract = await Contract.findById(req.params.id);

    if(!contract) return res.status(400).json({ msg: 'Contrato no encontrado' });

    if(contract.user.toString() !== req.user.id) {
      return req.status(401).json({ msg: "No autorizado" });
    };

    await Contract.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contrato eliminado" });
  } catch (err) {
    console.error(err.message);
    res.status(400).send(' Server error ')
  }
})

module.exports = router;