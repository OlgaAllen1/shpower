import cartActionTypes from './actions'

const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      const product = action.payload

      return {
        products: [ product, ...state.products ]
      }

case cartActionTypes.REMOVE_FROM_CART:
      const actionProduct = action.payload
      const products = state.products.filter((aProduct) => actionProduct !== aProduct)
      return {
        products
      }

    default:
      return state

  }
}