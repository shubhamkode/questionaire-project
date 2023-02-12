
import React from "react";
import { Page } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store";
import PersonalInfo from "./components/PersonalInfo";
import SurveyInfo from "./components/SurveyInfo";

import { resetStep } from "../../store/formNavState";

export default function SurveyPage() {

  const { currentStep } = useAppSelector(state => state.formNav);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    return () => {
      // localStorage.clear()
      dispatch(resetStep());
    }
  }, [])

  return <Page>{
    {
      0: <PersonalInfo />,
      1: <SurveyInfo />
    }[currentStep]
  }</Page>;
}
