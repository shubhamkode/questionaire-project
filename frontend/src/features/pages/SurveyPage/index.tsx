
import React from "react";
import { useParams } from "react-router-dom";
import { Page } from "../../components";
import PersonalInfo from "./components/PersonalInfo";
import SurveyInfo from "./components/SurveyInfo";


export default function SurveyPage() {
  const { stepNo } = useParams();

  return <Page>
    <div className="">
      {
        {
          0: <PersonalInfo />,
          1: <SurveyInfo />
        }[stepNo!]
      }
    </div>
  </Page >;
}
