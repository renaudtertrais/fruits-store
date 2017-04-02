/*
  This reducer is suppose to manage the products
  when the are loaded from the server.
  Here as it comes from static data, it does nothing.
 */
export default (products = [], action = {}) => {
  switch (action.type) {
    default:
      return products;
  }
};
