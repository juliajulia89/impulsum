import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import  { theme }  from "./theme";
const { breakpoints, colors, space, radii, shadows, textStyles, components } =
  theme;

const impulsumTheme = extendTheme({
  breakpoints,
  colors,
  space,
  radii,
  shadows,
  textStyles,
  components,
});

export default theme;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={impulsumTheme}>
    <App />
  </ChakraProvider>
);
