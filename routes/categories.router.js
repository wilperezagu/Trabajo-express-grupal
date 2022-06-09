const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
})

module.exports = router;
