import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routing/AppRouter";
// import Autocomplete from './Components/Pages/home/Autocomplete'
// import GlobalStateProvidor from "./context/providor";
import {ContextProvidor} from "./context/context"

function App() {
  return (
    // <Autocomplete suggestions={"Oranges", "Apples", "Banana", "Kiwi", "Mango"]}/>
    <ContextProvidor>
      <Router>
        <AppRouter />
      </Router>
    </ContextProvidor>
  );
}
export default App;
