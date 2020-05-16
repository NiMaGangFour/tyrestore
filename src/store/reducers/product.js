import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  uploaded: false,
  productForm: null,
  imageData: null,
};

// const INGREDIENT_PRICES = {
//   salad: 0.9,
//   bacon: 1.5,
//   cheese: 1.0,
//   meat: 2,
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // FORM
    case actionTypes.UPLOAD_PRODUCT_FORM_START:
      return {
        ...state,
        formLoading: true,
      };
    // FORM
    case actionTypes.UPLOAD_PRODUCT_FORM_SUCCESS:
      return {
        ...state,
        formUploaded: true,
        formLoading: false,
        productForm: action.productForm,
      };
    // FORM
    case actionTypes.UPLOAD_PRODUCT_FORM_FAIL:
      return {
        ...state,
        formLoading: false,
        formUploaded: false,
      };
    // IMAGE
    case actionTypes.UPLOAD_PRODUCT_IMAGE_START:
      return {
        ...state,
        imageLoading: true,
      };
    // IMAGE
    case actionTypes.UPLOAD_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        imageUploaded: true,
        imageLoading: false,
        imageData: action.imageData,
        imageSrc: "/prodsImage/image/" + action.imageData.filename,
      };
    // IMAGE
    case actionTypes.UPLOAD_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        imageLoading: false,
        imageUploaded: false,
      };

    // DELTE IMAGE
    case actionTypes.DELETE_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        // imageLoading: false,
        imageDeleting: false,
        imageUploaded: false,
      };
    // DELTE IMAGE
    case actionTypes.DELETE_PRODUCT_IMAGE_START:
      return {
        ...state,
        // imageLoading: false,
        imageDeleting: true,
      };
    // DELTE IMAGE
    case actionTypes.DELETE_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        // imageLoading: false,
        imageDeleting: false,
      };

    default:
      return state;
  }
};

export default reducer;
