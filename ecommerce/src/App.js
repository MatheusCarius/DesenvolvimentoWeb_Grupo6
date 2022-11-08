import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Root />
      </BrowserRouter>
    </>
  );
}
