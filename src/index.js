import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import "./index.css";

const studentPortalTheme = extendTheme({
    colors: {
        brand: {
            blue: {
                200: "#bfdbfe",
                800: "#1e40af",
            },
            sky: {
                100: "#e0f2fe",
                800: "#075985",
            }
        }
    },
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={studentPortalTheme}>
        <CSSReset />
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </ChakraProvider>
);
