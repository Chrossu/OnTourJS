const express = require('express');
const router = express.Router();

// @route     GET api/
// @desc      Get logged in user
// @access    Private
router.get('/', (req, res) => {
  res.send('');
})

// @route     POST api/
// @desc      Auth user and get token
// @access    Private
router.post('/', (req, res) => {
  res.send('');
})

// @route     POST api/
// @desc      Auth user and get token
// @access    Private
router.put('/', (req, res) => {
  res.send('');
})

// @route     POST api/
// @desc      Auth user and get token
// @access    Private
router.delete('/', (req, res) => {
  res.send('');
})

module.exports = router;