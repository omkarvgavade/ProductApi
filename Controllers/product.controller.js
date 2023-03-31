const Product = require("../Models/order.model");

const express = require("express");

const router = express();



router.get("",async (req, res) =>{
    console.log("yes")
    const products = await Product.find().lean().exec();
    res.status(200).json(products);
})

router.post("",async (req, res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }catch(err){
        res.status(500).json(err);
    }
})

router.patch("",async (req, res) =>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            returnOriginal:false
        });
        res.status(201).json(product);
    }catch(err){
        res.status(500).json(err);
    }
})
router.get("/:productId",async(req,res) => {
    const product = await Product.findById(req.params.id).lean().exec();
    res.status(200).json(product)
})

module.exports = router;