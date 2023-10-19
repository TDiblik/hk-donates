import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import RouteHandler from "./RouteHandler";

import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <RouteHandler />
  </StrictMode>
);
