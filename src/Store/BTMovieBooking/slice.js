import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chairsBooking: [],
  chairsBooked: [],
};

export const btMovieBookingSlice = createSlice({
  name: "BTMovieBooking",
  initialState,
  reducers: {
    setChairsBooking: (state, { payload }) => {
      //   console.log("action: ", action);
      const index = state.chairsBooking.findIndex(
        (value) => value.soGhe === payload.soGhe
      );
      if (index !== -1) {
        state.chairsBooking = state.chairsBooking.filter(
          (value) => value.soGhe !== payload.soGhe
        );
      } else {
        state.chairsBooking.push(payload);
      }
    },

    setChairsBooked: (state, { payload }) => {
      state.chairsBooked = [...state.chairsBooked, ...state.chairsBooking];
      state.chairsBooking = [];
    },

    deleteChairsBooking: (state, { payload }) => {
      state.chairsBooking = state.chairsBooking.filter(
        (value) => value.soGhe !== payload.soGhe
      );
    },
  },
});

export const {
  reducer: btMovieBookingReducer,
  actions: btMovieBookingActions,
} = btMovieBookingSlice;
