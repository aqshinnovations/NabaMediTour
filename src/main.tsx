import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import "./i18n";
import i18n from "./i18n";
import { getTheme } from "./theme";
import createEmotionCache from "./rtlCache";

// Detect RTL
const isRTL = i18n.language === "ar";
const cache = createEmotionCache(isRTL);
const theme = getTheme(isRTL ? "rtl" : "ltr");

// Set <body dir="">
document.body.dir = isRTL ? "rtl" : "ltr";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);


