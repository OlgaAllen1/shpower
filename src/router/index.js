import { routerForBrowser } from 'redux-little-router'
const routes = {
    '/': {
    title: 'Root'
  },
  '/products': {
    title: 'Product List',
      '/:id': {
      title: 'Product Show'
    }
  },
  '/cart': {
    title: 'Shopping Cart'
    }
  }


const { reducer, middleware, enhancer } = routerForBrowser({ routes })

//Destructuring

export default {
  reducer,
  middleware,
  enhancer
}