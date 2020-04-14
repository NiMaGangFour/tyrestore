import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  uploaded: false,
  productForm: null,

  productName: null,
  // product: null,
  // totalPrice: 4,
  // error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.9,
  bacon: 1.5,
  cheese: 1.0,
  meat: 2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        productName: {
          salad: INGREDIENT_PRICES.salad,
          bacon: INGREDIENT_PRICES.salad,
          cheese: INGREDIENT_PRICES.salad,
          meat: INGREDIENT_PRICES.salad,
        },
        totalPrice: 4,
        error: false,
      };
    case actionTypes.SET_PRODUCT:
      return {
        ...state,
        productForm: action.productForm,
      };
    case actionTypes.UPLOAD_PRODUCT_FORM_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPLOAD_PRODUCT_FORM_SUCCESS:
      return {
        ...state,
        uploaded: true,
        loading: false,
        productForm: action.productForm,
      };
    case actionTypes.UPLOAD_PRODUCT_FORM_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
