import React, { useReducer } from "react";

const useData = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_DATA": {
          return { ...state, data: action.value };
        }
        case "CHOOSEN_IMG": {
          return { ...state, choosenImg: [...state.choosenImg, action.value] };
        }
        case "SET_IMG_ID": {
          return {
            ...state,
            choosenImg: [...state.choosenImg].filter(
              (el) => el.id !== action.value
            ),
          };
        }
        case "SET_BOUGHT": {
          return { ...state, beingBought: true };
        }
        case "SET_AFTER_BUY": {
          return {
            ...state,
            beingBought: false,
            choosenImg: [],
            isBought: true,
          };
        }
        default: {
          return state;
        }
      }
    },
    {
      data: [],
      choosenImg: [],
      isBought: false,
      beingBought: false,
    }
  );

  return [state, dispatch];
};

export default useData;
