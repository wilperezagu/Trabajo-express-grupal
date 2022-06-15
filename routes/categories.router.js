const express = require('express');
const faker = require('faker');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();

router.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
})
router.post('/',
 validatorHandler(createcategorisSchema, 'body'),
 async (req,res)=> {
   const body = req.body
   const newCategory =await ServiceWorker.create(body);
   res.status(201).json(newCategory)

 })

 router.delete('/:id', (req, res)=>{
   const { id } = req.params;
   const rta = service.delete(id);
   res.json(rta);
 });
module.exports = router;
