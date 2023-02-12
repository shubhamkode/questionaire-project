import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, SurveyPage } from "./features/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/newSurvey",
    element: <SurveyPage />
  }
]);
export default function App() {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  );
}
