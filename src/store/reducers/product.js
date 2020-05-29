import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  uploaded: false,
  productForm: null,
  imageData: null,
  cart: [],
  totalProdCount: 0,
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
        // imageSrc: "/prodsImage/image/" + action.imageData.filename,
        imageSrc: "/prodsImage/image/" + action.imageData.id,
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
    // ADD PRODUCT TO CART
    case actionTypes.ADD_PRODUCT_TO_CART:
      let tempProdName = action.prodInfo.prod_name;
      let tempProdId = action.prodInfo._id;
      let currentProds = state.cart;
      let newProd = { _id: null, prod_name: null, prod_count: 0 };
      let prodExisted = false;
      let tempProdTotalCount = 0;

      if (currentProds.length !== 0) {
        currentProds.map((currentProd) => {
          if (currentProd.prod_name === tempProdName) {
            currentProd.prod_count++;
            prodExisted = true;
          }
        });
        if (prodExisted === false) {
          newProd._id = tempProdId;
          newProd.prod_name = tempProdName;
          newProd.prod_count = 1;
          currentProds.push(newProd);
        }
      } else {
        newProd._id = tempProdId;
        newProd.prod_name = tempProdName;
        newProd.prod_count = 1;
        currentProds.push(newProd);
      }

      currentProds.map((currentProd) => {
        tempProdTotalCount = tempProdTotalCount + currentProd.prod_count;
      });

      return {
        ...state,

        cart: currentProds,
        totalProdCount: tempProdTotalCount,
      };

    default:
      return state;
  }
};

export default reducer;
