import csrfFetch from "./csrf";


export const GET_PRODUCTS_BY_CATEGORY = 'products/GET_PRODUCTS_BY_CATEGORY';
export const getProductByCategory = (products) => {
    return {
        type: GET_PRODUCTS_BY_CATEGORY,
        products
    };
};

// export const recieveProductsByCategory = () => (state) => {
//     return state.products ? Object.values(state.products) : [];
// };
export const recieveProductsByCategory = (categoryId) => (state) => {
  if (!state.products) {
    return [];
  }
  const numCategoryId = parseInt(categoryId, 10);
  return Object.values(state.products).filter(product => product.categoryId === numCategoryId);
}

export const fetchProductsByCategory = (categoryId) => async dispatch => {
    
    const response = await csrfFetch(`/api/categories/${categoryId}/products`); 

        if (response.ok) {
            const products = await response.json();
            dispatch(getProductByCategory(products));
        };
};
