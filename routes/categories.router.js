const express = require('express');
const CategoryService = require('./../services/categorys.services');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCategorytSchema, updateCategorySchema, getCategorySchema } = require('./../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res) => {
  const categorys = await service.find();
  res.json(categorys);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter')
})

router.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
})

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  })


module.exports = router;
