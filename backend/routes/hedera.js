const express = require('express');
const { createProposal } = require('../controllers/hederaController');
const router = express.Router();

router.post('/create-proposal', createProposal);

module.exports = router;
