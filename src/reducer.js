export const initialState = {
  basket: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_to_basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "remove_item":
      const newArrray = [...state.basket];
      const index = state.basket.findIndex(item => item.id === action.id);
      if (index >= 0) {
        newArrray.splice(index, 1);
      }
      return { ...state, basket: newArrray };

    default:
      return state;
  }
};

export default reducer;
