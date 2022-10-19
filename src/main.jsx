import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app";
import Theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyle from "@/styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("onx-livechat-body")).render(
  <React.StrictMode>
    <div>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
