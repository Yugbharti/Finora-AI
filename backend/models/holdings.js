const {model} = require('mongoose');

const {HoldingsSchema} = require('../schemas/holdings');

const HoldingsModel = new model('Holding', HoldingsSchema);

module.exports = {HoldingsModel};