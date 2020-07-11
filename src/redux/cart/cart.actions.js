export const toggleCart = () => ({
  type: "TOGGLE_CART_HIDDEN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeCartItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const removeSingleCartItem = (item) => ({
  type: "REMOVE_SINGLE_ITEM",
  payload: item,
});
