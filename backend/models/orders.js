const {model} = require('mongoose');

const {OrdersSchema} = require('../schemas/orders');

const OrdersModel = new model('Order', OrdersSchema);

module.exports = {OrdersModel};