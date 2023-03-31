const Order = require("../Models/order.model");

const express = require("express");

const router = express();



router.get("",async (req, res) =>{
    console.log("Omkar")
    const orders = await Order.find().lean().exec();
    res.status(200).json(orders);
})

router.post("",async (req, res) =>{
    try{
        const order = await Order.create(req.body);
        res.status(201).json(order);
    }catch(err){
        res.status(500).json(err);
    }
})

router.patch("",async (req, res) =>{
    try{
        const order = await Order.findByIdAndUpdate(req.params.id,req.body,{
            returnOriginal:false
        });
        res.status(201).json(order);
    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/:orderId",async(req,res) => {
    const order = await Order.findById(req.params.id).lean().exec();
    res.status(200).json(order)
})

//orders placed by customer

router.get("/:customerId",async(req,res) => {
    const orders = await Order.find({customerId:req.params.id}).lean().exec();
    res.status(200).json(orders)
})


module.exports = router;