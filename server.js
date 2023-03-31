const express = require('express');
const app = express();
const connect = require('./Config/db');


const orderController = require("./Controllers/order.controller");
const customerController = require("./Controllers/customer.controller");
const productController = require("./Controllers/product.controller");
app.use(express.json);

app.use("/orders",orderController);
app.use("/customers",customerController);
app.use("/products",productController);

app.listen(2346,async()=>{
    await connect()
    console.log('listening on port 2346')
})