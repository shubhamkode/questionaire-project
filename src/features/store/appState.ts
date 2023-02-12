
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
    createSurveyQuestions: (state, action: PayloadAction<number>) => {
      for (let i = 0; i < action.payload; i++) {
        state.lead.questions.push({
          questionId: i,
          chosenOption: -1
        });
      }
    },
    updateSurveyQuestions: (state, action: PayloadAction<{
      questionId: number,
      chosenOption: 0 | 1
    }>) => {
      state.lead.questions.map(question => {
        if (question.questionId === action.payload.questionId) {
          question.chosenOption = action.payload.chosenOption
        }
      })
    }
  },
})

export const { updatePersonalInfo, createSurveyQuestions, updateSurveyQuestions } = appSlice.actions;

export default appSlice.reducer;
