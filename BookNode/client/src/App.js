import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../src/Components/routing/AppRouter'
import NavBar  from "../src/Components/Features/navBar/NavBar";

function App() {
  return (
    // <div className="App">
      <Router>
      <NavBar />
        <AppRouter/>
      </Router>
    // </div>
  );
}

export default App;
