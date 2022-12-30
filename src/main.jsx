import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
