
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, SurveyPage } from "./features/pages";
import SurveySuccess from "./features/pages/SurveySuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/newSurvey",
    element: <SurveyPage />
  },
  {
    path: "/surveySuccess",
    element: <SurveySuccess />
  }
]);
export default function App() {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  );
}
