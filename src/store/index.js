import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import routerItems from '../router'
import productsReducer from '../pages/layout/products/reducer'
import cartReducer from '../pages/cart/reducer'

export default createStore(
  combineReducers({
    cart: cartReducer,
    products: productsReducer,
    router: routerItems.reducer
  }),

  compose(
    routerItems.enhancer,
    applyMiddleware(routerItems.middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)