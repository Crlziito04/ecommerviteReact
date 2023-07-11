/**
 *This function calculates the total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total Price
 */

// export const totalPrice = (products) => {
//   let sum = 0;
//   products.forEach((prod) => (sum += prod.price));
//   return sum;
// };

export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
