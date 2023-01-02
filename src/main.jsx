import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import { store } from "./redux/store";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#AD02E0",
      dark: "#e0a419",
    },
    secondary: {
      main: "#AD02E0",
      dark: "#740994",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h2: {
      fontSize: 45,
      fontWeight: 400,
    },
    h3: {
      fontSize: 35,
    },
    body1: {
      fontSize: 24,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiAppBar: {
      color: "default",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        contained: {
          "&:hover": {
            color: "#fff",
            backgroundColor: "#AD02E0",
            boxShadow: "0px 0px 20px #AD02E0"
          },
          "&:active": {
            color: "#fff",
            backgroundColor: "#740994",
            boxShadow: "none"
          }
        },
        outlined: {
          color: "#000",
          border: "2px solid #AD02E0",
          "&:hover": {
            color: "#fff",
            backgroundColor: "#AD02E0",
            boxShadow: "0px 0px 20px #AD02E0"
          },
          "&:active": {
            color: "#fff",
            backgroundColor: "#740994",
            boxShadow: "none"
          }
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
