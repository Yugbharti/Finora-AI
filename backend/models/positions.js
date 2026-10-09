const {model} = require('mongoose');

const {PosSchema} = require('../schemas/positions');

const PosModel = new model('Position', PosSchema);

module.exports = {PosModel};