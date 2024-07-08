import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import Main from "./layout/Main.jsx";
import MyThemeProvider from "./providers/ThemeProvider/MyThemeProvider.jsx";
import AuthProvider from "./providers/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyThemeProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router}>
            <Main />
          </RouterProvider>
        </AuthProvider>
      </ThemeProvider>
    </MyThemeProvider>
  </React.StrictMode>
);
