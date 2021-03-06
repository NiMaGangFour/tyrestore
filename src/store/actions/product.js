import axios from "axios";
import * as actionTypes from "./actionTypes";

/* ACTION: --- UPLOAD FORM --- */
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

export const uploadProductFormFail = (error) => {
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
      prod_status: productForm.productStatus,
      prod_details: productForm.productDetails,
      prod_imageId: productForm.productImageId,
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
          dispatch(uploadProductFormFail(response.status));
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

/* ACTION: --- UPLOAD IMAGE --- */
export const uploadProductImageStart = () => {
  return {
    type: actionTypes.UPLOAD_PRODUCT_IMAGE_START,
  };
};

export const uploadProductImageSuccess = (data) => {
  return {
    type: actionTypes.UPLOAD_PRODUCT_IMAGE_SUCCESS,
    imageData: data,
  };
};

export const uploadProductImageFail = (error) => {
  return {
    type: actionTypes.UPLOAD_PRODUCT_IMAGE_FAIL,
    error: error,
  };
};

export const setProductImg = (selectedFile) => {
  const data = new FormData();
  data.append("file", selectedFile);
  // console.log(data);
  return (dispatch) => {
    dispatch(uploadProductImageStart());
    axios
      .post("/prodsImage", data, {
        // receive two parameter endpoint url ,form data
      })
      .then(async (response) => {
        const res = await response;
        // then print response status
        console.log(res.statusText);
        console.log(res.data);
        console.log(res);
        dispatch(uploadProductImageSuccess(res.data));
        if (res.statusText !== "OK") {
          dispatch(uploadProductImageFail(res.status));
          // get error message from body or default to response status
          const error = (data && data.message) || res.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

/* ACTION: --- DELETE IMAGE --- */
export const deleteProductImg = (imageData) => {
  console.log(">>>deleteProductImg");

  return (dispatch) => {
    dispatch(deleteProductImageStart());

    axios
      .delete("/prodsImage/image/" + imageData.id)
      .then(async (response) => {
        const res = await response;
        // then print response status

        console.log(res);
        dispatch(deleteProductImgSuccess(res.data));
        if (res.statusText !== "OK") {
          dispatch(deleteProductImageFail(res.status));
          // get error message from body or default to response status
          const error = res.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
};

export const deleteProductImageStart = () => {
  return {
    type: actionTypes.DELETE_PRODUCT_IMAGE_START,
  };
};

export const deleteProductImgSuccess = () => {
  return {
    type: actionTypes.DELETE_PRODUCT_IMAGE_SUCCESS,
  };
};

export const deleteProductImageFail = () => {
  return {
    type: actionTypes.DELETE_PRODUCT_IMAGE_FAIL,
  };
};

/* ACTION: --- ADD PROD TO CART --- */
export const addProdToCart = (prodInfo, prodCount) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    prodInfo: prodInfo,
    prodCount: prodCount,
  };
};

/* ACTION: --- INCREASE PROD COUNT IN CART --- */
export const increaseSingleProdCount = (id) => {
  return {
    type: actionTypes.INCREASE_SINGLE_PROD_COUNT,
    prodId: id,
  };
};

/* ACTION: --- DECREASE PROD COUNT IN CART --- */
export const decreaseSingleProdCount = (id) => {
  return {
    type: actionTypes.DECREASE_SINGLE_PROD_COUNT,
    prodId: id,
  };
};

/* ACTION: --- DECREASE PROD COUNT IN CART --- */
export const deletePordInCart = (id) => {
  return {
    type: actionTypes.DELETE_PROD_IN_CART,
    prodId: id,
  };
};
