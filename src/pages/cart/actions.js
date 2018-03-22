const actionTypes = {
  ADD_TO_CART : '[Cart] Add to Cart',
  REMOVE_FROM_CART : '[Cart] Remove From Cart',
  CLEAR_CART : '[Cart] Clear Cart'
}
export const addToCart = (product) => ({
  payload: product,
  type: actionTypes.ADD_TO_CART
})

export const removeFromCart = (product) => ({
  payload: product,
  type: actionTypes.REMOVE_FROM_CART
})

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
})

export default actionTypes