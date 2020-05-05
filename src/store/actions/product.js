import * as actionTypes from "./actionTypes";

// export const addProduct = () => {
//   return {
//     type: actionTypes.ADD_PRODUCT,
//   };
// };

export const uploadProductFormStart = () => {
  return {
    type: actionTypes.UPLOAD_PRODUCT_FORM_START,
  };
};

export const uploadProductFormSuccess = (productForm) => {
  return {
    type: actionTypes.UPLOAD_PRODUCT_FORM_SUCCESS,
    productForm: productForm,
  };
};

export const uploadProductFormStartFail = (error) => {
  return {
    type: actionTypes.UPLOAD_PRODUCT_FORM_FAIL,
    error: error,
  };
};

export const setProduct = (productForm) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prod_brand: productForm.productBrand,
      prod_name: productForm.productName,
      prod_price: productForm.productPrice,
      prod_info: productForm.productInformation,
      prod_details: productForm.productDetails,
      prod_status: productForm.productStatus,
    }),
  };

  return (dispatch) => {
    dispatch(uploadProductFormStart());
    fetch("/prods", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        console.log(productForm);
        console.log(response);
        dispatch(uploadProductFormSuccess(productForm));
        // check for error response
        if (!response.ok) {
          dispatch(uploadProductFormStartFail(response.status));
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        // this.setState({ postId: data.id });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};
