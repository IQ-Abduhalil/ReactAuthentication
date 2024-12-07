import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GetTokenContextProvider } from "./context/GetTokenContext.jsx";

createRoot(document.getElementById("root")).render(
  <GetTokenContextProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </GetTokenContextProvider>
);
