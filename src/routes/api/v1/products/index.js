// const router = require('express-promise-router')(); 
// const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')

// const { product } = require('../../..//controllers');

// router.route('/:id').get(product.get);
// router.route('/').post(checkJWTSign,product.create);
// router.route('/').get(product.getAll);
// router.route('/:id').put(checkJWTSign,product.update);
// router.route('/:id').delete(checkJWTSign, product.delete);


// module.exports = router;


// module.exports = router;

'use strict'
const path = require('path')

const product = require('../../../../controllers/product.js');
module.exports = async function (fastify, opts) {
  fastify.get('/:id',
    product.getAll
  
  )
  fastify.post('/', async function (request, reply) {
    product.getAll
    //return { root: true }
  })
  fastify.get('/', 
    product.getAll
  // return { root: true }
  )
  fastify.put('/:id', async function (request, reply) {
    return { root: true }
  })
  fastify.delete('/:id', async function (request, reply) {
    return { root: true }
  })
}
