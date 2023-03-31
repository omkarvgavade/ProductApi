const mongoose = require('mongoose');


const CustomerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
},{
    versionKey:false,
    timestamps:true
})

const CustomerModel =  mongoose.model('customer',CustomerSchema);

module.exports = CustomerModel;