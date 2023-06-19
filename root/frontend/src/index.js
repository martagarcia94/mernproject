import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Landing from "./components/Landing";
import Cities from "./components/Cities";
import LogIn from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import reportWebVitals from "./reportWebVitals";
//import { composeWithDevTools } from "redux-devtools-extension";
//import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//import thunk from "redux-thunk";
//import rootReducer from "./store/reduces/rootReducer";
import { store } from "./store/store";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/cities",
    element: <Cities />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
