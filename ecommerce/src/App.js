
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
// import { CategoryModal } from "./components/modal/CategoryModal/";
import { GlobalStyle } from "./styles/global";

 export function App() {

  return (
    <>
    <BrowserRouter>
    <GlobalStyle />
    <Home/>
    {/* <CategoryModal/> */}
    
    
    
    </BrowserRouter>
    </>
  );
}
