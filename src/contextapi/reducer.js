export const initialState = {
    selectedCategory: null,

  };

  export const actionTypes = {
    SET_CATEGORY: "SET_CATEGORY",
  };

  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_CATEGORY:
        return { ...state, selectedCategory: action.category };
      default:
        return state;
    }
  };