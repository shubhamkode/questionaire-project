
import React from "react";
import { Question } from "../../../models/question.model";
import { useAppDispatch, useAppSelector } from "../../../store";
import { prevStep } from "../../../store/formNavState";
import { updateSurveyQuestions } from "../../../store/appState";

import { staticQuestions } from "../../../static/questions";

export default function SurveyInfo() {
  const [questions, setQuestions] = React.useState<Question[]>(staticQuestions);

  const [surveryQuestions, setSurveryQuestions] = React.useState<
    {
      questionId: number,
      chosenOption: -1 | 0 | 1,
    }[]>(() => {
      const returnQuestions: { questionId: number, chosenOption: -1 | 0 | 1 }[] = []
      staticQuestions.forEach((question) => {
        returnQuestions.push({ questionId: question.id, chosenOption: -1 })
      })
      return returnQuestions;
    });

  console.table(surveryQuestions);

  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // updateSurveyQuestions({ questions: surveryQuestions });
  };

  const handlePrevClick = () => {
    dispatch(prevStep());
  };

  return (
    <div className="w-full p-2">
      <form
        onSubmit={handleFormSubmit}
        className="space-y-5 p-2 max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-3xl p-2 leading-8">Survey Info:-</h2>
          <p className="p-2 text-xl leading-8">Step: 2/2</p>
        </div>

        <div className="flex flex-col space-y-8 p-2 pb-8">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="px-4 py-8 pt-12 border-2 border-black/10 shadow-md rounded-md space-y-8">
              <h2 className='text-lg text-center px-1 py-2'>{question.title}</h2>
              <div className="flex items-center justify-evenly p-2 gap-4 flex-col md:flex-row">
                {question.choices.map((choice, choiceIndex) => (
                  <button
                    key={choiceIndex}
                    onClick={() => {
                      const updatedQuestions = surveryQuestions
                      updatedQuestions.map((question) => {
                        if (question.questionId == questionIndex) {
                          question.chosenOption = choiceIndex as -1 | 0 | 1
                        }
                      })
                      // updateSurveyQuestions(updatedQuestions)
                      console.table(surveryQuestions)
                    }}
                    className={
                      `${surveryQuestions[questionIndex].chosenOption == choiceIndex ? "bg-black text-white" : ""} w-full hover:bg-black hover:text-white duration-200 ease-in-out text-center ring-2 ring-black text-black text-base lowercase  py-3 rounded shadow-md`
                    }
                  > {choice}</button>
                ))}
              </div>
            </div>
          ))}
          <div className="p-2 flex items-center gap-5 flex-col sm:flex-row">
            <button
              onClick={handlePrevClick}
              className="w-full ring-black duration-200 ease-in-out hover:bg-black hover:text-white ring-2 py-3  rounded shadow-sm text-black text-xl"
            >
              Previous
            </button>

            <button
              type="submit"
              className="w-full ring-sky-600/80 duration-200 ease-in-out hover:bg-sky-600/80 hover:text-white ring-2 py-3  rounded shadow-sm text-sky-500/80 text-xl"
            >
              Finish
            </button>
          </div>
        </div>
      </form >
    </div >
  );
}
