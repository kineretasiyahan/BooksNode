import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routing/AppRouter";
// import Autocomplete from './Components/Pages/home/Autocomplete'
// import GlobalStateProvidor from "./context/providor";
// import {ContextProvider} from "./context/context"

function App() {
  return (
      <Router>
        <AppRouter />
      </Router>
  );
}
export default App;
