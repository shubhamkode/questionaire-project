import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./features/pages";

const router = createBrowserRouter([
  {
    path: "/", element: <HomePage />
  }
]);
export default function App() {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </ div>
  )
}
