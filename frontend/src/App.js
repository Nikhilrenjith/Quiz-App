import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Result from "./component/Result";

/* Routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
