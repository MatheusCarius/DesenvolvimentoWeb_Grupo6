
import { GlobalStyle } from "./styles/global";
import { Root } from "./routes/Root";
import { BrowserRouter } from 'react-router-dom';
 export function App() {
  return (
   
    <BrowserRouter>
    <Root/> 
    <GlobalStyle />
    </BrowserRouter>
    
    
   
  );
}
