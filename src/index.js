import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const queryClient = new QueryClient();

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      background: "$purpleMedium",
      // brand colors
      greyLight: "#BBBBC5",
      greyMedium: "#414159",
      purpleLight: "#504CE7",
      purpleMedium: "#1D1D42",
      purpleDark: "#141432",
      greenLight: "#73D89C",
      greenMedium: "$green700",
      greenDark: "$green600",

      gradient:
        "linear-gradient(112deg, $blue700 10%, $purple700 30%, $green700 80%)",
      backdropFilter: "saturate(180%) blur(10px)",
      boxShadow: "rgba(2, 1, 1, 0.1) 0px 5px 20px -5px",
      link: "#3694FF",

      myColor: "$white",
    },
    space: {},
    fonts: {},
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>
);
