import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Wrapper from "./components/Wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Wrapper>
      <App />
    </Wrapper>
  </>
);
