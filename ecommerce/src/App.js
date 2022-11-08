import { BrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import { GlobalStyle } from "./styles/global";
import { Navbar } from "./components/Navbar";

 export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <GlobalStyle />
        <Root />
      </BrowserRouter>
    </>
  );
}
