import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ReservationSlice = createSlice({
  name: "Reservation",
  initialState,
  reducers: {
    AddReservation: (state, action) => {
      state.value.push(action.payload);
    },
    RemoveReservation: (state, action) => {
      let index = state.value.findIndex((item) => {
        return item === action.payload;
      });
      state.value.splice(index, 1);
    },
  },
});

export const { AddReservation, RemoveReservation } = ReservationSlice.actions;
export default ReservationSlice.reducer;
