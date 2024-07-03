import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
