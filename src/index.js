import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/HomePage/Home";
import MainContainer from "./Components/Quotes/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantList from "./Components/Restaurants/RestaurantList";
import Contact from "./Components/Contact/Contact";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        {
            path: "/",
            element: <Home />
        }, 
        {
            path: "quote",
            element: <MainContainer/>
        }, 
        {
            path: "restaurant",
            element: <RestaurantList />
        }, 
        {
            path: "contact",
            element: <Contact />
        }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
