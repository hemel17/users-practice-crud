import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import Main from "./layout/Main.jsx";
import MyThemeProvider from "./providers/ThemeProvider/MyThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyThemeProvider>
      <ThemeProvider>
        <RouterProvider router={router}>
          <Main />
        </RouterProvider>
      </ThemeProvider>
    </MyThemeProvider>
  </React.StrictMode>
);
