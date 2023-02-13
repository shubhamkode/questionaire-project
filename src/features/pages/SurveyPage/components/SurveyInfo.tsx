
import React from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "../../../models/question.model";
import { useAppDispatch } from "../../../store";
import { prevStep } from "../../../store/formNavState";
import { updateSurveyQuestions } from "../../../store/appState";

import { staticQuestions } from "../../../static/questions";

export default function SurveyInfo() {
  const navigate = useNavigate();

  const [questions, setQuestions] = React.useState<Question[]>(() => {
    const dummyQuestions: Question[] = [];
    staticQuestions.forEach((staticQuestion: { id: number; title: string }) => {
      dummyQuestions.push({
        id: staticQuestion.id,
        title: staticQuestion.title,
        chosenOption: null,
      });
    });
    return dummyQuestions;
  });

  React.useEffect(() => {
    const response = localStorage.getItem("surveyDetails");
    if (response) {
      setQuestions(JSON.parse(response));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("surveyDetails", JSON.stringify(questions));
  }, [questions]);

  const updateQuestions = (questionId: number, chosenOption: number) => {
    const dummyQuestions: Question[] = [...questions];
    dummyQuestions[questionId].chosenOption = chosenOption;
    setQuestions(dummyQuestions);
  };

  const dispatch = useAppDispatch();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    questions.forEach((question) => {
      if (question.chosenOption == null) {
        alert("Please select all answers!");
      }
      return;
    });

    const surveyQuestions: { questionId: number; chosenOption: number }[] = [];
    questions.forEach((question) => {
      surveyQuestions.push({
        questionId: question.id,
        chosenOption: question.chosenOption!,
      });
    });

    dispatch(updateSurveyQuestions(surveyQuestions));
    //post data
    //
    // console.log(lead)
    // const url = import.meta.env.VITE_LEAD_SITE;

    //await fetch(url, {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json"
    //  },
    //  body: JSON.stringify(lead)
    //})
    ////clear globla state
    //dispatch(clearAppInfo());
    navigate("/surveySuccess");
  };

  return (
    <div className="w-full p-2">
      <div
        className="space-y-5 p-2 max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-between px-4 py-2">
          <h2 className="text-3xl p-2 leading-8">Survey Info:-</h2>
          <p className="p-2 text-xl leading-8">Step: 2/2</p>
        </div>

        <div className="flex flex-col space-y-8 p-2 pb-8">
          {questions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              className="px-4 py-8 pt-12 border-2 border-black/10 shadow-md rounded-md space-y-8"
            >
              <h2 className="text-lg text-center px-1 py-2">
                {question.title}
              </h2>
              <div className="flex items-center justify-evenly p-2 gap-4 flex-col md:flex-row">
                <button
                  onClick={() => updateQuestions(questionIndex, 0)}
                  className={`${question.chosenOption == 0 ? "bg-black text-white" : ""
                    } w-full hover:bg-black hover:text-white duration-200 ease-in-out text-center ring-2 ring-black text-black text-base   py-3 rounded shadow-md`}
                >
                  Yes
                </button>
                <button
                  onClick={() => updateQuestions(questionIndex, 1)}
                  className={`${question.chosenOption == 1 ? "bg-black text-white" : ""
                    } w-full hover:bg-black hover:text-white duration-200 ease-in-out text-center ring-2 ring-black text-black text-base   py-3 rounded shadow-md`}
                >
                  No
                </button>
              </div>
            </div>
          ))}
          <div className="p-2 flex items-center gap-5 flex-col sm:flex-row">
            <button
              onClick={() => {
                dispatch(prevStep());
              }}
              className="w-full ring-black duration-200 ease-in-out hover:bg-black hover:text-white ring-2 py-3  rounded shadow-sm text-black text-xl"
            >
              Previous
            </button>

            <button
              onClick={handleFormSubmit}
              className="w-full ring-sky-600/80 duration-200 ease-in-out hover:bg-sky-600/80 hover:text-white ring-2 py-3  rounded shadow-sm text-sky-500/80 text-xl"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
