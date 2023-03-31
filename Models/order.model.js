const mongoose = require('mongoose');
// const Customer = require('./customer.model');

// const Order = require('./order.model');

const OrderSchema = new mongoose.Schema({
    customerId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customer",
        required:true
    },
    productId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order",
        required:true
    }],
    orderedQuantity:[{
        type:Number,
        required:true
    }],
    totalPrice:{
        type:Number,
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

const OrderModel =  mongoose.model('order',OrderSchema);

module.exports = OrderModel;