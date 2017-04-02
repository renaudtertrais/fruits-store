export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';
export const CART_UPDATE_PRODUCT = 'CART_UPDATE_PRODUCT';

export const addProduct = (id, quantity) => ({
  type: CART_ADD_PRODUCT,
  id,
  quantity,
});

export const removeProduct = id => ({
  type: CART_REMOVE_PRODUCT,
  id,
});

export const updateQuantity = (id, quantity) => ({
  type: CART_UPDATE_PRODUCT,
  id,
  quantity,
});
