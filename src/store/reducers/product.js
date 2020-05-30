import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  uploaded: false,
  productForm: null,
  imageData: null,
  cart: [],
  totalProdCount: 0,
  singleProdCount: 0,
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
    // ADD PRODUCT TO CART & SHOW TOTAL PRODUCT COUNT
    case actionTypes.ADD_PRODUCT_TO_CART:
      let tempProdName = action.prodInfo.prod_name;
      let tempProdId = action.prodInfo._id;
      let tempProdData = action.prodInfo;
      let currentProds = state.cart;
      let newProd = { _id: null, prod_name: null, prod_count: 0, prodData: {} };
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
          newProd.prod_data = tempProdData;
          currentProds.push(newProd);
        }
      } else {
        newProd._id = tempProdId;
        newProd.prod_name = tempProdName;
        newProd.prod_count = 1;
        newProd.prod_data = tempProdData;
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
    // INCREASE PROD COUNT IN CART
    case actionTypes.INCREASE_SINGLE_PROD_COUNT:
      // let fileredProdsById = state.cart.filter((prod) => {
      //   return prod.prod_brand.indexOf(action.prodId) !== -1;
      // });
      console.log("actionTypes.INCREASE_SINGLE_PROD_COUNT:");
      let currentProdsInCart = state.cart;
      let tempSingleProdCount = 0;
      let tempProdTotal = 0;
      currentProdsInCart.map((prod) => {
        if (prod._id === action.prodId) {
          prod.prod_count++;
          tempSingleProdCount = prod.prod_count;
          console.log("tempSingleProdCount", tempSingleProdCount);
        }
        tempProdTotal = tempProdTotal + prod.prod_count;
      });

      return {
        ...state,
        cart: currentProdsInCart,
        singleProdCount: tempSingleProdCount,
        totalProdCount: tempProdTotal,
      };

    default:
      return state;
  }
};

export default reducer;
