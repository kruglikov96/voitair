import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import style, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', 'Roboto', sans-serif;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
