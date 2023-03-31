const Customer = require("../Models/customer.model");

const express = require("express");

const router = express();



router.get("",async (req, res) =>{
    const customers = await Customer.find().lean().exec();
    res.status(200).json(customers);
})

router.post("",async (req, res) =>{
    try{
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    }catch(err){
        res.status(500).json(err);
    }
})

router.patch("",async (req, res) =>{
    try{
        const customer = await Customer.findByIdAndUpdate(req.params.id,req.body,{
            returnOriginal:false
        });
        res.status(201).json(customer);
    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/:customerId",async(req,res) => {
    const customer = await Customer.findById(req.params.id).lean().exec();
    res.status(200).json(customer)
})

module.exports = router;