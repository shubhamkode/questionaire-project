
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Lead } from "../models/lead.model";

interface InitialState {
  lead: Lead,
}

const initialState: InitialState = {
  lead: {
    userName: "",
    age: 0,
    gender: "",
    incomeGroup: "",
    questions: []
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

    updatePersonalInfo: (state, action: PayloadAction<{
      name: string
      age: number
      gender: string
      incomeGroup: string
    }>) => {
      state.lead.userName = action.payload.name;
      state.lead.age = action.payload.age;
      state.lead.gender = action.payload.gender;
      state.lead.incomeGroup = action.payload.incomeGroup;
    },
    updateSurveyQuestions: (state, action: PayloadAction<{
      questionId: number,
      chosenOption: number
    }[]>) => {
      state.lead.questions = action.payload
    },
    clearAppInfo: (state) => {
      state.lead = {
        userName: "",
        age: 0,
        gender: "",
        incomeGroup: "",
        questions: []
      }
    }
  },
})

export const { updatePersonalInfo, clearAppInfo, updateSurveyQuestions } = appSlice.actions;

export default appSlice.reducer;
