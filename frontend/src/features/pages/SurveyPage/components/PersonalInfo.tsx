
import React from "react";
import { useAppDispatch } from "../../../store";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import { updatePersonalInfo } from "../../../store/appState";

interface IPersonalFormState {
  name: string;
  age: number | null;
  gender: "none" | "male" | "female";
  incomeGroup: "none" | "upto_2_lakh" | "2lakh_to_5lakh" | "more_than_5lakhs";
}

export default function PersonalInfo() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initailState: IPersonalFormState = {
    name: "",
    age: null,
    gender: "none",
    incomeGroup: "none",
  };


  const [personalFormState, setPersonalFormState] =
    React.useState<IPersonalFormState>(() => {
      // const response = localStorage.getItem("personalState");
      // if (response) return JSON.parse(response)
      // else return initailState;
      return initailState;
    });


  React.useEffect(() => {
    const response = localStorage.getItem("personalDetails")
    if (response) {
      setPersonalFormState(JSON.parse(response))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("personalDetails", JSON.stringify(personalFormState))
  }, [personalFormState])


  const handleFormSubmit = (e: any) => {

    e.preventDefault();

    if (personalFormState.name == "" || personalFormState.gender == "none" || !personalFormState.age || personalFormState.incomeGroup == "none") {
      alert("Please fill form Details")
      return;
    }
    //update Global Lead Values
    dispatch(
      updatePersonalInfo({
        name: personalFormState.name,
        age: personalFormState.age!,
        gender: personalFormState.gender as string,
        incomeGroup: personalFormState.incomeGroup as string,
      })
    );


    //clear From State
    // setPersonalFormState(initailState);

    //navigating to next step
    navigate("/newSurvey/1")
  };

  const handleFormChange = (e: any) => {
    setPersonalFormState({
      ...personalFormState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full p-2">
      <form
        onSubmit={handleFormSubmit}
        className="space-y-3 p-2 max-w-2xl mx-auto"
      >
        <h2 className="text-2xl p-2 leading-8">Personal Info:-</h2>
        <div className="flex flex-col space-y-8 p-2  pb-8">
          <input
            placeholder="Name"
            value={personalFormState.name}
            onChange={handleFormChange}
            name="name"
            className="bg-slate-100 px-4 py-4 text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
          <input
            onChange={handleFormChange}
            value={personalFormState.age ?? "Agee"}
            placeholder="Age"
            name="age"
            className="bg-slate-100 px-4 py-4 text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
          />
          <div className="w-full relative">
            <select
              onChange={handleFormChange}
              name="gender"
              value={personalFormState.gender}
              className="bg-slate-100 w-full px-4 py-4 text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="none">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <AiFillCaretDown className="absolute right-2 top-6" />
          </div>
          <div className="w-full relative">
            <select
              onChange={handleFormChange}
              value={personalFormState.incomeGroup}
              name="incomeGroup"
              className="bg-slate-100 w-full px-4 py-4 text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="none">Select Income Group</option>
              <option value="upto_2_lakh">Upto 2 Lakhs</option>
              <option value="2lakh_to_5lakh">2 Lakhs to 5 Lakhs</option>
              <option value="more_than_5lakhs">More than 5 Lakhs</option>
            </select>
            <AiFillCaretDown className="absolute right-2 top-6" />
          </div>
        </div>
        <div className="px-3 py-2">
          <button
            type="submit"
            className="w-full ring-sky-600/80 duration-200 ease-in-out hover:bg-sky-600/80 hover:text-white ring-2 py-3  rounded shadow-sm text-sky-500/80 text-xl"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
