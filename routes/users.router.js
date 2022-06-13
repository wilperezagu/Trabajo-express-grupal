const express = require('express');
const usersService = require('./../services/users.services');
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new usersService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter')
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});


module.exports = router;
