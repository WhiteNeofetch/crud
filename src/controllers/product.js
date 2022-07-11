const genericCrud = require('../service/index');
const Product = require('../model/Product');
const fs = require("fs")





module.exports = {
    ...genericCrud(Product)
};