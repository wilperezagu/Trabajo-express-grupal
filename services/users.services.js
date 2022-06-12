const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data){
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 5000);
    })
  }

  async findOne(id){
    const users = this.users.find(item => item.id === id);
    if (!users){
      throw boom.notFound('user not found');
    }
    if(user.isBlock){
      throw boom.conflict('user is block ');
    }
    return user;
  }

  async update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  async delete(id){
    const index = this.user.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('user not found');
    }
    this.users.splice(index, 1);
    return { id };
  }

}

module.exports = UsersService;
