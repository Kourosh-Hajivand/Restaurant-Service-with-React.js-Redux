import { configureStore } from "@reduxjs/toolkit";
import OrderSlice from "./Slicer/OrderSlice";
import ReservationSlice from "./Slicer/ReservSlicer";

export const store = configureStore({
  reducer: {
    Reservation: ReservationSlice,
    Order: OrderSlice,
  },
});
