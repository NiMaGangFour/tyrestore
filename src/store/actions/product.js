import * as actionTypes from "./actionTypes";

export const addProduct = () => {
  return {
    type: actionTypes.ADD_PRODUCT,
  };
};

export const setProduct = (productInfo) => {
  return {
    type: actionTypes.SET_PRODUCT,
    productInfo: productInfo,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};
