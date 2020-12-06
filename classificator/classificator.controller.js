const express = require('express');
const router = express.Router();
const authorize = require('_middleware/authorize')
const classificatorService = require('./classificator.service');

// routes
router.post('/process-text', authorize(), processText);

module.exports = router;

function processText(req, res, next) {
    classificatorService.processText(req.params.id)
        .then(result => res.json(result))
        .catch(next);
}