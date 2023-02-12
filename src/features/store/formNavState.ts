
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currentStep: number
}

const initialState: InitialState = {
  currentStep: 0
}



const formNavState = createSlice({
  name: "formNav",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep < 1) {
        state.currentStep++;
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 0) {
        state.currentStep--;
      }
    },
    resetStep: (state) => {
      state.currentStep = 0
    }
  }
})

export default formNavState.reducer;

export const { nextStep, prevStep, resetStep } = formNavState.actions;
