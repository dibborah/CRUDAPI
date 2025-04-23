// import express from "express";

const express = require("express");
const router = express.Router();

const {
    getProducts,
    getSingleProduct,
    createProduct,
    updateSingleProduct,
    deleteSingleProduct,
} = require('../controller/product.controller.js');

router.get('/', getProducts);

router.get('/:id', getSingleProduct);

router.post('/', createProduct);

router.put('/:id', updateSingleProduct);

router.delete('/:id', deleteSingleProduct);

module.exports = router;

