import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState,
  reducers: {
    AddPerson: (state, action) => {
      state.value.push(action.payload);
    },
    RemoveFood: (state, action) => {
      let index = state.value.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.value.forEach((item) => {
        if (item.id === action.payload.id) {
          if (item.Food.length <= 0) {
            state.value.splice(index, 1);
          } else {
            item.Food.pop();
          }
        }
      });
    },
    AddFood: (state, action) => {
      state.value.forEach((item) => {
        if (item.id === action.payload.id) {
          item.Food.push(action.payload.Food);
        }
      });
    },
  },
});
export const { AddPerson, AddFood, RemoveFood } = OrderSlice.actions;
export default OrderSlice.reducer;
